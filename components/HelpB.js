import * as React from 'react';
import { StyleSheet, TextInput,Text, View, Image ,Pressable,ScrollView,SafeAreaView} from 'react-native';
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
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const countries = ["Eggs", "Cow's Milk", "Tree Nuts", "Peanuts", "Shellfish","Wheat",
    "Soy","c","d"];


export default function HelpB({navigation}){
    return (
        <View style={{  flex :1, alignItems: 'center', justifyContent: 'top',backgroundColor: 'white'}}>

            <StatusBar style="auto" />
            <Pressable style = {style.button}>
                <Text style = {style.buttonText}>Do you have food allergy</Text>
            </Pressable>
            {/*<ScrollView style = {style.scrollViewContainer} ScrollEnabled={true}>*/}

            <Dropdown/>
            {/*</ScrollView>*/}
            <Pressable style = {style.buttonNo} onPress={() => navigation.navigate("HelpC")}>
                <Text style = {style.buttonText}>Continue</Text>
            </Pressable>
            <Pressable style = {style.buttonBack} onPress={() => navigation.navigate("Help")}>
                <Image source={require('../images/back.png')} style = {style.buttonBack} resizeMode="contain" />
            </Pressable>
            <Text style ={{color:"#C02A2A",
                fontSize:28, position : 'absolute',
                right : 30,
                bottom: 53}}>2/4</Text>


            </View>
    );
}

// the dropdown list
function Dropdown(){
    return (<SelectDropdown
        data={countries}
        // defaultValueByIndex={1}
        // defaultValue={'Egypt'}
        onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
        }}
        defaultButtonText={'None'}
        buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
            return item;
        }}
        buttonStyle={style.dropdown1BtnStyle}
        buttonTextStyle={style.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={style.dropdown1DropdownStyle}
        rowStyle={style.dropdown1RowStyle}
        rowTextStyle={style.dropdown1RowTxtStyle}
    />);
}
// function  DropdownA()
// {
//     render()
//     {
//         let data = [{
//             value: 'Banana',
//         },
//             {
//                 value: 'Apple',
//             }]
//         return (
//             <Dropdown label='None' data={data}/>);
//     }
// }

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
        fontSize:27,
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
    },
    dropdown1BtnStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#444',
        position : "relative",

        marginTop: 50,
        marginBottom: 10,
    },
    dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
    dropdown1DropdownStyle: {backgroundColor: '#EFEFEF'},
    dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
    dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},

    scrollViewContainer: {

        paddingVertical: '10%',
        paddingBottom: '10%',
        marginHorizontal: 20,

    },


});