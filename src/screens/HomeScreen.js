import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
const emoji = require("emoji-dictionary");

const HomeScreen = ({ navigation }) => {


  return (
    <View>
      <Text style={styles.textStyle}>I {emoji.getUnicode("heart")
      } React-Native</Text>
      <Button
        onPress={() => {
          navigation.navigate('Components')
        }}
        title="Go to Component Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate('List')
        }}
        title="Go to List Demo"
      />
      <Button
        onPress={() => {
          navigation.navigate('Image')
        }}
        title="props example - Image Screen"
      />
      <Button
        onPress={() => {
          navigation.navigate('Counter')
        }}
        title="useReducer Counter"
      />
      <Button
        onPress={() => {
          navigation.navigate('Color')
        }}
        title="useState example - Color"
      />
      <Button
        onPress={() => {
          navigation.navigate('ColorChange')
        }}
        title="Change Color"
      />
      <Button
        onPress={() => {
          navigation.navigate('TextScreen')
        }}
        title="Text Screen"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: 'pink',
    fontSize: 30,
    padding: 20,
  }
});

export default HomeScreen;


