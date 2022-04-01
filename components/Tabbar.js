import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Homepage from './Homepage';
import MenuStackScreen from './Menu';
import RewardsStackScreen from './Rewards';
import ProfileStackScreen from './Profile';
import Headerbar from './Headerbar';
import SignIn from './SignIn';
import Help from './Help'
import HelpB from './HelpB'
import HelpC from './HelpC'

export const Tab = createBottomTabNavigator();
export const Stack = createNativeStackNavigator();
export const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Menu':
        iconName = 'book-open';
        break;
      case 'Rewards':
        iconName = 'award';
        break;
      case 'Profile':
        iconName = 'user';
        break;
        case 'Help':
            iconName ='help'
      default:
        break;
    }
    return <Icon name={iconName} color={color} size={30} />;

  };

export const headerOptions = StyleSheet.create({
    headerLargeTitle: true,
    headerLargeTitleStyle:{
        fontSize: 10
    },
    headerStyle:{
      borderBottomColor: '#C22130',
      borderBottomWidth: 4
    },
    headerTitle: (props) => <Headerbar{...props}/>,
    headerLeft: (props) => 
        <Icon name ={'menu'} color={'#C22130'} size={30}/>,
    headerRight: (props) => 
    <Icon name ={'shopping-bag'} color={'#C22130'} size={30}/>
    
});




 export function SignedIn(){
  return(
        <Tab.Navigator initialRouteName = 'Home' screenOptions={({route}) => ({tabBarIcon: ({focused, color}) => screenOptions(route, color), tabBarActiveTintColor: '#C22130', tabBarInactiveTintColor: 'gray',})}>
          <Tab.Screen name="Home" component={Homepage} options={headerOptions} />
          <Tab.Screen name="Menu" component={MenuStackScreen} options={headerOptions}/>
          <Tab.Screen name="Rewards" component={RewardsStackScreen} options={headerOptions}/>
          <Tab.Screen name="Profile" component={ProfileStackScreen} options={headerOptions} />
        </Tab.Navigator>
  );
}
/// tabbar()->signin()->signedin()->home()-> help()?
export default function Tabbar(){
    return(
    <NavigationContainer>
     <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown:false}} >
            <Stack.Screen name = "SignIn" component={SignIn}/>
            <Stack.Screen name = "SignedIn" component={SignedIn}/>
         <Stack.Screen name = "Help" component={Help}/>
         <Stack.Screen name = "HelpB" component={HelpB}/>
         <Stack.Screen name = "HelpC" component={HelpC}/>
      </Stack.Navigator>
    </NavigationContainer>
    )

}