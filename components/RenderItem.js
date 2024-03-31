import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RenderItem = (props) => {

//-------------------------------
const data = props.data
const title = data.title
const image = data.image
//-------------------------------
const navigation = useNavigation();

//-------------------------------
const handleButton = ()=> {
   navigation.navigate("ProductDetails",
   {
     data: props.data
   })
}
//-------------------------------


  return (
    <View style={styles.renderContainer}>
    <Pressable style={({pressed})=> [{transform: [{translateY: pressed ? 3 : 0}]},styles.buttonContainer]}
               onPress={handleButton}>
        <Image style={{width:100, height:100, resizeMode:"center"}}
               source={{uri: image}}/>
        <Text style={styles.renderText} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>
    </Pressable>
    </View>
  )
}

export default RenderItem

const styles = StyleSheet.create({
    renderContainer: {
        width:"40%",
        margin:15,
        alignItems:"center",
        justifyContent:"center",
    },
    renderText: {
        borderWidth:2,
        marginTop:5,
        textAlign:"center",
        padding:5,
        fontSize:20,
        fontWeight:"bold",
        borderRadius:10,
    },
    buttonContainer: {
        alignItems:"center",
        justifyContent:"center",
    }
})