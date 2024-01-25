import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { COLORS } from '../global';

const data = [
    { label: '5x4mm', value: '5x4mm' },
    { label: '5x6mm', value: '5x6mm' },
];

const WBDropdown = ({ onSelect }) => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>
                {item.value === value && (
                    <AntDesign
                        style={styles.icon}
                        color="black"
                        name="Safety"
                        size={20}
                    />
                )}
            </View>
        );
    };

    return (
        <View style={{ flexDirection: "row" }}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                maxHeight={120}
                labelField="label"
                valueField="value"
                placeholder="Länge Leitungsweg"
                value={value}
                onChange={item => {
                    setValue(item.value);
                    onSelect(item.value);
                }}
                renderItem={renderItem}
            />
        </View>
    );
};

export default WBDropdown;

const styles = StyleSheet.create({
    dropdown: {
        marginTop: 7,
        flex: 1,
        height: 30,
        backgroundColor: COLORS.inputBackground,
        borderRadius: 5,
        padding: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 15,
    },
    placeholderStyle: {
        fontSize: 15,
    },
    selectedTextStyle: {
        fontSize: 15,
        color: COLORS.text
    },
});