import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stations} from '../utils/stations'
import { useNavigation } from '@react-navigation/native';

export default function StationsList({route}) {

    console.log(route)
    const {genre} = route.params;
    const navigation = useNavigation(); // Get navigation object
    console.log(genre)

    const genreStations = stations[genre]

    const handleStationPress = (stationName, stationUrl) => {
        // Navigate to StationPlayer screen with station details
        navigation.navigate('StationPlayer', {
            stationName: stationName,
            stationUrl: stationUrl,
        });
    };

return (
    <>
        <SafeAreaView style={styles.container}>
            <Text style={styles.headerText}>{genre} Stations</Text>
            <FlatList
                contentContainerStyle={styles.list} // Centers the FlatList's content
                data={genreStations}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => handleStationPress(item.name, item.streamUrl)}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.itemText}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        justifyContent: 'center',
        paddingHorizontal: 18,
    },
    itemContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        margin: 15,
        backgroundColor: '#333333',
        borderRadius: 8,

    },
    itemText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18,
    },
    list: {
        justifyContent: 'center',
        flexGrow: 1,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center',
    }
})