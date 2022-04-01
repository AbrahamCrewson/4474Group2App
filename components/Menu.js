import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SubsScreen from './menu_components/SubsScreen';
import SaladsScreen from './menu_components/SaladsScreen';
import SidesScreen from './menu_components/SidesScreen';
import DrinksScreen from './menu_components/DrinksScreen';


export default function Menu({navigation}){
    return (
        <MenuStackScreen/>
    )
}
const MenuStack = createMaterialTopTabNavigator();

 function MenuStackScreen() {
  return (
    
    <MenuStack.Navigator>
      <MenuStack.Screen name="Subs" component={SubsScreen} />
      <MenuStack.Screen name="Salads" component={SaladsScreen} />
      <MenuStack.Screen name="Sides" component={SidesScreen} />
      <MenuStack.Screen name="Drinks" component={DrinksScreen} />
    </MenuStack.Navigator>
    
  );
}
