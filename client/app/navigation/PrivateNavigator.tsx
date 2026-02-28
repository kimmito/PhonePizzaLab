import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { TypeRootStackParamList } from './navigation.types'
import { routes } from './routes'
import AuthScreen from '@/screens/auth/Auth'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigator: FC = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				contentStyle: { backgroundColor: '#fff' }
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<Stack.Screen name='Auth' component={AuthScreen} />
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigator
