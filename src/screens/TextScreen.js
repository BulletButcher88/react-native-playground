import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'




const TextScreen = () => {
  const [name, setName] = useState('')

  return <View>
    <Text>enter your name here </Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newValue) => {
        setName(newValue)
      }}
    />

    {name.length > 10 ?
      <Text style={styles.errorText}>name should be less than 10 characters </Text>
      : name.length > 2 ?
        <Text style={styles.hello}>Why hello {name}!</Text>
        : <Text style={styles.default}>* name must be longer than 2 characters</Text>}
  </View>

}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 200,
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  },
  default: {
    color: 'red'
  },
  hello: {
    margin: 20,
    fontSize: 40,
    backgroundColor: "pink"
  },
  errorText: {
    margin: 20,
    fontSize: 20,
    backgroundColor: "red"
  }
})

export default TextScreen