import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import MenuButtons from '../components/MenuButtons';
import ContactsMenu from '../components/ContactsMenu';

import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import NavigationContext from '../context/NavigationContext';

interface HomeProps {
	navigation: StackNavigationHelpers;
}
const Home: React.FC<HomeProps> = ({ navigation }) => {
	return (
		<NavigationContext.Provider value={navigation}>
			<View style={styles.container}>
				<SafeAreaView style={styles.safeArea}>
					{/* Header */}
					<Header />
					{/* SearchBar */}
					<Searchbar />
					{/* Menubar */}
					<MenuButtons />
					{/* ContactOptions */}
					<ContactsMenu />
				</SafeAreaView>
			</View>
		</NavigationContext.Provider>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1c1c1c',
		padding: 15,
	},
	safeArea: {
		height: '100%',
	},
});
