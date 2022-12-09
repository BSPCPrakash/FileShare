import { View, Text } from 'react-native'
import React from 'react';
import LottieView from  "lottie-react-native";

const Loading = () => {
  return (
    <View>
      <LottieView
      source={"D:/MyProjects/FileShareProject/FileShare/assets/progress-bar.json"}
      autoplay
      loop
      />
    </View>
  )
}

export default Loading;