import React from 'react';
import styled from 'styled-components/native'

import { useEffect, useState } from 'react';

import {
  SafeAreaView,
  Pressable,
  StyleSheet,
  View,
  Text
} from 'react-native';

import ColorsContainer from './components/ColorsContainer';
import ResultBar from './components/ResultBar';
import TitleBar from './components/TitleBar';


const App = () => {
  const [resultBarMessage, setResultBarMessage] = useState("Select the correct color.");
  const [resultBarButtonText, setResultBarButtonText] = useState("NEW COLORS");
  const [titleBarColor, setTitleBarColor] = useState("rgb(28, 173, 173)");
  const [playAgainFlagData, setplayAgainFlagData] = useState(false);
  const [correctColor, setCorrectColor] = useState("");
  const [colorsArray, setColorsArray] = useState([]);
  const [difficulty, setDifficulty] = useState("EASY");
  const [numberOfSquares, setNumberOfSquares] = useState(6);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (playAgainFlagData) {
      initializeGame();
      setplayAgainFlagData(false);
    }
  }, [playAgainFlagData]);

  const initializeGame = () => {
    let squareData = [];
    let id = 0;
    for (let i = 1; i <= numberOfSquares; i++) {
      squareData.push(randomColorGenerator(i - 1));
    }
    let randomSquare = Math.floor(Math.random() * squareData.length)
    setCorrectColor(squareData[randomSquare].color);
    setColorsArray(squareData);
    setTitleBarColor("rgb(28, 173, 173)")
    setResultBarButtonText("NEW COLORS")
    setResultBarMessage("Select the correct color.")
  }

  const randomColorGenerator = (id) => {
    let red = Math.floor(Math.random() * 256);    // Setting a random value (0-255) for the red.
    let green = Math.floor(Math.random() * 256);  // Setting a random value (0-255) for the green.
    let blue = Math.floor(Math.random() * 256);   // Setting a random value (0-255) for the blue.
    return { color: "rgb(" + red + ", " + green + ", " + blue + ")", opacity: 1, isDisabled: false, id: id }//"rgb(" + red + ", " + green + ", " + blue + ")";            // Returning the whole new rgb(r,g,b) string.
  }

  const changeDifficulty = () => {
    if (difficulty === "EASY") {
      setDifficulty("MEDIUM")
      setNumberOfSquares(9)
    } else if (difficulty === "MEDIUM") {
      setDifficulty("HARD")
      setNumberOfSquares(12)
    } else if (difficulty === "HARD") {
      setDifficulty("EASY")
      setNumberOfSquares(6)
    }
  }


  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TitleBar
          correctColor={correctColor}
          titleBarColor={titleBarColor}
        />
        <ResultBar
          resultBarMessage={resultBarMessage}
          difficulty={difficulty}
          changeDifficulty={changeDifficulty}
        />
        <ColorsContainer
          correctColor={correctColor}
          colorsArray={colorsArray}
          setColorsArray={setColorsArray}
          setResultBarMessage={setResultBarMessage}
          setResultBarButtonText={setResultBarButtonText}
          setTitleBarColor={setTitleBarColor}
        />
        <Pressable
          style={styles.playAgainButton}
          onPress={() => { initializeGame() }}
        >
          <Text style={styles.text}>{resultBarButtonText}</Text>
        </Pressable>

      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 100,
    minWidth: 100,
    alignItems: 'center',
    flex: 1
  },
  playAgainButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'rgb(28, 173, 173)',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default App;
