import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Audio} from 'expo-av';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function StationPlayer({route}) {
    const {genre, stationUrl, stationName} = route.params;

    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);

    // Play or stop the station
    const playPauseHandler = async () => {
        if (isPlaying) {
            // Stop the audio
            await sound.stopAsync()
            setIsPlaying(false);
        } else {
            //     Play the audio
            const {sound: newSound} = await Audio.Sound.createAsync(
                {uri: stationUrl,},
                {shouldPlay: true}
            )
            setSound(newSound)
            setIsPlaying(true);
        }
    }

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync(); // Unload the sound when the component is unmounted
            }
            : undefined;
    }, [sound]);

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#212121'}}>
            <View style={styles.container}>
                <Text style={{color: 'white', marginBottom: 20, fontSize: 18}}>{stationName}</Text>
                <Pressable
                    style={[styles.button, isPlaying && styles.buttonActive]}
                    onPress={playPauseHandler}
                >
                    <Text style={styles.text}>{isPlaying ? 'Stop' : 'Play'}</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121'
    },
    button: {
        marginTop: 10,
        backgroundColor: '#FFC650',
        paddingVertical: 20,
        paddingHorizontal: 50,
        borderRadius: 10,
        elevation: 8
    },
    text: {
        fontSize: 20,
        color: '#005179',
        fontWeight: 'bold',
    }
})