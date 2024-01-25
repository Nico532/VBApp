import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useState } from 'react'
import WBDropdown from '../components/WBDropdown';
import CheckInput from '../components/CheckInput';
import { COLORS } from '../global';

const Installation = ({ sendFunc }) => {

    const wallboxData = [
        { label: "5x4mm", value: "5x4mm" },
        { label: "5x6mm", value: "5x6mm" }
    ]

    const [wallbox, setWallbox] = useState("")
    const [wallboxSelected, setWallboxSelected] = useState(null)

    const constructMsg = () => {
        msg = ""
        msg += "Wallbox: " + wallbox ? wallbox : "Nein" + "\n"
        print(msg)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ flexDirection: "column", width: "100%" }}>
                <CheckInput name={"Wallbox"} onChange={setWallbox} text={"Fabrikat: "}></CheckInput>
                {wallbox !== "" &&
                    <View>
                        <WBDropdown onSelect={setWallboxSelected}></WBDropdown>
                    </View>}
            </View>
            <View style={styles.divider}></View>
            <TouchableOpacity style={styles.button} onPress={() => {
                msg = constructMsg();
                sendFunc(msg)
            }
            }><Text style={styles.text}>Nachricht abschicken</Text></TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 10,
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        margin: 10,
    },
    divider: {
        width: "100%",
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    button: {
        padding: 7,
        backgroundColor: COLORS.action,
        borderRadius: 3,
    },
    text: {
        color: COLORS.background,
        fontSize: 15,
    }
})

export default Installation