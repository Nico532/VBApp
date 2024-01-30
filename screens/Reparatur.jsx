import React from 'react'
import { View, StyleSheet, StatusBar, Text, TextInput } from 'react-native'
import { COLORS } from '../global'
import { useState } from 'react'
import CheckInput from '../components/CheckInput'
import SendButton from '../components/SendButton'

const Reparatur = ({ sendFunc }) => {

    const [name, setName] = useState("")

    const wallboxData = [
        { label: "5x4mm", value: "5x4mm" },
        { label: "5x6mm", value: "5x6mm" }
    ]
    const [wallbox, setWallbox] = useState("")
    const [wallboxSelected, setWallboxSelected] = useState(null)

    const [wechselrichter, setWechselrichter] = useState("")

    const [andereTaetigkeit, setAndereTaetigkeit] = useState("")

    const constructMsg = () => {
        msg = "Reparatur\n\n"
        msg += "Name: " + name + "\n"
        msg += "\n"

        msg += "Wallbox: "
        msg += wallbox.length !== 0 ? wallbox + "\n" : "Nein" + "\n"
        msg += "Länge Leitungsweg: "
        if (wallbox.length !== 0 && wallboxSelected) msg += wallboxSelected + "\n"
        else msg += "nicht angegeben\n"
        msg += "\n"

        msg += "Wechselrichter: "
        msg += wechselrichter.length !== 0 ? wechselrichter : ""
        msg += "\n\n"

        msg += "Andere Tätigkeit: "
        msg += andereTaetigkeit.length !== 0 ? andereTaetigkeit : "Nein"
        msg += "\n\n"
        return msg
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.rowContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.headline}>Name: </Text>
                    <TextInput style={styles.input} onChangeText={setName} value={name}></TextInput>
                </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <View style={{ width: "100%", rowGap: 5 }}>
                    <CheckInput name={"Wallbox"} onChange={setWallbox} text={"Fabrikat: "}></CheckInput>
                    {wallbox !== "" &&
                        <View>
                            <WBDropdown data={wallboxData} pHolder={"Länge Leitungsweg"} onSelect={setWallboxSelected}></WBDropdown>
                        </View>}
                </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.headline}>Wechselrichter: </Text>
                    <TextInput style={styles.input} onChangeText={setWechselrichter} value={wechselrichter} placeholder={"Fabrikat"}></TextInput>
                </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name={"Andere Tätigkeit"} onChange={setAndereTaetigkeit} multiline={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <SendButton onPress={() => {
                let msg = constructMsg();
                console.log(msg)
                sendFunc(msg)
            }}></SendButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
        flex: 1,
        alignItems: 'center',
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
    rowContainer: {
        flexDirection: "column", width: "100%"
    },
    text: {
        color: COLORS.text,
        fontSize: 15,
    },
    headline: {
        fontWeight: "bold",
        fontSize: 17,
    },
    input: {
        backgroundColor: COLORS.inputBackground,
        flex: 1,
        paddingLeft: 7,
        height: 33,
        fontSize: 15,
        borderRadius: 5,
        color: COLORS.text,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
})

export default Reparatur