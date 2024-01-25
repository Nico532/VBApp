// CheckInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import CheckBox from 'expo-checkbox';
import { COLORS } from '../global';

const CheckInput = ({ name, onCheck = () => void 0, onChange = () => void 0, text, noFunc = false }) => {
    const [checked, setChecked] = useState(false)
    const [nameFilled, setNameFilled] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        checked === false && onChange(""); setValue("")
    }, [checked])

    return (
        <View style={{ flexDirection: "row", }}>
            <View style={{ flexDirection: "column", flex: 1, rowGap: 7, }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: 'space-between', marginRight: 15 }}>
                    <Text style={styles.headline}>{name}: </Text>
                    <CheckBox color={"#525CEB"} style={{ height: 20, width: 20 }} onValueChange={() => {
                        setChecked(!checked)
                        onCheck(!checked)
                    }} value={checked} />
                </View>
                {(checked && !noFunc) && (
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text style={styles.text}>{text}</Text>
                        <TextInput
                            style={styles.input}
                            placeholder={name}
                            value={value}
                            onChangeText={(value) => {
                                setValue(value);
                                onChange(value);
                                setNameFilled(true);
                            }}
                        />
                    </View>
                )}
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: COLORS.inputBackground,
        flex: 1,
        paddingLeft: 7,
        fontSize: 15,
        borderRadius: 5,
        color: COLORS.text
    },
    text: {
        fontSize: 15,
        color: COLORS.text,
    },
    headline: {
        fontWeight: "bold",
        fontSize: 17,
    }
});

export default CheckInput;