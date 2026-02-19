import React, { useState } from 'react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'
import { Pressable } from 'react-native'

import Loader from '@/components/ui/Loader'
import Button from '@/components/ui/button/Button'

import useTypedNavigation from '@/hooks/useTypedNavigation'

import { IAuthFormData } from '@/types/auth.interface'

import AuthFields from './AuthFields'

export const Auth: FC = () => {
	const { navigate } = useTypedNavigation()
	const { handleSubmit, reset, control } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		console.log(data)
	}

	const [isReg, setIsReg] = useState(false)
	const isLoading = false

	return (
		<View className='mx-2 items-center justify-center h-full'>
			<View className='w-9/12'>
				<Text className='text-center text-black text-3xl font-medium mb-8'>
					{isReg ? 'Регистрация' : 'Авторизация'}
				</Text>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<AuthFields control={control} />

						<Button className='w-full' onPress={handleSubmit(onSubmit)}>
							{isReg ? 'Зарегистрироваться' : 'Войти'}
						</Button>

						<Pressable onPress={() => setIsReg(!isReg)}>
							<Text className='text-black text-center text-base mt-6'>
								{isReg ? 'Уже есть аккаунт? ' : 'Нет аккаунта? '}
								<Text className='text-[#47AA52]'>
									{isReg ? 'Войти' : 'Зарегистрироваться'}
								</Text>
							</Text>
						</Pressable>
					</>
				)}
			</View>
		</View>
	)
}

export default Auth
