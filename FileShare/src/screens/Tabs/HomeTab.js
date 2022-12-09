import {SafeAreaView, Text, StyleSheet} from 'react-native';
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
  return (
    <SafeAreaView style={styles.container}>
      <ReceiverName/>
      <Text>{user}</Text>
      <SelectFile file={res} setSingleFile={setSingleFile} />
      <FileNameComponent file={res}  />
      <UploadFile file={res} user={user}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
export default HomeTab;
