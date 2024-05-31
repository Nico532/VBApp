import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView } from 'react-native'
import { useState } from 'react'
import WBDropdown from '../components/WBDropdown';
import CheckInput from '../components/CheckInput';
import SendButton from '../components/SendButton';
import { COLORS } from '../global';
import Checkbox from 'expo-checkbox';

const Installation = ({ sendFunc }) => {

    const [name, setName] = useState("")

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
        { label: "Länge String 1", value: "Länge String 1" },
        { label: "Länge String 2", value: "Länge String 2" },
        { label: "Länge String 3", value: "Länge String 3" }
    ]
    const [laengeErde, setLaengeErde] = useState("")

    const [stringanzahl, setStringanzahl] = useState(null)

    const [devolo, setDevolo] = useState(false)

    const [ueberspannungsschutz, setUeberspannungsschutz] = useState(false)
    const [dc, setDc] = useState(false)
    const [ac, setAc] = useState(false)

    const [notstrom, setNotstrom] = useState("")
    const [notstromMaterial, setNotstromMaterial] = useState("")

    const [tigooptimierer, setTigooptimierer] = useState("")

    const [adapterplatte, setAdapterplatte] = useState(false)

    const [andereAnmerkung, setAndereAnmerkung] = useState("")

    const constructMsg = () => {
        msg = "Installation\n\n"
        msg += "Name: " + name + "\n"
        msg += "\n"

        msg += "Wallbox: "
        msg += wallbox.length !== 0 ? wallbox + "\n" : "Nein" + "\n"
        msg += "Länge Leitungsweg: "
        if (wallbox.length !== 0 && wallboxSelected) msg += wallboxSelected + "\n"
        else msg += "nicht angegeben\n"
        msg += "\n"

        msg += "Zählerschrank: "
        msg += zaehlerschrank ? "Ja\n" : "Nein\n"
        msg += "\n"

        msg += "Kleinverteiler: "
        if (kleinverteiler && kleinverteilerSelected) msg += kleinverteilerSelected + "\n"
        else if (kleinverteiler && !kleinverteilerSelected) msg += "Ja, aber Anzahl Reihen nicht ausgewählt\n"
        else msg += "Nein\n"
        msg += "\n"

        msg += "Hauptzuleitung: "
        msg += hauptzuleitung.length !== 0 ? hauptzuleitung + "m\n" : "Nein\n"
        msg += "\n"

        msg += "Stringanzahl: "
        msg += stringanzahl ? stringanzahl + "\n" : "Nicht angegeben\n"
        msg += "\n"

        msg += "Devolo: "
        msg += devolo ? "Ja\n" : "Nein\n"
        msg += "\n"

        msg += "Überspannungsschutz: "
        if (ueberspannungsschutz) {
            msg += dc ? "DC" : ""
            msg += (ac && dc) ? ", AC" : ""
            msg += (ac && !dc) ? "AC" : ""
        } else {
            msg += "Nein"
        }
        msg += "\n"

        msg += "Notstrom: "
        if (notstrom.length !== 0 && notstromMaterial.length !== 0) msg += notstrom + "\nMaterial benötigt: " + notstromMaterial + "\n"
        else if (notstrom.length !== 0 && notstromMaterial.length === 0) msg += notstrom + "\nMaterial benötigt: Nicht angegeben\n"
        else msg += "Nein\n"
        msg += "\n"

        msg += "Tigo Optimierer: "
        msg += tigooptimierer.length !== 0 ? tigooptimierer + " Stück\n" : "Nein\n"
        msg += "\n"

        msg += "Adapterplatte (bei WWN) bei Kunden gelassen?: "
        msg += adapterplatte ? "Ja\n" : "Nein\n"

        msg += andereAnmerkung.length !== 0 ? "\nAnmerkung: " + andereAnmerkung : ""
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
                <CheckInput name="Hauptzuleitung" onChange={setHauptzuleitung} pHolder={"Länge (in m)"} numericInput={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={{ flexDirection: "column", rowGap: 5, width: "100%" }}>
                <Text style={styles.headline}>Stringanzahl: </Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.text}>Länge Erde: </Text>
                    <TextInput style={styles.input} value={laengeErde} onChangeText={setLaengeErde}></TextInput>
                </View>
                <WBDropdown data={stringanzahlData} pHolder={"Länge"} onSelect={setStringanzahl}></WBDropdown>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Devolo" onCheck={setDevolo} noFunc={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Überspannungsschutz" onCheck={setUeberspannungsschutz} noFunc={true} ></CheckInput>
                {ueberspannungsschutz === true &&
                    <View>
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                            <Text style={styles.text}>DC: </Text>
                            <Checkbox color={"#525CEB"} style={{ height: 16, width: 16 }} onValueChange={() => setDc(!dc)} value={dc}></Checkbox>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
                            <Text style={styles.text}>AC: </Text>
                            <Checkbox color={"#525CEB"} style={{ height: 16, width: 16 }} onValueChange={() => setAc(!ac)} value={ac}></Checkbox>
                        </View>
                    </View>
                }
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Notstrom" onChange={setNotstrom} pHolder={"Zeit in Std"} numericInput={true} text={"Zeit: "} ></CheckInput>
                {notstrom !== "" &&
                    <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
                        <Text style={{ fontSize: 15, flex: 1 }}>Material benötigt: </Text>
                        <TextInput style={styles.input} value={notstromMaterial} onChangeText={setNotstromMaterial}>
                        </TextInput>
                    </View>
                }
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Tigo Optimierer" onChange={setTigooptimierer} text={"Stückzahl: "} ></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Adapterplatte bei WWN (beim Kunden gelassen?)"
                    onCheck={setAdapterplatte} noFunc={true} ></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.rowContainer}>
                <CheckInput name="Andere Anmerkung"
                    onChange={setAndereAnmerkung} multiline={true}></CheckInput>
            </View>
            <View style={styles.divider}></View>
            <SendButton onPress={() => {
                let msg = constructMsg();
                console.log(msg)
                sendFunc(msg)
            }}></SendButton>
        </View >
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

export default Installation