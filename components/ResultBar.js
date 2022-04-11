import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


const ResultBar = ({ playAgain, changeDifficulty, resultBarButtonText, resultBarMessage, difficulty }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{resultBarMessage}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFFF'
    },
    message: {
        fontSize: 16,
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: "rgb(28, 173, 173)"
    }
})

export default ResultBar;