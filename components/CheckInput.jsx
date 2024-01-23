// CheckInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import CheckBox from 'expo-checkbox';

const CheckInput = ({ name, onChange, text }) => {
    const [checked, setChecked] = useState(false)
    const [nameFilled, setNameFilled] = useState(false)
    const [value, setValue] = useState("")

    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", height: 40, flex: 1, alignItems: "center", columnGap: 5, borderBottomWidth: 1, paddingBottom: 10, paddingTop: 5 }}>
                <Text style={styles.text}>{name}: </Text>
                <CheckBox color={"#1c8eff"} style={{ height: 19, width: 19 }} onValueChange={setChecked} value={checked} />
                {checked && (
                    <View style={{ flexDirection: "row", flex: 1 }}>
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
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: "lightgrey",
        flex: 1,
        paddingLeft: 7,
    },
    text: {
        fontSize: 17,
    }
});

export default CheckInput;