import { IProduct } from './product.interface'

export interface IUser {
	id: number
	email: string
	password: string
	name: string
	avatarPath: string
	phone: string
	favorites: IProduct[]
}
