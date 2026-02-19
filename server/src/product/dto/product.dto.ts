import { IsString, IsNumber, IsInt } from 'class-validator'
import { Type } from 'class-transformer'

export class ProductDto {
	@IsString()
	name: string

	@IsString()
	image: string

	@IsString()
	description: string

	@IsNumber()
	price: number

	@IsInt()
	@Type(() => Number)
	categoryId: number
}
