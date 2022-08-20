import { View, Text,ImageBackground,StyleSheet, Image ,TextInput} from 'react-native'
import React , { useState } from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function ProductInfoScreen(props) {
    const image = { uri: "https://drive.google.com/uc?export=view&id=1NJshcTXGcBnswm54mLa4j_Lw-8RvquSz" };
    const [marque, setMarque] = useState('');
    
  return (
    <View style={styles.container}>
      
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <View style={styles.cont}>
        <Image style={styles.productimg} source={{ uri: props.route.params.source }}
        />
        <View>
<TextInput placeholder='Nom de marque' style={styles.input} />
<TextInput placeholder='Nom de produit'style={styles.input} />
<TextInput placeholder='Prix de produit' style={styles.input} />
<TextInput placeholder='Lien de produit' style={styles.input} />
</View>
<View style={styles.containerr}>
        <FontAwesome.Button backgroundColor="#4192f9" style={styles.btn} 
        >
          Ajouter Produit
        </FontAwesome.Button>
      </View>
</View>

        

      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        paddingLeft:30,
        paddingRight:30,
        marginBottom:10,
      },
    productimg:{
        width: 200 , 
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 5,
        borderColor: '#DCDCDC',
        borderRadius: 30  ,
        marginBottom:50,
        
    },
  cont:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    container: {
      flex: 1,
  
    },
  
    image: {
      flex: 1,
     
      
    },
    btn: {
        
        paddingLeft: 70,
        paddingRight: 70,
      },
      containerr: {
        
        bottom:0
      },
  
  });