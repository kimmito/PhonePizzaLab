import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cart: React.FC = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Cart</Text>
			<Text style={styles.placeholder}>Your cart is empty</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 16
	},
	placeholder: {
		fontSize: 16,
		color: '#999'
	}
})

export default Cart
