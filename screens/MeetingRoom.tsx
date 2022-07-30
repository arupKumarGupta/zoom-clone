import {
	NativeSyntheticEvent,
	StyleSheet,
	Text,
	TextInput,
	TextInputChangeEventData,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

const MeetingRoom = () => {
	const [name, setName] = useState<string>('');
	const [roomId, setRoomId] = useState<string>();
	return (
		<View style={styles.container}>
			<View style={styles.startMeetingContainer}>
				<View style={styles.info}>
					<TextInput
						placeholder="Enter name"
						style={styles.textInput}
						onChange={(
							event: NativeSyntheticEvent<TextInputChangeEventData>
						) => {
							setName(event.nativeEvent.text);
						}}
						value={name}
						placeholderTextColor="#bdb9b9"
					/>
				</View>
				<View style={styles.info}>
					<TextInput
						placeholder="Enter Room Id"
						style={styles.textInput}
						onChange={(
							event: NativeSyntheticEvent<TextInputChangeEventData>
						) => {
							setRoomId(event.nativeEvent.text);
						}}
						value={roomId}
						placeholderTextColor="#bdb9b9"
					/>
				</View>

				<View>
					<TouchableOpacity style={styles.startMeetingButton}>
						<Text style={styles.startMeetingButtonText}>
							Start Meeting
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default MeetingRoom;

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#1c1c1c',
		flex: 1,
	},
	startMeetingContainer: {},
	info: {
		backgroundColor: '#373538',
		width: '100%',
		height: 50,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: '#484648',
		justifyContent: 'center',
	},
	textInput: {
		color: '#fff',
		height: '100%',
		fontSize: 18,
		paddingHorizontal: 10,
	},
	startMeetingButton: {
		backgroundColor: '#0470dc',
		height: 40,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
	},
	startMeetingButtonText: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '600',
	},
});
