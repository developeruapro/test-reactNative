import {View} from './Themed';
import React from "react";
import {KeyboardAvoidingView, StyleSheet, Button,} from "react-native";
import FormFieldInput from "./FormFieldInput";
import FormFieldSelect from "./FormFieldSelect";
import FormFieldDatePicker from "./FormFieldDatePicker";
import {Formik} from 'formik';

interface IFormValues {
    medicationName: string;
    additionInfo: string;
    amount: string;
    number: string;
    date: Date;
}

const initialValues: IFormValues = {
    medicationName: '',
    additionInfo: '',
    amount: '',
    number: '',
    date: new Date(),
};

export type MedicationFormScreenProps = {
    onSubmit: (formData: IFormValues) => void;
    disabled?: boolean;
    multiline?: any;
    label?: string;
    value?: string;
};

const MedicationForm: React.FC<MedicationFormScreenProps> = ({disabled, onSubmit}) => {

    return (
        <KeyboardAvoidingView style={styles.FormContainer}>
            <Formik
                initialValues={initialValues}
                onSubmit={values => onSubmit(values)}
            >
                {({handleChange, handleSubmit, values}) => (
                    <View style={{backgroundColor: 'rgb(231, 231, 235)'}}>
                        <View style={styles.form}>
                            <FormFieldInput
                                value={values.medicationName}
                                disabled={disabled}
                                label={"Medication Name"}
                                onChangeText={handleChange('medicationName')}
                            />
                            <FormFieldSelect
                                value={values.amount}
                                label={"Amount"}
                                disabled={disabled}
                                items={[
                                    {label: 'Mg', value: 'mg'},
                                    {label: 'G', value: 'g'},
                                ]}
                                onChangeText={handleChange('amount')}
                            />
                            <FormFieldSelect
                                value={values.number}
                                label={"Number"}
                                disabled={disabled}
                                items={[
                                    {label: 'Daily', value: 'daily'},
                                    {label: 'Monthly', value: 'monthly'},
                                    {label: 'Yearly', value: 'yearly'},
                                ]}
                                onChangeText={handleChange('number')}
                            />
                            <FormFieldDatePicker
                                value={values.date}
                                label={"Date"}
                                disabled={disabled}
                                onChangeDate={() => handleChange('date')}
                            />

                            <FormFieldInput
                                value={values.additionInfo}
                                disabled={disabled}
                                label={"Additional Information"}
                                onChangeText={handleChange('additionInfo')}
                                multiline
                            />
                        </View>
                        <View
                            style={styles.submitButton}
                        >
                            <Button
                                title={disabled ? 'Next' : 'Add Medication'}
                                onPress={() => {
                                    if (!disabled) {
                                        handleSubmit()
                                    }
                                }}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );

}

export default MedicationForm;

const styles = StyleSheet.create({
    FormContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        bottom: 30,
        width: 325,
    },
    form: {
        padding: 15,
        width: 325,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    submitButton: {
        padding: 6,
        width: 325,
        backgroundColor: 'white',
        borderRadius: 10,
        height: 56,
        top: 20,
    },
});