import * as React from 'react';
import { StyleSheet, TextInput,Text, View, Image ,Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Headerbar from './Headerbar';
import Icon from 'react-native-vector-icons/Feather';
import Tabbar from './Tabbar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from './Homepage';
import Home from './Homepage';
import MenuStackScreen from './Menu';
import RewardsStackScreen from './Rewards';
import ProfileStackScreen from './Profile';
import HelpB from './HelpB'
import SignedIn from './Tabbar'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
///////////////////////////////////////import//////////////////////////////////////////////////



export default  function Help({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top',backgroundColor: 'white'}}>
            <StatusBar style="auto" />
            <Pressable style = {style.button}>
             <Text style = {style.buttonText}>Are you Vegan?</Text>
            </Pressable>
            <Pressable style = {style.buttonYes} onPress={() => navigation.navigate("HelpB")}>
                <Text style = {style.buttonText}>Yes</Text>
            </Pressable>
            <Pressable style = {style.buttonNo} onPress={() => navigation.navigate("HelpB")}>
                <Text style = {style.buttonText}>No</Text>
            </Pressable>
            <Pressable style = {style.buttonBack} onPress={() => navigation.navigate("Homepage")}>
            <Image source={require('../images/back.png')} style = {style.buttonBack} resizeMode="contain" />
            </Pressable>
            <Text style ={{color:"#C02A2A",
                fontSize:28, position : 'absolute',
                right : 30,
                bottom: 53}}>1/4</Text>
        </View>
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
    arrow:{
        padding: 12,
        marginTop:695,
        position : 'absolute',
        left : 5,
        bottom: 10,
    },
    button:{
        borderRadius: 25,
        borderWidth: 15,
        height : 120,
        backgroundColor: '#C22130',
        borderColor:'#C22130',
        padding: 20,
        marginTop:150,
    },
    buttonYes:{
        borderRadius: 25,
        borderWidth: 10 ,
        width: 200,
        backgroundColor: '#C22130',
        borderColor:'#C22130',
        padding: 20,
        marginTop:40,

    },
    buttonNo:{
        borderRadius: 25,
        borderWidth: 7 ,
        width: 200,
        backgroundColor: '#C22130',
        borderColor:'#C22130',
        padding: 20,
        marginTop:40,


    },

    buttonBack:{
        width: 100,
        height: 100,
        marginTop: 695,
        marginLeft: 20,
        position : 'absolute',
        left : -10,
        bottom: 10,
    },

    buttonText:{
        textAlign : 'center',
        color:"white",
        fontSize:30,
    },
    itemText:{
        fontSize:20,
        color: 'black',
        marginBottom:10,
    },
    image:{
        height:100,
        width: 100,
        marginHorizontal: 0,
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

