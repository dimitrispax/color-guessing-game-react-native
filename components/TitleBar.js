import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const TitleBar = ({ titleBarColor, correctColor }) => {

    return (
        <View style={{ flex: 1, minHeight: 100, minWidth: 100, alignSelf: 'stretch', alignItems: 'center', justifyContent: 'center', backgroundColor: titleBarColor }}>
            <Text style={styles.p} > Guess what color represents this RGB Value: </Text>
            <Text style={styles.p2} > {correctColor} </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    p: {
        fontSize: 14,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'white'
    },
    p2: {
        fontSize: 16,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: 'white'
    }
})

export default TitleBar;