import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Headerbar(){
    return (
        <Image 
            style={{height: 30, width: 60}}
            source={require( '../images/logo.png')}
        />

    )
}