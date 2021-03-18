import * as React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, Button, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { KrishnaAltarURIs } from './KrishnaAltarURIs';

const styles = StyleSheet.create({
  white:{
    color: "white"
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: "absolute",
    bottom: 0
  },
  buttonContainer: {
    marginBottom: 35,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    margin: 8,
  },
  image: {
    marginTop:0,
    width: 408,
    height: 408
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

let initailState = {
  krishnaAltars: KrishnaAltarURIs,
  focusedAltar: 0
}

export default function KrishnaColors() {
  const [currentState, setstate] = useState(initailState);
  let newState = { ...currentState };

  return (
    <View style={styles.container}>
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

