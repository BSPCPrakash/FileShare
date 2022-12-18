import { StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ReceiverName = ({receiverName,setReceiverName}) => {
    
  return (
    <View>
      <TextInput value={receiverName} onChangeText={setReceiverName} style={styles.root} placeholder="Receiver Name"></TextInput>
    </View>
  )
}

export default ReceiverName;

const styles = StyleSheet.create({
    root:{
        marginVertical:25,
        paddingHorizontal:5,
        borderRadius:5,
        backgroundColor:'#9cbcd6',
        alignItems:'center'
    }
})