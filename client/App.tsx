import Navigation from 'app/navigation/Navigation'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import './global.css'
import AuthProvider from '@/providers/auth/AuthProvider'
import Toast from 'react-native-toast-message'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
				<StatusBar style='light' />
				<Toast />
			</AuthProvider>
		</QueryClientProvider>
	)
}

registerRootComponent(App)
