import { View, Text, TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value,setValue,placeholder,secureTextEntry}) => {
  return (
    <View>
      <TextInput value={value} onChangeText={setValue} style={styles.root} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
    </View>
  )
}
const styles = StyleSheet.create({
    root:{
        marginVertical:25,
        paddingHorizontal:5,
        borderRadius:5,
        backgroundColor:'#9cbcd6',
        alignItems:'center'
    }
});
export default CustomInput;