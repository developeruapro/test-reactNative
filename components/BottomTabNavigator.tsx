import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MedicationFormScreen from "../screens/MedicationFormScreen";
import TestButtonScreen from "../screens/TestButtonScreen";

import { BottomTabs } from "./BottomTabs";

const MedicationStack = createStackNavigator();
const TestButtonStack = createStackNavigator();

const Medications = () => (
  <MedicationStack.Navigator>
    <MedicationStack.Screen
      component={MedicationFormScreen}
      name="Medications"
    />
  </MedicationStack.Navigator>
);

const TestButton = () => (
    <TestButtonStack.Navigator>
        <TestButtonStack.Screen
            component={TestButtonScreen}
            name="TestButton"
        />
    </TestButtonStack.Navigator>
);

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabs {...props} />}>
    <BottomTab.Screen component={Medications} name="Medications" />
    <BottomTab.Screen component={TestButton} name="TestButton" />
  </BottomTab.Navigator>
);

