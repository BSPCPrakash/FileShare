import RNFetchBlob from 'rn-fetch-blob';
import { ToastAndroid } from 'react-native';
const downloadFile = FILE_URL => {
  let date = new Date();
  const {config, fs} = RNFetchBlob;
  let dirs = RNFetchBlob.fs.dirs;
  let options = {
    fileCache: true,
    path: dirs.DownloadDir + '/' + date,
    addAndroidDownloads: {
      description: 'downloading file...',
      notification: true,
      useDownloadManager: true,
      path: dirs.DownloadDir + '/' + date,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      console.log('res -> ', JSON.stringify(res));
      ToastAndroid.show('File Downloaded', ToastAndroid.SHORT);
      alert('File Downloaded Successfully.');
    })
    .catch(err => {
      ToastAndroid.show(
        'Server Is busy.Try After Sometime',
        ToastAndroid.SHORT,
      );
      console.log(err);
    });
};
export default downloadFile;
