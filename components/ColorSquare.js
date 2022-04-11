import React from "react";

import { View, Text, Pressable, Button, StyleSheet } from 'react-native';

const ColorSquare = ({ onPress, backgroundColor, opacity, isDisabled }) => {

    return (

        <Pressable
            disabled={isDisabled}
            style={{ backgroundColor, width: 150, height: 150, opacity, marginHorizontal: 5, marginVertical: 5, borderRadius: 20 }}
            onPress={onPress}>
            <Text></Text>
        </Pressable>
    )
}

export default ColorSquare;