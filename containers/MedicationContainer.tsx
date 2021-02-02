import React, { useState } from "react";
import {KeyboardAvoidingView, StyleSheet, ScrollView} from "react-native";

import MedicationForm from '../components/MedicationForm';
import CheckBoxField from "../components/CheckBoxField";

interface IFormValues {
    medicationName: string;
    additionInfo: string;
    amount: string;
    number: string;
}

export type MedicationContainerProps = {
    onMedicationFormSubmit: (formData: IFormValues) => void;
    multiline?: any;
    label?: string;
    value?: string;
};

const MedicationContainer: React.FC<MedicationContainerProps> = (props) => {

    const [isNotTakeMedicaments, setIsNotTakeMedicaments] = useState(false);

    return (
    <KeyboardAvoidingView
            style={styles.bodyCard}
        >
            <CheckBoxField
                onChange={()=>{
                    setIsNotTakeMedicaments(!isNotTakeMedicaments);
                }}
                label={'No, I don’t take any medications'}
                value={isNotTakeMedicaments}
            />
            <MedicationForm
                disabled={isNotTakeMedicaments}
                onSubmit={formData => {
                    props.onMedicationFormSubmit(formData);
                }}
            />
        </KeyboardAvoidingView>
    );

}

export default MedicationContainer;

const styles = StyleSheet.create({
    bodyCard: {
        height: 700,
        width: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: 'rgb(231, 231, 235)',
        alignItems: 'center',
        position: 'relative',
    },
});
