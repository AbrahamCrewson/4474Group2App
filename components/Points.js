
import * as React from 'react';
import { Button, Text, View,StyleSheet,Image,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default function Points() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.imageStack}>
                <Image
                    source={require("../images/points.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                <Image
                    source={require("../images/firstReward.png")}
                    resizeMode="contain"
                    style={styles.image4}
                ></Image>
            </View>
            <View style={styles.image3Stack}>
                <Image
                    source={require("../images/secondReward.png")}
                    resizeMode="contain"
                    style={styles.image3}
                ></Image>
                <Image
                    source={require("../images/thirdReward.png")}
                    resizeMode="contain"
                    style={styles.image5}
                ></Image>
            </View>
            </ScrollView>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E4E4E4",
    },
    image: {
        position: "absolute",
        top: -70,
        left: 60,
        height: 200,
        width: 190,
    },
    image4: {
        position: "absolute",
        top: '25%',
        left: 16,
        height: 200,
        width: 286
    },
    imageStack: {
        width: 286,
        height: 365,
        marginTop: 73,
        marginLeft: 44,
       backgroundColor: "#E4E4E4",
    },
    image3: {
        position: "absolute",
        top: '-10%',
        left: 14.5,
        height: 147,
        width: 323
    },
    image5: {
        position: "absolute",
        top: 143,
        left: 31,
        height: 200,
        width: 294
    },
    image3Stack: {
        width: 323,
        height: 335,
        marginLeft: 26,
        backgroundColor:"#E4E4E4",
    }
});