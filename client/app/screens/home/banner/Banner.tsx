import useTypedNavigation from '@/hooks/useTypedNavigation'
import React from 'react'
import { FC } from 'react'
import { Pressable, View, Image, Text } from 'react-native'

const Banner: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View className='mt-5 w-full bg-[#47AA52] px-5 py-5 rounded-2xl justify-between flex-row'>
			<View>
				<Text className='text-white font-medium text-xl w-52'>
					Скидка 15% на все пиццы!
				</Text>

				<Pressable
					onPress={() => navigate('Explorer')}
					className='bg-stone-800 py-4 text-3xl rounded-full w-44 mt-4'
				>
					<Text className='text-white text-center font-medium'>
						Заказать сейчас
					</Text>
				</Pressable>
			</View>
			<View className='absolute bottom-0 right-6 w-32 h-32'>
				<Image
					source={require('../../../../assets/images/banner.png')}
					className='w-full h-full'
				/>
			</View>
		</View>
	)
}

export default Banner
