import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../components/Button';
import {GENRE_COLORS} from '../utils/theme';
import {useNavigation} from '@react-navigation/native';

export default function Genre() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}></Text>
            <Button
                text="1980s"
                bgColor={GENRE_COLORS.eighties}
                onPress={() => navigation.navigate('StationsList', {genre: '1980s'})}
            />
            <Button
                text="1990s"
                bgColor={GENRE_COLORS.nineties}
                onPress={() => navigation.navigate('StationsList', {genre: '1990s'})}
            />
            <Button
                text="Anime"
                bgColor={GENRE_COLORS.anime}
                onPress={() => navigation.navigate('StationsList', {genre: 'Anime'})}
            />
            <Button
                text="Jazz"
                bgColor={GENRE_COLORS.jazz}
                onPress={() => navigation.navigate('StationsList', {genre: 'Jazz'})}
            />
            <Button
                text="LoFi"
                bgColor={GENRE_COLORS.lofi}
                onPress={() => navigation.navigate('StationsList', {genre: 'LoFi'})}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});
