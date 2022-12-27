import {FlatList, View} from 'react-native';
import {
  StyleSheet,
  Text,
  Alert,
  StatusBar,
  PermissionsAndroid,
  ToastAndroid,
  Pressable,
} from 'react-native';
import React from 'react';

import downloadFile from '../../apiCallFunctions/downloadFile';
import Axios from 'axios';

import AsyncStorage from '@react-native-community/async-storage';

export default class ReceiveFiles extends React.Component {
  constructor(props) {
    super(props);
    const username = AsyncStorage.getItem('Username');
    this.state = {
      isLoadding: true,
      username: username,
      dataSource: [],
      isFetching: false,
    };
  }
  checkPermission = async FILE_URL => {
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
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // Start downloading
          downloadFile(FILE_URL);
          console.log(FILE_URL);
          console.log('Storage Permission Granted.');
        } else {
          // If permission denied then show alert
          Alert.alert('Error', 'Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.log('++++' + err);
      }
    }
  };

  onRefresh() {
    this.setState({isFetching: true}, function () {
      this.getData();
    });
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    const data = {
      username: this.state.username,
      device_id: this.state.username,
    };
    Axios.post('http://172.20.10.3:5000/transactions', data)
      .then(res => {
        console.log(res.data);
        this.setState({
          isLoading: false,
          dataSource: res.data,
          isFetching: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    let {dataSource, isLoading} = this.state;
    return (
      <View>
        <Text>Hello From Receiving Files</Text>
        <FlatList
          data={dataSource}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <Pressable
                  onPress={() => {
                    this.checkPermission(item.file_url);
                  }}>
                  <Text>{item._id}</Text>
                </Pressable>
              </View>
            );
          }}
          onRefresh={() => this.onRefresh()}
          refreshing={this.state.isFetching}
          keyExtractor={item => item._id}
        />
      </View>
    );
  }
}

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
