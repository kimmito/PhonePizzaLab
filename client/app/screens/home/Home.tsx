import React from 'react'
import { FC } from 'react'
import Header from './Header'
import Banner from './banner/Banner'
import Layout from '@/components/ui/layout/layout'
import Categories from './categories/Categories'

export const Home: FC = () => {
	return (
		<Layout className='px-2'>
			<Header />
			<Banner />
			<Categories />
		</Layout>
	)
}

export default Home
