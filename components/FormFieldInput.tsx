import React from "react";
import {View, TextInput, Text} from "react-native";

export type FormFieldProps = {
    onChangeText: (value: string) => void;
    label: string;
    value: string;
    disabled?: boolean;
    multiline?: any;
    placeholder?: string;
};

const FormFieldInput = ({label, value, multiline, onChangeText, placeholder, disabled}: FormFieldProps) => (
    <View
        style={{
            marginBottom: 15,
        }}
    >
        <Text style={{marginBottom: 12, fontSize: 14, color: "#C5C5C5"}}>
            {label}
        </Text>
        <TextInput
            value={value}
            editable={!disabled}
            style={{
                fontSize: 16,
                fontWeight: '500',
                color: "rgb(34, 34, 34)",
                padding: 12,
                backgroundColor: 'rgb(245, 245, 247)',
                borderRadius: 10,
                height: multiline ? 90 : 45,
                width: 295,
            }}
            multiline={multiline}
            onChangeText={onChangeText}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
        />
    </View>
);

export default FormFieldInput;
