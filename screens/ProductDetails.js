import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const ProductDetails = ({ route, navigation }) => {
  //-----------------------------------
  const total = route.params.data
  const title = total.title
  const description = total.description
  const price = total.price
  const image = total.image
  //-----------------------------------
  const [number, setNumber] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  //-----------------------------------AZALT
  const handleMinus = () => {
    if (number > 0) {
      setNumber(number - 1)
      setTotalPrice(totalPrice - price)
    }
  }
  //-----------------------------------ARTTIR
  const handlePlus = () => {
    if (number < 10) {
      setNumber(number + 1)
      setTotalPrice(totalPrice + price)
    }
  }
   //-----------------------------------

  return (
    <View style={styles.productDetailsContainer}>
      <Image style={{ width: 100, height: 100, resizeMode: "center" }}
        source={{ uri: image }} />

      <View style={styles.topContainer}>

        <Pressable style={{ alignItems: "center", justifyContent: "center" }}
          onPress={handleMinus}>

          <AntDesign name="minuscircleo" size={22} color="black" />

        </Pressable>

        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{number}</Text>

        <Pressable style={{ alignItems: "center", justifyContent: "center" }}
          onPress={handlePlus}>
          <AntDesign name="pluscircleo" size={22} color="black" />
        </Pressable>
      </View>

      <Text style={{textAlign:"center"}}>{title}</Text>
      <Text style={{textAlign:"center"}}>{description}</Text>

    <View style={{ width:"50%",
                   alignItems:"center", 
                   justifyContent:"space-between",
                   marginTop:20, }}>
      <Text style={{fontSize:20, fontWeight:"bold"}}>Total Price: {totalPrice.toFixed(2)}</Text>
    </View>

    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  productDetailsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  topContainer: {
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  }
})
