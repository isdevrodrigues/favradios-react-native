import {Pressable, StyleSheet, Text} from 'react-native';

function Button({text, bgColor, onPress}) {


    return (
        <>
            <Pressable
                onPress={onPress}
                style={[

                styles.buttonContainer,
                // Passing background color as props
                // The style prop on Pressable accepts an array where later styles override earlier ones.
                {backgroundColor: bgColor},
            ]}
                       android_ripple={{color: ''}}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </>
    )
}


export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        elevation: 8,
        borderRadius: 12,
        width: '70%',
        marginVertical: 10,
    },
    buttonText: {
        fontSize: 24,
        alignSelf: 'center',
        paddingVertical: 20,
        fontWeight: 'bold',
    }
})