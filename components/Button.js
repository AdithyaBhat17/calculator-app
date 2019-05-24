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
    buttonSecondary: {
        backgroundColor: '#a6a6a6'
    },
    buttonAccent: {
        backgroundColor: '#FE6500'
    },
    text: {
        color: '#fff',
        fontSize: 28
    },
    textSecondary: {        
        color: '#060606'
    }
})

export default ({onPress, text, size, theme}) => {
    const buttonStyles = [styles.button]
    const textStyles = [styles.text]

    if(size === 'double')
        buttonStyles.push(styles.buttonDouble)

    if(theme === 'secondary') {
        buttonStyles.push(styles.buttonSecondary)
        textStyles.push(styles.textSecondary)
    } else if (theme === 'accent') {
        buttonStyles.push(styles.buttonAccent)
    }

    return (
        <TouchableOpacity style={buttonStyles} onPress={onPress}>
            <Text style={textStyles}>{text}</Text>
        </TouchableOpacity>
    )
}
    