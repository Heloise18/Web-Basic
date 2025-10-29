import { Image } from 'expo-image';
import { Platform, StyleSheet, View, Text } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style ={{flex: 1, justifyContent: 'center' , alignItems: "center"}}>
      <View style = {styles.square} >
        <Text style = {styles.colorBlue}>
          Hello word!!!!!
        </Text>
      </View>
     </View>
  );
}

const styles = StyleSheet.create({
  colorBlue: {
    color: 'white',
    fontSize: 12
  },
  square :{
    height:300,
    width: 300,
    backgroundColor: 'purple'
  }

})

