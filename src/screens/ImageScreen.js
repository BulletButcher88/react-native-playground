import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'


const data = [{
  title: "Forest",
  place: "Australia",
  imageUrl: require("../../assets/forest.jpg"),
  score: 4
},
{
  title: "Beach",
  place: "USA",
  imageUrl: require("../../assets/beach.jpg"),
  score: 5


},
{
  title: "Mountain",
  place: "Norway",
  imageUrl: require("../../assets/mountain.jpg"),
  score: 6
}
]

const ImageScreen = () => {
  return (
    <View>
      {
        data.map((data) =>
          <ImageDetail
            keyExtractor={(item) => item.score}
            data={data} />
        )}
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageScreen