import HomeScreen from "./components/HomeScreen";
import AddVideoScreen from "./components/AddVideoScreen";
import React from 'react'
import CameraScreen from "./components/CameraScreen";
import AddProductScreen from "./components/AddProductScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{title: "Welcome"}}
        />
        <Stack.Screen 
          name="AddVideo"
          component={AddVideoScreen}
          
        />
        
         <Stack.Screen 
          name="Camera"
          component={CameraScreen}
          
        />
        <Stack.Screen 
          name="AddProduct"
          component={AddProductScreen}
          
        />
         
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}