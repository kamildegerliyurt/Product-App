import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BestRated = (props) => {
  return (
    <View style={styles.bestRatedContainer}>
      <Text style={styles.bestRatedText}>BestRated</Text>
    </View>
  )
}

export default BestRated

const styles = StyleSheet.create({
    bestRatedContainer: {
        width:"95%",
        marginVertical:10,
        paddingVertical:10,
    
    },
    bestRatedText: {
        fontSize:20,
        fontWeight:"bold",
        borderBottomWidth:1,
        borderColor:"gray",
        color:"gray",
    }
})