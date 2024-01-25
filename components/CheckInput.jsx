// CheckInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import CheckBox from 'expo-checkbox';
import { COLORS } from '../global';

const CheckInput = ({ name, onChange, text }) => {
    const [checked, setChecked] = useState(false)
    const [nameFilled, setNameFilled] = useState(false)
    const [value, setValue] = useState("")

    useEffect(() => {
        checked === false && onChange(""); setValue("")
    }, [checked])

    return (
        <View style={{ flexDirection: "row", }}>
            <View style={{ flexDirection: "column", flex: 1, rowGap: 7, paddingTop: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.text}>{name}: </Text>
                    <CheckBox color={"#525CEB"} style={{ height: 18, width: 18 }} onValueChange={() => {
                        setChecked(!checked)

                    }} value={checked} />
                </View>
                {checked && (
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
        color: COLORS.text
    }
});

export default CheckInput;