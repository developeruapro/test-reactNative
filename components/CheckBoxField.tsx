import * as React from 'react';

import {StyleSheet, Text, View} from "react-native";
import {CheckBox} from 'react-native-elements'

export type CheckBoxFieldProps = {
    onChange: (value: boolean) => void;
    label: string;
    value: boolean;
};

const CheckBoxField = (props: CheckBoxFieldProps) => {
    return (
        <View style={styles.checkboxContainer}>
            <CheckBox
                checked={props.value}
                //@ts-ignore
                onPress={props.onChange}
                containerStyle={styles.checkbox}
            />
            <Text style={styles.label}>{props.label}</Text>
        </View>
    );
}

export default CheckBoxField;

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        backgroundColor: 'white',
        padding: 11,
        width: 325,
        borderRadius: 10,
        position: 'relative',
        bottom: 30,
    },
    checkbox: {
        alignSelf: "center",
        padding: '0 !important',
        marginRight: '-1%',
    },
    label: {
        margin: 8,
        fontSize: 15,
        fontWeight: "500",
    },
});
