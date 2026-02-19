import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { returnCategoryObject } from './return-category-object'
import { CategoryDto } from './dto/category.dto'
import { slugify } from 'src/utils/generate-slug'

@Injectable()
export class CategoryService {
	constructor(private prisma: PrismaService) {}

	async getAll() {
		return await this.prisma.category.findMany({
			select: returnCategoryObject
		})
	}

	async byId(id: number) {
		const category = await this.prisma.category.findUnique({
			where: { id },
			select: returnCategoryObject
		})
		if (!category) {
			throw new Error('Category not found')
		}
		return category
	}

	async bySlug(slug: string) {
		const category = await this.prisma.category.findUnique({
			where: { slug },
			select: returnCategoryObject
		})
		if (!category) {
			throw new Error('Category not found')
		}
		return category
	}

	async create(dto: CategoryDto) {
		return await this.prisma.category.create({
			data: {
				name: dto.name,
				slug: slugify(dto.name),
				image: dto.image
			}
		})
	}

	async update(id: number, dto: CategoryDto) {
		return await this.prisma.category.update({
			where: { id },
			data: {
				name: dto.name,
				slug: slugify(dto.name),
				image: dto.image
			}
		})
	}

	async delete(id: number) {
		return await this.prisma.category.delete({
			where: { id }
		})
	}
}
