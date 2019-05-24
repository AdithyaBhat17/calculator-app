import React from 'react'
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#333',
        flex: 1,
        alignItems: 'center',
        height: Math.floor(width / 4 - 10),
        borderRadius: Math.floor(width / 4),
        margin: 5,
        justifyContent: 'center'
    },
    buttonDouble: {
        flex: 0,
        width: width / 2 - 10
    },
    text: {
        color: '#fff',
        fontSize: 28
    }
})

export default ({onPress, text, size}) => {
    const buttonStyles = [styles.button]

    if(size === 'double')
        buttonStyles.push(styles.buttonDouble)

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
    