import * as React from 'react';
import { Pressable, Image, Text, View, StyleSheet} from 'react-native';




export default function PurchaseScreen({route, navigation}){
    const {imgloc,name} = route.params;
    return (
        <View style={style.main}>
            <View style={style.title}>
                <Pressable onPress={() => navigation.navigate("Sub")}>
                    <Image style={style.back} source={require('../../images/back2.png')}/>
                </Pressable>
                <Text style={style.titleText}> {name} Sub</Text>
            </View>
            <View style={style.content}>
                <Image style={style.image}source={imgloc}/>
                <Text style={style.desc}>A delicious {name} sub with all the toppings!</Text>
                <View style={style.twelve}>
                    <Text style={style.size}>12 Inch Sub $9.99</Text>
                    <Text style={style.cart}>Add To Cart</Text>
                </View>
                <View style={style.twelve}>
                    <Text style={style.size}>6 Inch Sub $5.99  </Text>
                    <Text style={style.cart}>Add To Cart</Text>
                </View>
            </View>
        </View>
    )
}

export function SaladPurchaseScreen({route, navigation}){
    const {imgloc,name} = route.params;
    return (
        <View style={style.main}>
            <View style={style.title}>
                <Pressable onPress={() => navigation.navigate("Salads")}>
                    <Image style={style.back} source={require('../../images/back2.png')}/>
                </Pressable>
                <Text style={style.titleText}> {name} Sub</Text>
            </View>
            <View style={style.content}>
                <Image style={style.image}source={imgloc}/>
                <Text style={style.desc}>A healthy {name} !</Text>
                <View style={style.twelve}>
                    <Text style={style.size}>{name}</Text>
                    <Text style={style.cart}>Add To Cart</Text>
                </View>
            </View>
        </View>
    )
}

export function SidesPurchaseScreen({route, navigation}){
    const {imgloc,name} = route.params;
    return (
        <View style={style.main}>
            <View style={style.title}>
                <Pressable onPress={() => navigation.navigate("Sides")}>
                    <Image style={style.back} source={require('../../images/back2.png')}/>
                </Pressable>
                <Text style={style.titleText}> {name} </Text>
            </View>
            <View style={style.content}>
                <Image style={style.sideimg}source={imgloc}/>
                <Text style={style.desc}>A yummy {name}!</Text>
                <View style={style.twelve}>
                <Text style={style.sidesize}>{name}</Text>                   
                <Text style={style.cart}>Add To Cart</Text>
                </View>
            </View>
        </View>
    )
}

export function DrinksPurchaseScreen({route, navigation}){
    const {imgloc,name} = route.params;
    return (
        <View style={style.main}>
            <View style={style.title}>
                <Pressable onPress={() => navigation.navigate("Drink")}>
                    <Image style={style.back} source={require('../../images/back2.png')}/>
                </Pressable>
                <Text style={style.titleText}> {name} Can</Text>
            </View>
            <View style={style.content}>
                <View style= {{flexDirection:'row'}}>
                    <Text style={style.drinkdesc}>A refreshing can of {name} !</Text>
                    <Image style={style.drinkimage}source={imgloc}/>
                </View>
                <View style={style.twelve}>
                    <Text style={style.size}>{name} $0.99</Text>
                    <Text style={style.cart}>Add To Cart</Text>
            </View>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    main:{
        flex: 1, 
        backgroundColor: '#C22130'
    },
    title:{
        flexDirection:'row', 
        textAlign: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        
    },
    titleText:{
        fontSize:30,
        color: 'white',
        marginLeft: 25,
        
    },
    back:{
        height: 791*0.04,
        width: 980*0.04,
        
    },
    image:{
        position:'absolute',
        alignSelf:'center',
        top:-70,
        height: 115*1.20,
        width: 200*1.20,
    },
    drinkimage:{
        position:'absolute',
        alignSelf:'center',
        top:-70,
        left: 270,
        height: 727*0.22,
        width: 376*0.22,
        
    },
    content:{
        width:300,
        height:330,
        backgroundColor:'white',
        marginTop: 150,
        borderRadius: 15,
        
    },
    desc:{
        textAlign:'left',
        marginTop: 80,
        marginLeft: 5,
        fontSize: 20,
    },
    drinkdesc:{
        textAlign:'right',
        marginTop: 50,
        marginLeft: 5,
        fontSize: 20,
    },
    twelve:{
        flexDirection:'row',
        marginTop: 30,
    },
    size:{
        fontSize:25,
        color:'#C22130',
    },
    cart:{
        borderRadius:5,
        borderWidth: 4,
        borderColor: '#C22130',
        padding: 4,
        marginLeft: 5,
    },
    sidesize:{
        fontSize:20,
        color:'#C22130',
    },
    sideimg:{
        position:'absolute',
        alignSelf:'center',
        top:-70,
        height: 200*0.7,
        width: 200*0.7,
    },
});