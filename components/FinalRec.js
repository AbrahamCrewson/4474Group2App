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
import SignedIn from './Tabbar'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function FinalRec({navigation}){
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'top',backgroundColor: 'white'}}>
            <StatusBar style="auto" />
            <Image
                source={require("../images/sub2.png")}
                resizeMode="contain"
                style={style.image}
            ></Image>
            <Text style={style.itemText}>
                We've made recommendation for you!
            </Text>
            <Text style={style.topText}>
                Ham Sub
            </Text>
            <Pressable style = {style.buttonYes} onPress={() => navigation.navigate("Menu")}>
                <Text style = {style.buttonText}>Continue</Text>
            </Pressable>
            <Pressable style = {style.buttonNo} onPress={() => navigation.navigate("HelpD")}>
                <Text style = {style.buttonText}>Back</Text>
            </Pressable>

        </View>
    );
}
const style = StyleSheet.create({
    topText:{
        fontSize: 25,
        fontWeight: 'normal',
        color: '#C22130',
        marginTop:40,
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
        borderWidth: 7 ,
        width: 150,
        backgroundColor: '#C22130',
        borderColor:'#C22130',
        padding: 20,
        marginTop:520,
        position : 'absolute',
        right: 20,

    },
    buttonNo:{
        borderRadius: 25,
        borderWidth: 7 ,
        width: 150,
        backgroundColor: '#C22130',
        borderColor:'#C22130',
        padding: 20,
        marginTop:520,
        position : 'absolute',
        left: 20,


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
        fontSize:24,
    },
    itemText:{
        fontSize:20,
        color: 'black',
        marginTop:380,
        fontWeight: 'bold',
    },

    image:{
        height: 219,
        width: 282,
        marginTop: 80,
        position: 'absolute',
        left:48,
        top: 50,
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