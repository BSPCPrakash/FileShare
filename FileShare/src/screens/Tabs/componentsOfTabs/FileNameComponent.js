import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FileNameComponent = ({file}) => {
  return (
    <View>
      {
        file==null?(<Text>File Name</Text>):( <Text>UploadFile{file.name}</Text>)
      }
    </View>
  )
}

export default FileNameComponent

const styles = StyleSheet.create({})