import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

const Navigation = () => {
	const Stack = createStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					name="Home"
					component={Home}
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="Meeting"
					component={MeetingRoom}
					options={{
						title: 'Start a new Meeting',
						headerStyle: {
							backgroundColor: '#1c1c1c',
							shadowOpacity: 0,
						},
						headerTintColor: 'white',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
