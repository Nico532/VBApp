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

    const [zaehlerschrank, setZaehlerschrank] = useState(false)

    const kleinverteilerData = [
        { label: "2 reihig", value: "2 reihig" },
        { label: "3 reihig", value: "3 reihig" },
        { label: "4 reihig", value: "4 reihig" },
    ]
    const [kleinverteiler, setKleinverteiler] = useState(false)
    const [kleinverteilerSelected, setKleinverteilerSelected] = useState(null)

    const [hauptzuleitung, setHauptzuleitung] = useState("")

    const stringanzahlData = [
        { label: "Länge Erde", value: "Länge Erde" },
        { label: "Länge 1", value: "Länge 1" },
        { label: "Länge 2", value: "Länge 2" },
        { label: "Länge 3", value: "Länge 3" }
    ]

    const [stringanzahl, setStringanzahl] = useState(null)

    const [devolo, setDevolo] = useState(false)

    const [ueberspannungsschutz, setUeberspannungsschutz] = useState("")

    const constructMsg = () => {
        msg = ""
        msg += "Wallbox: "
        msg += wallbox.length !== 0 ? wallbox + "\n" : "Nein" + "\n"
        msg += "Länge Leitungsweg: "
        if (wallbox.length !== 0 && wallboxSelected) msg += wallboxSelected + "\n"
        else msg += "nicht angegeben\n"
        msg += "Zählerschrank: "
        msg += zaehlerschrank ? "Ja\n" : "Nein\n"
        msg += "Kleinverteiler: "
        if (kleinverteiler && kleinverteilerSelected) msg += kleinverteilerSelected + "\n"
        else if (kleinverteiler && !kleinverteilerSelected) msg += "Ja, aber Anzahl Reihen nicht ausgewählt"
        else msg += "Nein\n"
        console.log(msg)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
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
                <CheckInput name="Zählerschrank" onCheck={setZaehlerschrank} noFunc={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Kleinverteiler" onCheck={setKleinverteiler} noFunc={true}></CheckInput>
                {kleinverteiler === true &&
                    <View style={{ marginTop: 5 }}>
                        <WBDropdown data={kleinverteilerData} pHolder={"Anzahl Reihen"} onSelect={setKleinverteilerSelected}></WBDropdown>
                    </View>}
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Hauptzuleitung" onCheck={setHauptzuleitung} pHolder={"Länge (in m)"} numericInput={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: "column", rowGap: 4, width: "100%" }}>
                <Text style={styles.headline}>Stringanzahl: </Text>
                <WBDropdown data={stringanzahlData} pHolder={"Länge"} onSelect={setStringanzahl}></WBDropdown>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Devolo" onCheck={setDevolo} noFunc={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Überspannungsschutz" onCheck={setUeberspannungsschutz} pHolder={"DC / AC"} ></CheckInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                msg = constructMsg();
                //sendFunc(msg)
            }
            }><Text style={styles.text}>Nachricht abschicken</Text></TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        rowGap: 8,
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
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
        color: COLORS.background,
        fontSize: 15,
    },
    headline: {
        fontWeight: "bold",
        fontSize: 17,
    }
})

export default Installation