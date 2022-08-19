
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View ,ImageBackground } from 'react-native';

import FontAwesome from '@expo/vector-icons/FontAwesome';

const image = { uri: "https://img.freepik.com/free-photo/asian-young-woman-live-streaming-showing-clothes-front-camera-sale-fashion-clothing_74952-2314.jpg?w=900&t=st=1660817101~exp=1660817701~hmac=8f4bdfc3f9496cf4ed4ef7437931a777fbb09599e105bc422ede08f3e1cf5a32" };

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
 
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <FontAwesome.Button name="arrow-right" backgroundColor="#4192f9" style={styles.iconStyle} onPress={() => navigation.navigate("AddVideo")}>
 Créer Video
      </FontAwesome.Button>
    </ImageBackground>
 
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  iconStyle:{
    marginLeft:30,
    marginRight:30,
   
  },
  container: {
    flex: 1,
  
      
   

  },

  image: {
    flex: 1,
    justifyContent: "center", 
    alignItems: 'center',
    
  },
});