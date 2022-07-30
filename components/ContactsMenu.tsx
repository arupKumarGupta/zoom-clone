import {
	FlatList,
	StyleSheet,
	Text,
	View,
	Image,
	ImageSourcePropType,
} from 'react-native';
import React, { useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IContact {
	type: 'contact' | 'starred';
	name?: string;
	photo?: ImageSourcePropType;
}
const contacts: IContact[] = [
	{
		type: 'starred',
		name: 'Starred',
	},
	{
		type: 'contact',
		name: 'Jane Doe',
	},
	{
		type: 'contact',
		name: 'Dane Joe',
	},
	{
		type: 'contact',
		name: 'Bruce Willis',
		photo: require('../assets/favicon.png'),
	},
];

const Contact: React.FC<IContact> = ({ name, type, photo }) => {
	let avatar = null;
	useEffect(() => {
		console.log('arup', photo);
	}, [photo]);
	if (photo) {
		avatar = <Image source={photo} style={styles.image} />;
	} else {
		const icon = type === 'starred' ? 'star' : 'user';
		avatar = <AntDesign name={icon} size={30} color="#efefef" />;
	}
	return (
		<View style={styles.row}>
			<View style={styles.starIcon}>{avatar}</View>

			<Text style={styles.textContainer}>{name}</Text>
		</View>
	);
};

const ContactsMenu = () => {
	return (
		<View style={styles.container}>
			<FlatList
				data={contacts}
				renderItem={({ item }) => (
					<Contact
						type={item.type}
						name={item.name}
						photo={item.photo}
					/>
				)}
			/>
		</View>
	);
};

export default ContactsMenu;

const styles = StyleSheet.create({
	container: {},
	textContainer: {
		color: '#fff',
		paddingLeft: 15,
		fontSize: 18,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginTop: 20,
	},
	starIcon: {
		backgroundColor: '#333',
		width: 55,
		height: 55,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 20,
	},
	image: {
		height: 55,
		width: 55,
		borderRadius: 20,
	},
});
