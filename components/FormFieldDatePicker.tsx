import React from "react";
import {View, Text} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

export type FormFieldProps = {
    onChangeDate: (value: Date | undefined) => void;
    label: string;
    value: Date;
    disabled?: boolean;
};

const FormFieldDatePicker = ({label, value, onChangeDate}: FormFieldProps) => (
    <View
        style={{
            marginBottom: 15,
        }}
    >
        <Text style={{marginBottom: 12, fontSize: 14, color: "#C5C5C5"}}>
            {label}
        </Text>
        <DateTimePicker
            testID="dateTimePicker"
            value={value}
            mode={'date'}
            is24Hour={true}
            display="default"
            onChange={(ev, date) => {
                onChangeDate(date)
            }}
        />
    </View>
);

export default FormFieldDatePicker;
