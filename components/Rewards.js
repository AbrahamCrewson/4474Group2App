import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function Rewards(){
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Rewards screen</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
        </View>
    )
}
const RewardsStack = createNativeStackNavigator();

function RewardsStackScreen() {
  return (
    <RewardsStack.Navigator>
      <RewardsStack.Screen name="Menu" component={MenuScreen} />
      <RewardsStack.Screen name="Details" component={DetailsScreen} />
    </RewardsStack.Navigator>
  );
}