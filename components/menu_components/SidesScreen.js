
import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View ,ScrollView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SidesPurchaseScreen } from './PurchaseScreen';
export  function SidesScreen({navigation}){
    return (
        <ScrollView style={style.main}>
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Chocolate Chip Cookie",imgloc:require('../../images/cookie.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.cookie}>Chocolate Chip Cookie                    </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.cookieimg} source={require('../../images/cookie.png')}/>
              <Text style={style.calories}>100 cal</Text>
            </Pressable>
            
            <Pressable style={style.press} onPress={() => navigation.navigate("Purchase",{name: "Bag of Chips",imgloc:require('../../images/chips2.png')})}>
                <View style={style.div}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Potatochips        </Text>
                        <Image style={style.plus} source={require('../../images/plus.png')} />
                    </Text>
                </View>
              <Image style={style.chips} source={require('../../images/chips.png')}/>
              <Text style={style.calories}>300 cal</Text>
            </Pressable>
            
            
        </ScrollView>
    )
    };
const SidesStack = createNativeStackNavigator();
export default function SidesStackScreen() {
  return (
    <SidesStack.Navigator initialRouteName='Sides' screenOptions={{headerShown:false}}>
      <SidesStack.Screen name= "Sides" component={SidesScreen} />
      <SidesStack.Screen name= "Purchase" component={SidesPurchaseScreen }  />
      
    </SidesStack.Navigator>
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
        width: 225,
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
        marginLeft: 150,
        marginTop: 0,
        height:1374*0.09,
        width:1372*0.09,
    },
    chips:{
        marginLeft: 70,
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
        
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    }
});