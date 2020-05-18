import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const emoji = require("emoji-dictionary");



const BoxScreen = () => {
  return (
    <View
      style={styles.viewStyle}
    >
      <Text style={styles.text1}>Child #1{emoji.getUnicode("baby")}</Text>
      <Text style={styles.text2}>Child #2{emoji.getUnicode("baby")}</Text>
      <Text style={styles.text3}>Child #3{emoji.getUnicode("baby")}</Text>

    </View>)
}


const styles = StyleSheet.create({
  text1: {
    width: 130,
    left: 100,
    top: 140,
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    fontSize: 20,
    color: 'orange',
    borderWidth: 10,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  text2: {
    alignSelf: 'flex-end',
    position: 'absolute',
    fontStyle: 'italic',
    fontSize: 20,
    color: 'orange',
    borderWidth: 20,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  text3: {
    left: 0,
    position: 'absolute',
    width: 130,
    fontSize: 20,
    color: 'orange',
    borderWidth: 30,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  viewStyle: {
    borderColor: 'green',
    alignItems: `stretch`,
    ...StyleSheet.absoluteFillObject

  }
})

export default BoxScreen;
