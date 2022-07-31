import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import StartMeeting from '../components/StartMeeting';
import { Socket, connect } from 'socket.io-client';
import {
	CONNECTION,
	GET_ROOM_USERS,
	JOIN_ROOM,
	USER_CONNECTED,
} from '../contants/socketEvents';
let socket: Socket;
const MeetingRoom = () => {
	const [name, setName] = useState<string>('');
	const [roomId, setRoomId] = useState<string>('');
	const [activeUsers, setActiveUsers] = useState<any[]>([]);
	useEffect(() => {
		const API_URL = `http://localhost:3001`;
		socket = connect(API_URL);
		return () => {
			socket.disconnect();
			socket.close();
		};
	}, []);

	useEffect(() => {
		if (!socket) {
			return;
		}
		socket.on(CONNECTION, (data) => {
			console.log('connected!', data);
		});
		socket.on(GET_ROOM_USERS, (users) => {
			setActiveUsers(users);
		});
	}, []);

	const onStartMeetingClicked = () => {
		socket.emit(JOIN_ROOM, { name, roomId });
	};

	return (
		<View style={styles.container}>
			<StartMeeting
				name={name}
				roomId={roomId}
				setRoomId={setRoomId}
				setName={setName}
				onStartMeetingClicked={onStartMeetingClicked}
			/>
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
