import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException
} from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { hash, verify } from 'argon2'
import { AuthDto } from './dto/auth.dto'
import { faker } from '@faker-js/faker'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'

@Injectable()
export class AuthService {
	constructor(
		private prisma: PrismaService,
		private jwt: JwtService
	) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)
		const tokens = this.issueTokens(user.id)

		return this.buildAuthResponse(user, tokens)
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwt.verifyAsync<{ id: number }>(refreshToken)
		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const user = await this.prisma.user.findUnique({
			where: {
				id: result.id
			}
		})

		if (!user) throw new UnauthorizedException('User not found')

		const tokens = this.issueTokens(user.id)

		return this.buildAuthResponse(user, tokens)
	}

	async register(dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})

		if (oldUser) throw new BadRequestException('User already exists')

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				name: faker.person.firstName(),
				avatarPath: faker.image.avatar(),
				phone: faker.phone.number(),
				password: await hash(dto.password)
			}
		})

		const tokens = this.issueTokens(user.id)

		return this.buildAuthResponse(user, tokens)
	}

	private buildAuthResponse(
		user: User,
		tokens: { accessToken: string; refreshToken: string }
	) {
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	private issueTokens(userId: number) {
		const data = { id: userId }

		const accessToken = this.jwt.sign(data, {
			expiresIn: '15m'
		})

		const refreshToken = this.jwt.sign(data, {
			expiresIn: '7d'
		})

		return { accessToken, refreshToken }
	}

	private returnUserFields(user: User) {
		return {
			id: user.id,
			email: user.email
		}
	}

	private async validateUser(dto: AuthDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})
		if (!user) throw new NotFoundException('User not found')

		const isValid = await verify(user.password, dto.password)
		if (!isValid) throw new UnauthorizedException('Invalid password')

		return user
	}
}
