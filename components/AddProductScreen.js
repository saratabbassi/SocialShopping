import { View, Text, StyleSheet, Dimensions,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Video } from 'expo-av'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');
export default function AddproductScreen() {
  

  /****/ 
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      navigation.navigate('ProductInfo', {source : result.uri})
      
    }
  };
  
    
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <FlatList data={{uri: "https://drive.google.com/uc?export=view&id=1tsWCCtpQNERCXjcvDPonkmdxhQB47GqU"}}/>
      <View style={styles.containerr}>
        <FontAwesome.Button backgroundColor="#4192f9" style={styles.btn} onPress={pickImage}
        >
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
    position: 'relative',

    width: width,
    height: height,



  },
  containerr: {
    position: 'absolute',
    zIndex: 999,
    bottom: 30
  },
  btn: {
    paddingLeft: 40,
    paddingRight: 40,
  }

});