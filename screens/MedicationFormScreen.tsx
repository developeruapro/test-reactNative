import React from "react";
import {ImageBackground, StyleSheet, Text, View, ScrollView} from "react-native";

import MedicationContainer from "../containers/MedicationContainer";
import LeftArrow from "../components/LeftArrow"

export const navigationOptions = () => ({
    title: "MEDICATION FORM",
    headerLeft: () => (
        <View style={{paddingLeft: 15}}>
        </View>
    ),
    headerStyle: {
        paddingLeft: 15,
        paddingRight: 15
    },
    headerTitleStyle: {
        fontWeight: 500,
        fontSize: 13
    }
})

const MedicationFormScreen: React.FC = () => {
    return (
        <ScrollView
            style={styles.medicationFormScreen}
        >
            <View
                style={styles.greenHead}
            >
                <LeftArrow/>
                <Text
                    style={styles.headText}
                >
                    {'Do you take any Medications?'}
                </Text>
                <ImageBackground
                    source={require('../assets/images/line-pattern.png')}
                    style={styles.linePattern}
                />
            </View>
            <MedicationContainer
                onMedicationFormSubmit={(formData: any) => {
                    // some request
                }}
            />
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    medicationFormScreen: {
        height: '100%',
        zIndex: 10,
        backgroundColor: 'rgb(29, 157, 158)',
    },
    greenHead: {
        height: 250,
    },
    headText: {
        lineHeight: 24,
        color: 'white',
        textAlign: 'center',
        top: '50%',
        fontSize: 22,
        fontWeight: "500",
    },
    linePattern: {
        width: '100%',
        height: '100%',
        bottom: 120,
        left: 190,
    },
});

export default MedicationFormScreen;