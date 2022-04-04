import * as React from 'react';
import { Button, Text, View,StyleSheet,Image ,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Points from "./Points"

export default function Rewards(){
    return(<RewardsStackScreen/>);
}



export  function RewardsA(){
    return (
        <ScrollView style={styles.main}>
                <Image source={require("../images/selfTitle.png")} resizeMode="contain" style={styles.image}/>
                <Image
                    source={require("../images/title1.png")} resizeMode="contain" style={styles.image2}/>
                <Image
                    source={require("../images/progressBar.png")}
                    resizeMode="contain"
                    style={styles.image3}
                ></Image>

            <Image
                source={require("../images/title2.png")}
                resizeMode="contain"
                style={styles.image4}
            ></Image>
        </ScrollView>
    )
}

const RewardsStack = createMaterialTopTabNavigator();

function RewardsStackScreen() {
    return (
        <RewardsStack.Navigator>
            <RewardsStack.Screen name="My points" component={RewardsA} />
            <RewardsStack.Screen name="Reward" component={Points} />
        </RewardsStack.Navigator>
    );
}

const styles = StyleSheet.create({
    main:{
        flex: 1,  backgroundColor:"#E4E4E4"
    },
    container: {
        flex: 1
    },
    image: {
        position: "absolute",
        top: 0,
        left: 97,
        height: 200,
        width: 238
    },
    image2: {
        position: "absolute",
        top: 176,
        left: 120,
        height: 214,
        width: "50%"
    },
    image3: {
        position: "absolute",
        top: 165,
        left: 0,
        height: 452,
        width: 90
    },
    imageStack: {
        top: 0,
        left: 0,
        width: 316,
        height: 617,
        position: "absolute"
    },
    image4: {
        marginTop: -11,
        position: "absolute",
        top: 408,
        left: 120,
        height: 224,
        width: "52%"
    },
    imageStackStack: {
        width: 316,
        height: 617,
        marginTop: 137,
        marginLeft: 6
    }
});