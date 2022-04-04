import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View ,ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrinksPurchaseScreen } from './PurchaseScreen';
export  function DrinksScreen({navigation}){
    return (
        <ScrollView style={style.main}>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Fronta",imgloc:require('../../images/can1.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Fronta </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/can1.png')}/>
              <Text style={style.calories}>150 cal</Text>
            </Pressable>
            
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "NotaCola",imgloc:require('../../images/can2.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>NotaCola </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/can2.png')}/>
              <Text style={style.calories}>150 cal</Text>
            </Pressable>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Spite",imgloc:require('../../images/can3.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Spite </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/can3.png')}/>
              <Text style={style.calories}>150 cal</Text>
            </Pressable>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Pipsi",imgloc:require('../../images/can4.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Pipsi </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.sub3} source={require('../../images/can4.png')}/>
              <Text style={style.calories}>150 cal</Text>
            </Pressable>
            
        </ScrollView>
    )
    };
const DrinkStack = createNativeStackNavigator();
export default function DrinkStackScreen() {
  return (
    <DrinkStack.Navigator initialRouteName='Drink' screenOptions={{headerShown:false}}>
      <DrinkStack.Screen name= "Drink" component={DrinksScreen} />
      <DrinkStack.Screen name= "Purchase" component={DrinksPurchaseScreen }  />
      
    </DrinkStack.Navigator>
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