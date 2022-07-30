import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface MenuItem {
	id: number | string;
	name: string;
	title: string;
	color?: string;
}

const menuItems: MenuItem[] = [
	{ id: 1, name: 'video-camera', title: 'New Meeting', color: '#ff751f' },
	{ id: 2, name: 'plus-square', title: 'Join' },
	{ id: 3, name: 'calendar', title: 'Schedule' },
	{ id: 4, name: 'upload', title: 'Share Screen' },
];

const MenuButton: React.FC<MenuItem> = ({ title, name, color }) => {
	return (
		<View style={styles.menuButton}>
			<TouchableOpacity
				style={[{ backgroundColor: color ?? '#0470dc' }, styles.button]}
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
