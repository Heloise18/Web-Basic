import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useState } from 'react';
export default function App() {

  const [text,setText] = useState("")
  return (
    <View style={{flex:1, backgroundColor:'#14141f'}}>
      <View style={{ width:200, height:200,alignItems:'flex-start',  padding: 20}}> 
        <Image  style={{width:200, height:200} }source={require('../assets/images/ordo.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  colorBlue: {
    color: 'black',
    fontSize: 40,
    fontWeight:'900'
  },
  square :{
    height:400,
    width: 300,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center"

  }

})

    //   <View style ={{flex: 1, justifyContent: 'center' , alignItems: "center", backgroundColor:'gray'}}>
    //     <View>
    //       <Text style = {styles.colorBlue}> Dante </Text> 
    //     </View>

    //   <View style ={{flex: 1, justifyContent: 'center' , alignItems: "center", backgroundColor:'gray'}}>
    //     <View style = {styles.square} >
          
    //       <Image  style={{width:420, height:730} }source={require('../assets/images/dante.jpg')}/>
    //       <Button title= "Press me" onPress={() => console.log("ola")}color={'black'}/>
    //     </View>

      
    //     {/* <TextInput placeholder='Digite aqui ... ' onChangeText={text => setText(text) } />
    //     <TouchableOpacity> <View><Text>botaun</Text></View> </TouchableOpacity> */}
      
    //   </View>
    //  </View>

