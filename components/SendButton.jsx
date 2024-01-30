import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { COLORS } from '../global';

const SendButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{ fontSize: 17, color: COLORS.background }}>Nachricht abschicken</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 7,
        backgroundColor: COLORS.action,
        borderRadius: 3,
    },
})

export default SendButton