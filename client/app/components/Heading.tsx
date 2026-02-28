import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'
import { Text } from 'react-native'

interface IHeading {
	isCenter?: boolean
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
	children,
	isCenter = false,
	className
}) => {
	return (
		<Text
			className={cn(
				'text-black font-semibold text-2xl',
				isCenter && 'text-center',
				className
			)}
		>
			{children}
		</Text>
	)
}

export default Heading
