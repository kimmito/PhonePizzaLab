import React, { FC } from 'react'
import RnToast, { BaseToast } from 'react-native-toast-message'

const options = (primaryColor: string, secondaryColor: string) => ({
	style: { backgroundColor: '080808', borderLeftColor: primaryColor },
	text1Style: { color: secondaryColor, fontSize: 16, fontWeight: 'bold' as const },
	text2Style: { color: secondaryColor, fontSize: 14 }
})

const Toast: FC = () => {
	return (
		<RnToast
			topOffset={50}
			config={{
				success: props => (
					<BaseToast {...props} {...options('63E769', '#fff')} />
				),
				info: props => <BaseToast {...props} {...options('47AA52', '#fff')} />,
				error: props => <BaseToast {...props} {...options('E74C3C', '#fff')} />
			}}
		/>
	)
}

export default Toast
