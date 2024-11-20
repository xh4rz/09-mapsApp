import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { PermissionsScreen } from '../screens/permissions/PermissionsScreen';
import { MapScreen } from '../screens/maps/MapScreen';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParams = {
	LoadingScreen: undefined;
	PermissionsScreen: undefined;
	MapScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
	return (
		<Stack.Navigator
			initialRouteName="PermissionsScreen"
			screenOptions={{
				headerShown: false,
				cardStyle: {
					backgroundColor: 'white'
				}
			}}>
			<Stack.Screen name="LoadingScreen" component={LoadingScreen} />
			<Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
			<Stack.Screen name="MapScreen" component={MapScreen} />
		</Stack.Navigator>
	);
};
