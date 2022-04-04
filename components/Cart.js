import * as React from 'react';
import { StyleSheet, Pressable, Image, Text, View ,ScrollView, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function CartScreen({navigation}){
    return(
        <ScrollView style={style.main}>
            <View style={style.title1}>
                <Pressable onPress={() => navigation.navigate("Home")}>
                    <Image style={style.back} source={require('../images/back3.png')}/>
                </Pressable>
                <Text style={style.titleText}> Cart</Text>
                
            </View>
            <View style = {style.item}>
                <View style={style.press}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Ham & Veggie </Text>
                    </Text>
                    <Image style={style.sub3} source={require('../images/sub3.png')}/>
                </View>
                <Text style={style.price}> $9.99</Text>
                <Text style={style.quantity}> 1</Text>
            </View>
            <View style = {style.item}>
                <View style={style.press}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Turkey & Veggie </Text>
                    </Text>
                    <Image style={style.sub3} source={require('../images/sub4.png')}/>
                </View>
                <Text style={style.price}> $9.99</Text>
                <Text style={style.quantity}> 1</Text>
            </View>
            <View style = {style.item}>
                <View style={style.press}>
                    <Text style={style.title}> 
                        <Text style={style.name}>Chicken & Veggie </Text>
                    </Text>
                    <Image style={style.sub3} source={require('../images/sub5.png')}/>
                    
                </View>
                <Text style={style.price}> $9.99</Text>
                <Text style={style.quantity}> 1</Text>
            </View>
            <View style = {style.total}>
                <Text style = {style.totaltext}> Total: $33.87 </Text>
            </View>
            <Pressable style={style.continue} onPress={() => navigation.navigate("Checkout")}>
            <Text style={style.continuetext} >Continue </Text>
            </Pressable>
        </ScrollView>
    )
}
function CheckoutScreen({navigation}){
    return(
        <ScrollView style={style.main}>
            <View style={style.title1}>
                <Pressable onPress={() => navigation.navigate("Cart1")}>
                    <Image style={style.back} source={require('../images/back3.png')}/>
                </Pressable>
                <Text style={style.titleText}> Checkout</Text> 
            </View>
            <Text style={style.checkouttext}>Email</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>First Name</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Last Name</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Street Address</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Apt</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>City</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Postal Code</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Telephone</Text>
            <TextInput style={style.input}></TextInput>
            <Pressable style={style.continue} onPress={() => navigation.navigate("Payment")}>
            <Text style={style.continuetext} >Continue </Text>
            </Pressable>
        </ScrollView>
    )
}
function PaymentScreen({navigation}){
    return(
        <ScrollView style={style.main}>
            <View style={style.title1}>
                <Pressable onPress={() => navigation.navigate("Checkout")}>
                    <Image style={style.back} source={require('../images/back3.png')}/>
                </Pressable>
                <Text style={style.titleText}> Payment</Text> 
            </View>
            <Text style={style.checkouttext}>Card Number</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Expiration</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.checkouttext}>Security Code</Text>
            <TextInput style={style.input}></TextInput>
            <Text style={style.continuetext} >Place Order</Text>
            <View style = {style.total}>
                <Text style = {style.totaltext}> Total: $33.87 </Text>
            </View>
            <Pressable style={style.continue} onPress={() => navigation.navigate("Home")}>
            <Text style={style.continuetext} >Place Order</Text>
            </Pressable>
        </ScrollView>
    )
}
const CartStack = createNativeStackNavigator();
export default function CartStackScreen() {
    return (
      <CartStack.Navigator initialRouteName='Cart1' screenOptions={{headerShown:false}}>
        <CartStack.Screen name= "Cart1" component={CartScreen} />
        <CartStack.Screen name= "Checkout" component={CheckoutScreen}  />
        <CartStack.Screen name= "Payment" component={PaymentScreen }  />
      </CartStack.Navigator>
    );
  }
  const style = StyleSheet.create({
    main:{
        flex: 1, 
        
        backgroundColor: 'white'
    },
    sub3:{
        marginLeft: 10,
        marginTop: 10,
        height: 115*1.0,
        width: 200*1.0,
    },
    press:{
        borderRadius: 10,
        borderColor: '#C22130',
        backgroundColor: '#C22130',
        height: 200,
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
    },
    title1:{
        flexDirection:'row', 
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: 50,
        
    },
    titleText:{
        fontSize:30,
        color: 'black',
        marginLeft: 25,
        
    },
    back:{
        height: 791*0.04,
        width: 980*0.04,
        
    },
    item:{
        flexDirection:'row', 
        textAlign: 'center',
    },
    price:{
        marginTop: 100,
        fontSize: 30,
    },
    quantity:{
        marginTop: 90,
        marginBottom: 120,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 30,
        borderRadius: 4,
        borderWidth: 5,
        borderColor: 'black',
    },
    total:{
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor:'grey',
        marginTop:40,
        marginBottom: 60,
    },
    totaltext:{
        marginTop: 40,
        fontSize: 30,
        
    },
    continue:{
        marginTop: 20,
        marginBottom: 60,
        marginHorizontal: 60,
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#C22130',
    },
    continuetext:{
        fontSize: 30,
        color:'white',
    },
    checkouttext:{
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 30,
    },
    input:{
        fontSize: 30,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        marginHorizontal: 30,
    },
});