import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomFilePanel = ({receiverName,fileName,url}) => {
  return (
    <View>
        <Text>{receiverName}</Text>
        <Text>{fileName}</Text>
         <Pressable onPress={downloadFile(url)}>
                <Text>Download</Text>
        </Pressable>
    </View> 
  )
}

export default CustomFilePanel

const styles = StyleSheet.create({})