import React from "react";
import {View, TextInput, Text, StyleSheet, KeyboardTypeOptions} from "react-native";
import RNPickerSelect from 'react-native-picker-select';

export type item = {
    label: string;
    value: string;
};

export type FormFieldProps = {
    onChangeText: (value: string) => void;
    label: string;
    value: string;
    items: Array<item>;
    keyboardType?: KeyboardTypeOptions;
    disabled?: boolean;
    multiline?: any;
    placeholder?: string;
};

const FormFieldSelect = ({label, value, multiline, onChangeText, placeholder, items, keyboardType, disabled}: FormFieldProps) => (
    <View
        style={{
            marginBottom: 15,
        }}
    >
        <Text style={{marginBottom: 12, fontSize: 14, color: "#C5C5C5"}}>
            {label}
        </Text>
        <View
            style={styles.inputWrapper}
        >
        <TextInput
            value={value}
            style={
                styles.input
            }
            editable={!disabled}
            multiline={multiline}
            keyboardType={keyboardType ? keyboardType : 'numeric'}
            onChangeText={onChangeText}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
        />
        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            disabled={disabled}
            style={
                {
                    inputWeb: styles.input,
                    inputIOS: styles.input,
                    inputAndroid: styles.input,
                }
            }
            items={items}
        />
        </View>
    </View>
);

export default FormFieldSelect;


const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        fontWeight: "500",
        color: "rgb(34, 34, 34)",
        padding: 12,
        backgroundColor: 'rgb(245, 245, 247)',
        borderRadius: 10,
        borderColor: 'rgb(245, 245, 247)',
        width: 140,
        height: 45,
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});