import {Pressable, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
const SelectFile = ({setSingleFile}) => {
  const selectOneFile = async () => {
    try {
      console.log('hello world1');

      await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
      })
        .then(response => {
          console.log(response);
          const file = {
            uri: response.uri,
            name: response.name,
            type: response.type,
          };
          console.log(file);
          setSingleFile(file);
          console.log('Control Came here');
          ToastAndroid.show('File Selected', ToastAndroid.SHORT);
        })
        .catch(error => {
          console.log('File Not picked');
          ToastAndroid.show('File Not Selected', ToastAndroid.SHORT);
          console.log(error);
        });
        
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        ToastAndroid.show('File Picker Not responding', ToastAndroid.SHORT);
        alert('Canceled from single doc picker');
      } else {
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  return (
    <View>
      <Pressable style={styles.root} onPress={selectOneFile}>
        <Text style={styles.input}>Select File</Text>
      </Pressable>
    </View>
  );
};

export default SelectFile;

const styles = StyleSheet.create({
  fileName:{
    backgroundColor:'#f5f57d',
  },
  root: {
    backgroundColor: '#cc7852',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  input: {
    fontWeight: 'bold',
    color: 'white',
  },
});
