import * as React from 'react';

import {Image, StyleSheet} from "react-native";

const LeftArrow = () => {
    return <Image
        style={styles.arrowImg}
        source={require('../assets/images/arrow.png')}
    />;
}

export default LeftArrow;

const styles = StyleSheet.create({
    arrowImg: {
        width: 13,
        height: 21,
        position: 'absolute',
        top: 25,
        left: 20,
    },
});