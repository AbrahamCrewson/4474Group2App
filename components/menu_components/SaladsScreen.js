
import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View ,ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SaladPurchaseScreen } from './PurchaseScreen';
export  function SaladsScreen({navigation}){
    return (
        <ScrollView style={style.main}>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Garden Salad",imgloc:require('../../images/salad1.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.cookie}>Garden Salad </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.cookieimg} source={require('../../images/salad1.png')}/>
              <Text style={style.calories}>100 cal</Text>
            </Pressable>
            
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Chicken Salad",imgloc:require('../../images/salad2.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Chicken Salad</Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.chips} source={require('../../images/salad2.png')}/>
              <Text style={style.calories}>300 cal</Text>
            </Pressable>
            
            
        </ScrollView>
    )
    };
const SaladStack = createNativeStackNavigator();
export default function SaladStackScreen() {
  return (
    <SaladStack.Navigator initialRouteName='Salads' screenOptions={{headerShown:false}}>
      <SaladStack.Screen name= "Salads" component={SaladsScreen} />
      <SaladStack.Screen name= "Purchase" component={SaladPurchaseScreen }  />
      
    </SaladStack.Navigator>
  );
}
const style = StyleSheet.create({
    main:{
        flex: 1, 
        
        backgroundColor: 'white'
    },
    sub3:{
        marginLeft: 150,
        marginTop: 0,
        height: 727*0.22,
        width: 376*0.22,
    },
    press:{
        borderRadius: 60,
        borderColor: '#C22130',
        backgroundColor: '#C22130',
        height: 235,
        width: 200,
        marginLeft: 20,
        marginVertical: 30,
        
    },
    name:{
        color:'white',
        fontSize: 20,
    },
    cookie:{
        color:'white',
        fontSize: 20,
    },
    cookieimg:{
        marginLeft: 80,
        marginTop: 0,
        height:769*0.2,
        width:1167*0.2,
    },
    chips:{
        marginLeft: 60,
        marginTop: 10,
        marginBottom: 10,
        width: 678*0.37,
        height:378*0.37,
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
        
    },
    title:{
        alignContent: 'flex-end',
        textAlign:'justify',
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    }
});