import {Pressable, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React from 'react';

const UploadFile = ({file, user}) => {
  const uploadFile = async () => {
    try {
      //Getting Post Url
      const postUrl = await fetch('http://192.168.29.247:5000/uploadURL', {
        fileId: file.uri,
        deviceId: user,
        type: file.type,
      });
      console.log(postUrl);
      //Uploading the File to the Bucket
      let Blob = await fetch(file.uri);
      let sendBlob = await Blob.blob();
      await fetch(postUrl, {
        method: 'PUT',
        body: sendBlob,
        headers: {
          'Content-Type': file.type,
        },
      })
        .then(serres => {
          console.log('Success');
          if (serres.status == 200) {
            console.log('Uploading Done');

            ToastAndroid.show('File Sent', ToastAndroid.SHORT);
          } else {
            ToastAndroid.show('File Not Sent', ToastAndroid.SHORT);
            console.log('we have got a problem with uploading');
            console.log(serres);
          }
        })
        .catch(err => {
          ToastAndroid.show('File Not Sent', ToastAndroid.SHORT);
          console.log(err);
        });

      //Saving the Record to Database
      //const response = await axios.post('http://localhost:5000/downloadUrl');
      console.log('Success');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Pressable style={styles.root} onPress={uploadFile}>
        <Text style={styles.input}>UploadFile</Text>
      </Pressable>
    </View>
  );
};

export default UploadFile;
const styles = StyleSheet.create({
  fileName: {
    backgroundColor: '#f5f57d',
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
