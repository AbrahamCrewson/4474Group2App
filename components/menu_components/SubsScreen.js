import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View ,ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PurchaseScreen from './PurchaseScreen';


export  function SubsScreen({navigation}){
    return (
        <ScrollView style={style.main}>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Ham & Veggie",imgloc:require('../../images/sub3.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Ham & Veggie </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/sub3.png')}/>
              <Text style={style.calories}>500 cal</Text>
            </Pressable>
            
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Turkey & Veggie",imgloc:require('../../images/sub4.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Turkey & Veggie </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/sub4.png')}/>
              <Text style={style.calories}>600 cal</Text>
            </Pressable>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Chicken & Veggie",imgloc:require('../../images/sub5.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Chicken & Veggie </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/sub5.png')}/>
              <Text style={style.calories}>450 cal</Text>
            </Pressable>
            
        </ScrollView>
    )
    };
const SubStack = createNativeStackNavigator();
export default function SubStackScreen() {
  return (
    <SubStack.Navigator initialRouteName='Sub' screenOptions={{headerShown:false}}>
      <SubStack.Screen name= "Sub" component={SubsScreen} />
      <SubStack.Screen name= "Purchase" component={PurchaseScreen }  />
      
    </SubStack.Navigator>
  );
}
const style = StyleSheet.create({
    main:{
        flex: 1, 
        
        backgroundColor: 'white'
    },
    sub3:{
        marginLeft: 60,
        marginTop: 10,
        height: 115*1.3,
        width: 200*1.3,
    },
    press:{
        borderRadius: 60,
        borderColor: '#C22130',
        backgroundColor: '#C22130',
        height: 235,
        width: 225,
        marginLeft: 20,
        marginVertical: 30,
        
    },
    name:{
        
        color:'white',
        fontSize: 20,
        
    },
    calories:{
        paddingHorizontal:50,

        color:'white',
        fontSize: 20,
    },
    plus:{
        height: 25,
        width: 25,
        
    },
    div:{
        flexDirection:'row', 
        flexWrap:'wrap'
    },
    title:{
        alignContent: 'flex-end',
        textAlign:'justify',
        marginTop: 10,
        marginLeft: 25,
        marginRight: 10,
    }
});