import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Searchbar = () => {
	return (
		<View style={styles.container}>
			<Fontisto name="search" size={20} color="#858585" />
			<Text style={styles.textSearchbar}>Searchbar</Text>
		</View>
	);
};

export default Searchbar;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#333',
		flexDirection: 'row',
		paddingHorizontal: 10,
		height: 40,
		alignItems: 'center',

		borderRadius: 10,
	},
	textSearchbar: {
		paddingLeft: 10,
		color: '#858585',
		fontSize: 20,
	},
});
