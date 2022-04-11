import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorSquare from './ColorSquare';


const ColorsContainer = ({ colorsArray, correctColor, setColorsArray, setTitleBarColor, setResultBarButtonText, setResultBarMessage }) => {

    const pressHandler = (color, id) => {         // if the color of the clicked button is equal
        if (color === correctColor) {             // with the correctColor, then: 
            changeColor()
            setTitleBarColor(correctColor)
            setResultBarButtonText("PLAY AGAIN")
            setResultBarMessage("CORRECT!")
        } else {
            changeVisibility(id)
            setResultBarMessage("WRONG, TRY AGAIN!")
        }
    }

    const changeColor = () => {
        const tempColorsArray = [...colorsArray]
        tempColorsArray.map(object => {
            if (object.opacity === 1)
                object.color = correctColor
        })
        setColorsArray(tempColorsArray)
    }

    const changeVisibility = (id) => {
        const tempColorsArray = [...colorsArray]
        tempColorsArray[id].opacity = 0
        tempColorsArray[id].isDisabled = true
        setColorsArray(tempColorsArray)
    }

    return (
        <View style={styles.innerContainer}>
            {Object.keys(colorsArray).map((key) => {
                return (
                    <ColorSquare key={colorsArray[key].id}
                        correctColor={correctColor}
                        onPress={() => pressHandler(colorsArray[key].color, colorsArray[key].id)}
                        backgroundColor={colorsArray[key].color}
                        opacity={colorsArray[key].opacity}
                        isDisabled={colorsArray[key].isDisabled}
                    />
                )
            })}
        </View>

    );

};

const styles = StyleSheet.create({
    innerContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
})

export default ColorsContainer;