import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
  const name = "Bullet"
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react-native</Text>
      <Text style={subStyle.subTextStyle}>My name is {name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
})

const subStyle = StyleSheet.create({
  subTextStyle: {
    fontSize: styles.textStyle.fontSize / 2
  }
})

export default ComponentsScreen