
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View, TouchableOpacity, Text, ImageBackground } from 'react-native';



import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'






export default function AddVideoScreen({ navigation }) {
  const image = { uri: "https://drive.google.com/uc?export=view&id=1tsWCCtpQNERCXjcvDPonkmdxhQB47GqU" };
  
  return (
    <View style={styles.container}>


      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       

        <TouchableOpacity
          style={styles.button}
          
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.textt}> Camera & Galerie </Text>
        </TouchableOpacity>

      </ImageBackground>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  },

  container: {
    flex: 1,

  },

  image: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: 'flex-end',
    padding: 50,
    flexDirection: "row",

  },
  textt: {
    fontWeight: "bold"

  },
});