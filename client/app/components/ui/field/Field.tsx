import { JSX } from 'react'
import React from 'react'
import { Controller } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx'

import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	name,
	rules,
	className,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
						className={cn(
							'bg-white w-full rounded-lg pb-4 pt-2.5 px-4 my-1.5',
							error ? 'border-red-500' : 'border-gray-400'
						)}
					>
						<TextInput
							autoCapitalize='none'
							value={value?.toString() || ''}
							onChangeText={onChange}
							onBlur={onBlur}
							className='text-black text-base'
							placeholderTextColor='#6A6A6A'
							{...rest}
						/>
					</View>
					{error && (
						<Text className='text-red-500 text-sm mt-1 ml-4'>
							{error.message}
						</Text>
					)}
				</>
			)}
		/>
	)
}

export default Field
