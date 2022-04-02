import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image ,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HelpB from "./HelpB.js"
import HelpC from './HelpC.js';
import HelpD from './HelpD.js';
import FinalRec from './FinalRec.js';
import Help from "./Help.js"
import React from "react";

export default function Homepage({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top',backgroundColor: 'white'}}>
            <StatusBar style="auto" />
            <Text style = {style.topText}>Deal of The Day</Text>
            <Pressable style = {style.deal} onPress={() => navigation.navigate("Menu")}>
              <Image style= {style.image} source={require('../images/sub1.png')}/>
              <Text style = {style.itemText}>Meatball Sub     $6.99</Text>
            </Pressable>
            <Pressable style = {style.button} onPress={() => navigation.navigate("Help")}>
              <Text style = {style.buttonText}>Help Me Decide</Text>
            </Pressable>
        </View>
    )
}
const HomeStack = createNativeStackNavigator();
export function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName='Homepage' screenOptions={{headerShown:false}}>
      <HomeStack.Screen name="Homepage" component={Homepage} />
      <HomeStack.Screen name= "Help" component={Help} />
      <HomeStack.Screen name = "HelpB" component={HelpB}/>
      <HomeStack.Screen name = "HelpC" component={HelpC}/>
      <HomeStack.Screen name = "HelpD" component={HelpD}/>
      <HomeStack.Screen name = "FinalRec" component={FinalRec}/>
    </HomeStack.Navigator>
  );
}
const style = StyleSheet.create({
  topText:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#C22130',
    marginTop:75,
    marginBottom: 20,
  },
  button:{
    borderRadius: 12,
    borderWidth: 3,
    backgroundColor: 'white',
    borderColor:'#C22130',
    padding: 12,
    marginTop:100,
    
  },
  buttonText:{
    color:"#C22130",
    fontSize:30,
  },
  itemText:{
    fontSize:20,
    color: 'black',
    marginBottom:10,
  },
  image:{
    height:100,
    width: 200,
    marginHorizontal: 50,
    marginTop: 30,
    marginBottom: 10,
  },
  deal:{
    borderRadius: 360,
    borderWidth: 8,
    backgroundColor: 'white',
    borderColor:'#C22130',
    padding: 0,
    marginHorizontal:0,
    alignItems:'center',
  }

});
