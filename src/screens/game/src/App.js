import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {GameEngine} from 'react-native-game-engine';
import {useNavigation} from '@react-navigation/native';

import entities from './entities';
import Physics from './physics';
import {windowHeight, windowWidth} from './utils/random';

export default function Appy() {
  const backgroundGame = require('./assets/images/background.png');
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null);
  const [currentPoints, setCurrentPoints] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    setRunning(false);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.backgroundImage}
        source={backgroundGame}
        resizeMode="stretch"
      />

      <View style={styles.header}>
        <Text style={styles.currentPoints}>Pontos : {currentPoints}</Text>
      </View>

      <GameEngine
        style={styles.gameEngine}
        entities={entities()}
        systems={[Physics]}
        running={running}
        onEvent={e => {
          switch (e.type) {
            case 'game_over':
              setRunning(false);
              gameEngine.stop();
              setCurrentPoints(0);
              break;

            case 'new_point':
              setCurrentPoints(currentPoints + 1);
              break;
          }
        }}
        ref={ref => {
          setGameEngine(ref);
        }}
      />

      {!running ? (
        <View style={styles.runView}>
          <TouchableOpacity
            style={styles.runTouch}
            onPress={() => {
              setRunning(true);
              gameEngine.swap(entities());
              setCurrentPoints(0);
            }}>
            <Text style={styles.startStyle}>START GAME</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.leave}>leave</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: windowWidth,
    height: windowHeight,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  currentPoints: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  },
  gameEngine: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  runView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  runTouch: {
    backgroundColor: 'black',
    borderRadius: 15,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
  },
  startStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
  },
  leave: {
    fontWeight: 'bold',
    color: 'red',
    fontSize: 20,
  },
});
