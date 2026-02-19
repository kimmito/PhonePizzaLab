import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PrismaService } from 'src/prisma.service'
import { User } from '@prisma/client'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private prisma: PrismaService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.getOrThrow<string>('JWT_SECRET')
		})
	}

	async validate({ id }: Pick<User, 'id'>) {
		const user = await this.prisma.user.findUnique({
			where: { id }
		})

		if (!user) throw new UnauthorizedException('User not found')

		return user
	}
}
