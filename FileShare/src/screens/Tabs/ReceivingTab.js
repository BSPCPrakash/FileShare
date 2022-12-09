import {FlatList, StyleSheet, Text, View,Alert, StatusBar,PermissionsAndroid,ToastAndroid, Pressable} from 'react-native';
import React from 'react';

import downloadFile from '../../apiCallFunctions/downloadFile';

const checkPermission = async (FILE_URL) => {
 
  if (Platform.OS === 'ios') {
    downloadFile(FILE_URL);
  } else {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission Required',
          message:
            'Application needs access to your storage to download File',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // Start downloading
        downloadFile(FILE_URL);
        console.log(FILE_URL);
        console.log('Storage Permission Granted.');
      } else {
        // If permission denied then show alert
        Alert.alert('Error','Storage Permission Not Granted');
      }
    } catch (err) {
      // To handle permission related exception
      console.log("++++"+err);
    }
  }
};

const Item = ({title,id,url}) => (
  <View style={styles.item}>
    <Pressable onPress={()=>{
        checkPermission(url);
    }}>
        <Text style={styles.title}>{title}</Text>
        <Text>{id}</Text>
    </Pressable>
  </View>
);

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fca%2F18%2Fd2%2Fca18d2475812b56fb79394d06a4f00c4.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F669277194617204476%2F&tbnid=vhopjgYwBXKV1M&vet=12ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ..i&docid=EnxUM7bcCIf5FM&w=719&h=859&q=ganesh%20images&ved=2ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ' },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fca%2F18%2Fd2%2Fca18d2475812b56fb79394d06a4f00c4.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F669277194617204476%2F&tbnid=vhopjgYwBXKV1M&vet=12ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ..i&docid=EnxUM7bcCIf5FM&w=719&h=859&q=ganesh%20images&ved=2ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2F736x%2Fca%2F18%2Fd2%2Fca18d2475812b56fb79394d06a4f00c4.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F669277194617204476%2F&tbnid=vhopjgYwBXKV1M&vet=12ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ..i&docid=EnxUM7bcCIf5FM&w=719&h=859&q=ganesh%20images&ved=2ahUKEwiZl7GAnMr7AhUVyXMBHbdtDvAQMygBegUIARDpAQ'
  },
  
];

const ReceivingTab = () => {

  const renderItem = ({item}) => <Item title={item.title} id={item.id} url={item.url} />;
  return (
    <View>
      <FlatList data={DATA} renderItem={renderItem} />
    </View>
  );
};

export default ReceivingTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#daf2f1',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 28,
  },
});
