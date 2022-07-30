import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useContext } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NavigationContext from '../context/NavigationContext';

interface MenuItem {
	id: number | string;
	name: string;
	title: string;
	color?: string;
	screen?: string;
}

const menuItems: MenuItem[] = [
	{
		id: 1,
		name: 'video-camera',
		title: 'New Meeting',
		color: '#ff751f',
		screen: 'Meeting',
	},
	{ id: 2, name: 'plus-square', title: 'Join' },
	{ id: 3, name: 'calendar', title: 'Schedule' },
	{ id: 4, name: 'upload', title: 'Share Screen' },
];

const MenuButton: React.FC<MenuItem> = ({ title, name, color, screen }) => {
	const navigation = useContext(NavigationContext);

	const navigate = () => {
		if (screen) navigation?.navigate(screen);
	};

	return (
		<View style={styles.menuButton}>
			<TouchableOpacity
				style={[{ backgroundColor: color ?? '#0470dc' }, styles.button]}
				onPress={navigate}
			>
				<FontAwesome name={name} size={20} color="#efefef" />
			</TouchableOpacity>
			<Text style={styles.menuText}>{title}</Text>
		</View>
	);
};

const MenuButtons = () => {
	return (
		<View style={styles.container}>
			<View>
				<FlatList
					contentContainerStyle={styles.buttonsContainer}
					data={menuItems}
					renderItem={({ item }) => (
						<MenuButton
							id={item.id}
							key={item.id}
							name={item.name}
							title={item.title}
							color={item.color}
							screen={item.screen}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default MenuButtons;

const styles = StyleSheet.create({
	container: {
		marginTop: 25,
		paddingBottom: 10,
		borderBottomColor: '#1f1f1f',
		borderBottomWidth: 1,
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	menuText: {
		color: '#858585',
		fontSize: 12,
		paddingTop: 10,
		fontWeight: '600',
	},
	button: {
		borderRadius: 20,
		width: 50,
		height: 50,

		justifyContent: 'center',
		alignItems: 'center',
	},
	menuButton: {
		alignItems: 'center',
	},
});
