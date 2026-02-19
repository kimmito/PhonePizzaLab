import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { FC } from 'react'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const Navigation: FC = () => {
	return (
		<NavigationContainer>

		</NavigationContainer>
	)
}

export default Navigation
