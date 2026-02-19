import { Prisma } from '@prisma/client'

export const returnProductObject: Prisma.ProductSelect = {
	id: true,
	name: true,
	slug: true,
	image: true,
	description: true,
	price: true,
	categoryId: true,
	createdAt: true
}
