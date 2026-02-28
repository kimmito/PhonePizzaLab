import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'

import { IRoute } from './navigation.types'
import Explorer from '@/screens/explorer/Explorer'
import Favorites from '@/screens/favorites/Favorites'
import Profile from '@/screens/profile/Profile'
import Search from '@/screens/search/Search'

export const routes: IRoute[] = [
	{
		name: 'Auth',
		component: Auth
	},
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
	}
]
