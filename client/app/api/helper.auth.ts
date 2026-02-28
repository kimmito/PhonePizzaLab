import axios from 'axios'
import { getItemAsync } from 'expo-secure-store'

import { EnumSecureStore } from '@/types/auth.interface'

import { saveToStorage } from '@/services/auth/auth.helper'

import { API_URL, getAuthUrl } from '@/config/api.config'

import { IAuthResponse } from './../types/auth.interface'

export const getNewTokens = async () => {
	try {
		const refreshToken = await getItemAsync(EnumSecureStore.REFRESH_TOKEN)

		const response = await axios.post<string, { data: IAuthResponse }>(
			API_URL + getAuthUrl('/login/access-token'),
			{ refreshToken },
			{
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		if (response.data.accessToken) await saveToStorage(response.data)
	} catch (e) {
		console.log(e)
	}
}
