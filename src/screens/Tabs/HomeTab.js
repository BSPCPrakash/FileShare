import {SafeAreaView, Text, StyleSheet,TextInput} from 'react-native';
import React from 'react';
import ReceiverName from './componentsOfTabs/ReceiverName';
import SelectFile from './componentsOfTabs/SelectFile';
import EncryptedStorage from 'react-native-encrypted-storage';
import UploadFile from './componentsOfTabs/uploadFile';
import FileNameComponent from './componentsOfTabs/FileNameComponent';
import {useState} from 'react';
import { AuthContext } from '../../../AuthProvider';
const HomeTab = () => {
  const [res, setSingleFile] = useState(null);
  const {user} = React.useContext(AuthContext);
  const [receiverName,setReceivername]=useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TextInput value={receiverName} onChangeText={setReceivername} style={styles.root} placeholder="Receiver Name"></TextInput>
      <Text>{user}</Text>
      <SelectFile file={res} setSingleFile={setSingleFile} />
      <FileNameComponent file={res}  />
      <UploadFile file={res} receiverName={receiverName} username={user}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
  root:{
    marginVertical:25,
    paddingHorizontal:5,
    borderRadius:5,
    backgroundColor:'#9cbcd6',
    alignItems:'center'
}
});
export default HomeTab;
