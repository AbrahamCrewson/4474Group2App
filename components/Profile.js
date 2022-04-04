import * as React from 'react';
import { StyleSheet, TextInput,Text, View, Image ,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Profile(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style = {{color:'#C02A2A', fontWeight: 'bold' ,fontSize:20, top:"-5%"}}>My Profile</Text>
            <Image source={require('../images/profile.png')} style={style.image}/>
            <Pressable style = {style.button}>
                <Text style = {style.buttonText}>Change Name</Text>
            </Pressable>
            <Pressable style = {style.button}>
                <Text style = {style.buttonText}>Change Email</Text>
            </Pressable>
            <Pressable style = {style.button}>
                <Text style = {style.buttonText}>Change Payment</Text>
            </Pressable>
        </View>
    )
}
const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Menu" component={MenuScreen} />
    </ProfileStack.Navigator>
  );
}
const style = StyleSheet.create({
    button: {
        borderRadius: 40,
        borderWidth: 20,
        height: 120,
        backgroundColor: '#C22130',
        borderColor: '#C22130',
        padding: 15,
        marginTop: "10%",
        bottom :"-5%",
        textAlign: 'center',
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
        fontSize:20,
    },
    itemText:{
        fontSize:20,
        color: 'black',
        marginBottom:10,
    },
    image:{
        height:90,
        width: 100,
        marginHorizontal: 0,
        marginTop: 30,
        marginBottom: "-17%",
        top : "-5%",
    },
})