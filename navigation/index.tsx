import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import Layout from '../Layout';
import LinkingConfiguration from './LinkingConfiguration';
import { BottomTabNavigator } from "../components/BottomTabNavigator";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer
          linking={LinkingConfiguration}
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Layout>
              <BottomTabNavigator/>
          </Layout>
      </NavigationContainer>
  );
}