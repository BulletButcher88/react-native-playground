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
    left: 30,
    top: 200,
    alignSelf: 'flex-start',
    fontStyle: 'italic',
    fontSize: 60,
    color: 'orange',
    borderWidth: 10,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  text2: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 200,
    fontStyle: 'italic',
    fontSize: 60,
    color: 'orange',
    borderWidth: 10,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  text3: {
    fontStyle: 'italic',
    fontSize: 60,
    color: 'orange',
    borderWidth: 10,
    borderColor: `rgb(${100}, ${230}, ${230})`,
  },
  viewStyle: {
    borderWidth: 20,
    borderColor: 'green',
    alignItems: `stretch`,
    ...StyleSheet.absoluteFillObject

  }
})

export default BoxScreen;
