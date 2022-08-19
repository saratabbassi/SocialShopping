import { View, Text,StyleSheet,Dimensions } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const {width,height}=Dimensions.get('window');
export default function AddproductScreen() {

  return (
    <View style={styles.container}>
      <View style={styles.containerr}>
      <FontAwesome.Button  backgroundColor="#4192f9" style={styles.btn} onPress={() => navigation.navigate("AddVideo")}>
        Ajouter Produit
      </FontAwesome.Button>
      </View>
       
      <Video 
      /*source={{ uri: props.route.params.source }}*/
        source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
        
        volume={0.1}
        isMuted={false}
        resizeMode='cover'
        shouldPlay
        isLooping
       
        style={styles.video}
        
      
        
      />
     

    </View>
    
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: "center", 
    alignItems: 'center',
    
   
},
video: {
  position:'relative',
  
  width: width,
  height: height,
 
  
 
},
containerr:{
  position:'absolute',
  zIndex:999,
  bottom:30
},
btn:{
  paddingLeft:40,
  paddingRight:40,
}

});