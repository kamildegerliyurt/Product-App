import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import {RenderItem, BestRated, OtherRenderItem, SearchBar} from "../components/"


const ProductList = ({navigation}) => {
//----------------------------------------
const [productData, setProductData]= useState([])

const [searchData, setSearchData]= useState("")
const [filterList, setFilterList]= useState([])
//----------------------------------------

useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then((res)=> {
        setProductData(res.data)
    })
}, [])

//----------------------------------------
const handleSearchData = (value)=> {
    setSearchData(value)


const filtered = productData.filter((item)=>
   item.title.toLowerCase().includes(searchData.toLowerCase())
)

setFilterList(filtered)

}
//----------------------------------------

const firstProductData = productData.slice(0,10)
const secondProductData = productData.slice(10,20)
//----------------------------------------


  return (
    <SafeAreaView style={styles.productListContainer}>
      <SearchBar getSearchData={handleSearchData}/>
      <View style={styles.flatListContainer}>
        <FlatList data={filterList.length > 0 ? filterList : firstProductData}
                  numColumns={(2)}
                  showsVerticalScrollIndicator={false}
                  alwaysBounceVertical={false}
                  decelerationRate={"fast"}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> {
                    return(
                      <RenderItem data={item}/>
                    )
                  }}/>
      </View>

     
      <BestRated />


      <View style={styles.otherFlatListContainer}>
        <FlatList data={filterList.length > 0 ? filterList : secondProductData}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  alwaysBounceHorizontal={false}
                  decelerationRate={"fast"}
                  keyExtractor={(item)=> item.id}
                  renderItem={({item})=> {
                    return(
                      <OtherRenderItem data={item}/>
                    )
                  }}/>
      </View>




    </SafeAreaView>
  )
}

export default ProductList

const styles = StyleSheet.create({
    productListContainer: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    flatListContainer: {
        flex:2,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
    },
    otherFlatListContainer: {
        flex:1,
        width:"95%",
        alignItems:"center",
        justifyContent:"center",
        marginBottom:5,
    }
})