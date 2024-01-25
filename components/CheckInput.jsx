// CheckInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
import CheckBox from 'expo-checkbox';
import { COLORS } from '../global';

const CheckInput = ({ name, onCheck = () => void 0, onChange = () => void 0, text, noFunc = false, pHolder = name, numericInput = false }) => {
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
                            keyboardType={numericInput ? "numeric" : "default"}
                            style={styles.input}
                            placeholder={pHolder}
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