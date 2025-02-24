import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import GenresStack from "./screens/GenresStack";
import {NavigationContainer} from "expo-router/build/fork/NavigationContainer";
import Ionicons from '@expo/vector-icons/Ionicons'
import {StatusBar} from "expo-status-bar";

export default function App() {

    const Tab = createBottomTabNavigator();

    return (
        <>

            <StatusBar style="light" />
            <NavigationContainer>
                <Tab.Navigator id={1}
                               screenOptions={({route}) => ({
                                   headerShown: false,
                                   tabBarStyle: styles.tabBar,
                                   tabBarIcon: ({focused, color, size}) => {
                                       let iconName;

                                       if (route.name === 'Home') {
                                           iconName = focused
                                               ? 'home'
                                               : 'home-outline'
                                           color="#ECEEF1";
                                       } else if (route.name === 'Genres') {
                                           iconName = focused ? 'musical-notes' : 'musical-notes-outline'
                                           color="#ECEEF1";
                                       }

                                       // You can return any component that you like here!
                                       return <Ionicons name={iconName} size={size} color={color}/>;
                                   },
                                   tabBarActiveTintColor: '#FECF49',
                                   tabBarInactiveTintColor: 'gray',
                               })}
                >
                    <Tab.Screen name="Home" component={Home}/>


                    <Tab.Screen name="Genres" component={GenresStack}/>
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBar: {
        backgroundColor: '#212121',
        borderTopWidth: 0,
        elevation: 0
    }
});
