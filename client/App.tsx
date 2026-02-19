import Navigation from 'app/navigation/Navigation'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import './global.css'
import AuthProvider from '@/providers/auth/AuthProvider'

function App() {
	return (
		<>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar style='light' />
			</AuthProvider>
		</>
	)
}

registerRootComponent(App)
