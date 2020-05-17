import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


const ImageDetail = ({ data: { imageUrl, title, place, score } }) => {
  return (
    <View>
      <Image source={imageUrl} />
      <Text >{title}</Text>
      <Text>{place}</Text>
      <Text>Score:{score} </Text>
    </View>)
};

const styles = StyleSheet.create({

})

export default ImageDetail