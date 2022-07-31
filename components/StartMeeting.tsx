import {
	NativeSyntheticEvent,
	StyleSheet,
	Text,
	TextInput,
	TextInputChangeEventData,
	TouchableOpacity,
	View,
} from 'react-native';
import React from 'react';

const StartMeeting: React.FC<any> = ({
	name,
	setName,
	roomId,
	setRoomId,
	onStartMeetingClicked,
}) => {
	return (
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
				<TouchableOpacity
					style={styles.startMeetingButton}
					onPress={onStartMeetingClicked}
				>
					<Text style={styles.startMeetingButtonText}>
						Start Meeting
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default StartMeeting;

const styles = StyleSheet.create({
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
