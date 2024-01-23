import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Button } from 'react-native'
import { useState } from 'react'
import CheckInput from '../components/CheckInput';

const Installation = ({ sendFunc }) => {

    const [wallbox, setWallbox] = useState("")
    const constructMsg = () => {
        msg = ""
        msg += "Wallbox: " + wallbox ? wallbox : "Nein" + "\n"
        print(msg)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <CheckInput name={"Wallbox"} onChange={setWallbox} text={"Fabrikat: "}></CheckInput>

            <Button title="Nachricht abschicken" onPress={() => {
                msg = constructMsg();
                sendFunc(msg)
            }
            }></Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20,
    },
})

export default Installation