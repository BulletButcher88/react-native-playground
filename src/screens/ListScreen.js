import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Friend 1#', age: 20 },
    { name: 'Friend 2#', age: 20 },
    { name: 'Friend 3#', age: 20 },
    { name: 'Friend 4#', age: 20 },
    { name: 'Friend 5#', age: 20 },
    { name: 'Friend 6#', age: 20 },
  ]


  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles} >{item.name} - Age: {item.age}</ Text>
      }
      } />
  )

}
const styles = StyleSheet.create({
  fontSize: 20,
  marginVertical: 30,
  padding: 5
});


export default ListScreen