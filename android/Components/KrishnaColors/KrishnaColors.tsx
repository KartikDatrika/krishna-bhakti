import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, Button, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { KrishnaAltarURIs } from './KrishnaAltarURIs';

export default function KrishnaColors() {
  let initailState = {
    krishnaAltars: KrishnaAltarURIs,
    focusedAltar: 0
  }
  const [currentState, setstate] = useState(initailState);
  let newState = { ...currentState };

  return (
    <View style={{ ...styles.container, backgroundColor: currentState.krishnaAltars[currentState.focusedAltar].color}}>
      <Text style={styles.white}> {"Hare Krishna Hare Krishna Krishna Krishna Hare Hare !"} </Text>
      <Text style={styles.white}> {"Hare Rama Hare Rama Rama Rama Hare Hare !"} </Text>
      <Text style={styles.white}> {"All Glories to Prabhupada !!"} </Text>
      <Image style={styles.image} source={{ uri: currentState.krishnaAltars[currentState.focusedAltar].source }} ></Image>
      <View style={styles.list}>
        <FlatList horizontal={true} data={currentState.krishnaAltars}
          renderItem={(altar) =>
            <View key={altar.item.color + " view"} style={styles.buttonContainer}>
              <Button key={altar.item.color + " button"} title={'Om'}
                color={altar.item.color}
                onPress={() => {
                  newState.focusedAltar = altar.index;
                  setstate({ ...newState });
                }}
              />
            </View>
          } />
      </View>
      <Text style={styles.white}> {"Om Namo Bhagavate Vaasudevaya !"} </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    justifyContent: 'center',
    color: "white"
  },
  list: {
    bottom: 0,
    position: 'absolute',
    flexDirection: "row",
    justifyContent: 'center',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    margin: 8,
  },
  image: {
    width: '100%',
    height: '80%'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

