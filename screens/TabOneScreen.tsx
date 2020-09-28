import * as React from 'react';
import { useEffect, useState } from 'react';
import {CheckBox, Image, ImageProps, StyleSheet } from 'react-native';
import Slider from 'react-slick';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const JKchange1 = 'https://www.azquotes.com/picture-quotes/quote-change-in-society-is-of-secondary-importance-that-will-come-about-naturally-inevitably-jiddu-krishnamurti-87-53-27.jpg';
const JKchange2 = 'https://www.azquotes.com/picture-quotes/quote-to-bring-about-a-fundamental-radical-revolution-we-must-begin-with-ourselves-jiddu-krishnamurti-76-41-73.jpg';

let radicalActions:any = {
  'BreakFast Preparation' : false,
  'HandPushUps 3' : false,
  'SitUps 100' : false,
  'PushUps 50' : false,
  'DeepWorkAlways' : false,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: "absolute",
    bottom:0
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    margin: 8,
  },
  image: {
    width: '90%',
    height: '30%',
    position: 'absolute',
    top: 0
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

let newState = { ...radicalActions };

export default function TabOneScreen() {
  const [state, setstate] = useState(radicalActions)
  let checkBoxItems = Object.keys(radicalActions).map((item, index) => {
    return (
      <View key={index} style={styles.checkboxContainer}>
        <CheckBox value={state[item]}
          onTouchMove={() => {
            newState[item] = !state[item];
            console.log(item, state[item], newState[item]);
            setstate({ ...newState });
          }}
          />
        <Text style={styles.label}>{item}</Text>
      </View>
    )
  })
  // useEffect(() => {
  //   checkBoxItems = Object.keys(radicalActions).map((item, index) => {
  //     return (
  //       <View key={index} style={styles.checkboxContainer}>
  //         <CheckBox value={state.value} onChange={(v) => setstate({ item: v })}
  //           onValueChange={(v) => setstate({ item: v })}></CheckBox>
  //         <Text style={styles.label}>{item}</Text>
  //       </View>
  //     )
  //   })
  // }, [])

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: JKchange2 }} ></Image>
      <View style={styles.list}>
        {checkBoxItems}
      </View>
    </View>
  );
}

