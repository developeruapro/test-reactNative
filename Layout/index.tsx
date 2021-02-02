import React from "react";
import {StyleSheet, SafeAreaView} from "react-native";
export type LayoutProps = {
    children: JSX.Element;
};

const Layout = ({children}: LayoutProps) => (
    <SafeAreaView
        style={styles.layoutContainer}
    >
        {children}
    </SafeAreaView>
);

export default Layout;

const styles = StyleSheet.create({
    layoutContainer: {
        backgroundColor: 'rgb(29,157,158)',
        height: '100%',
        width: '100%',
    },
});