import React, { FC } from 'react'
import { Pressable, Text, View, Image } from 'react-native'

import { IProduct } from '@/types/product.interface'
import useTypedNavigation from '@/hooks/useTypedNavigation'
import { getMediaSource } from '@/utils/getMediaSource'
import ProductInfo from './ProductInfo'

interface IProductItem {
	product: IProduct
}
const ProductItem: FC<IProductItem> = ({ product }) => {
	const {navigate}= useTypedNavigation()
	return (
		<View className='flex-col mb-3.5 rounded-lg'>
			<Pressable
				onPress={() => {
					navigate('Product', { slug: product.slug })
				}} className='bg-gray-100 rounded-xl relative overflow-hidden p-5 flex items-center justify-center'
			>
				<Image source={getMediaSource(product.image)} width={130} height={130} />
			</Pressable>
      <ProductInfo product={product} />
		</View>
	)
}

export default ProductItem
