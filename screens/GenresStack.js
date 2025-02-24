import { createStackNavigator } from '@react-navigation/stack';
import StationsList from './StationsList';
import Genre from './Genres'
const Stack = createStackNavigator();
import StationPlayer from '../components/StationPlayer';

export default function GenresStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="GenresList"
                component={Genre}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="StationsList"
                component={StationsList}
                options={({ route }) => ({ title: `${route.params.genre} Stations`, headerShown: false })}
            />
            <Stack.Screen
                name="StationPlayer"
                component={StationPlayer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}