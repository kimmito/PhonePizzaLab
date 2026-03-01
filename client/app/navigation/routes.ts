import Home from '../screens/home/Home'

import { IRoute } from './navigation.types'
import Explorer from '@/screens/explorer/Explorer'
import Favorites from '@/screens/favorites/Favorites'
import Profile from '@/screens/profile/Profile'
import Search from '@/screens/search/Search'
import Cart from '@/screens/cart/Cart'
import Category from '@/screens/category/Category'

export const routes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Explorer',
		component: Explorer
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Cart',
		component: Cart
	},
	{
		name: 'Category',
		component: Category
	}
]
