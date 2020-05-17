import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
const emoji = require("emoji-dictionary");



const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Child #1{emoji.getUnicode("baby")}</Text>
      <Text style={styles.text}>Child #2{emoji.getUnicode("baby")}</Text>
      <Text style={styles.text}>Child #3{emoji.getUnicode("baby")}</Text>
    </View>)
}


const styles = StyleSheet.create({
  text: {
    marginVertical: 15,
    marginHorizontal: 15,
    fontStyle: 'italic',
    fontSize: 20,
    color: 'orange',
    borderWidth: 10,
    borderColor: `rgb(${100}, ${230}, ${230})`
  },
  viewStyle: {
    height: 300,
    borderWidth: 4,
    borderColor: 'green',
    alignItems: `center`
  }
})

export default BoxScreen;
