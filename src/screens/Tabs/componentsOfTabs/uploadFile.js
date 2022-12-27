import {Pressable, StyleSheet, Text, View, ToastAndroid} from 'react-native';
import React from 'react';
import axios from 'axios';

const UploadFile = ({file, receiverName, username}) => {
  //save the transaction
  const saveTransaction = async (
    filename,
    deviceId,
    type,
    receiverName,
    username,
  ) => {
    try {
      console.log(username);
      const data = {
        fileID: filename,
        deviceId: deviceId,
        type: type,
        receiverName: receiverName,
        username: username,
      };
      console.log(username);   
      await axios
        .post('http:// 172.20.10.3:5000/downloadURL', data)
        .then(res => {
          console.log(res.body);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  //upload the file

  const uploadFile = async () => {
    try {
      //Getting Post Url
      const data = {
        fileId: file.name,
        deviceId: receiverName,
        type: file.type,
      };
      console.log(username);
      var postUrl = '';
      await axios
        .post('http://172.20.10.3:5000/uploadURL', data)
        .then(res => {
          console.log(res);
          const message = res['data']['message'];
          if (message == 'Url Aquired') {
            postUrl = res['data']['url'];
            console.log(postUrl);
          } else {
            console.log('Post URL is not acquired');
          }
        })
        .catch(error => {
          console.log(error);
        });
      if (postUrl != '') {
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
              saveTransaction(
                file.name,
                receiverName,
                file.type,
                receiverName,
                username,
              );
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
        console.log('Success');
      } else {
        console.log('Not Successful');
        ToastAndroid.showWithGravity(
          'Not Succesfull',
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
      }
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
