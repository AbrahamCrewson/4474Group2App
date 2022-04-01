import * as React from 'react';
import { StyleSheet, TextInput,Text, View, Image ,Pressable} from 'react-native';
export default function SignIn({navigation}){
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#C22130' }}>
            <TextInput 
            style={style.TextInput}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}/> 
            <TextInput 
            style={style.TextInput}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}/> 
            <Pressable style = {style.button} onPress={() => navigation.navigate("SignedIn")}>
              <Text style = {style.itemText}>Log In</Text>
            </Pressable>
        </View>
    )
}

const style = StyleSheet.create({
    TextInput: {
        color: 'black',
        width: '90%',
        backgroundColor: 'white',
        borderWidth:2,
        padding:10,
        margin: 12,
      },
      button:{
        borderWidth:3,
        borderRadius:150,
        backgroundColor:'white',
        borderColor: 'black',

      },
      itemText:{
          color:'black',
          fontSize:30,
          padding: 10,
      }
  
  });