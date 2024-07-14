import React from 'react';
import {View, Image, StyleSheet,SafeAreaView,Button,TouchableOpacity,Alert} from 'react-native';
import ProfilePic from '../myConponents/profilepic';
import {Text} from 'react-native';
import NumberInput from '../myConponents/numberInput';


export default function MobileNumber(){
    return (
        <View style={styles.container}>
            <ProfilePic/>
            <Text style={styles.baseText}>
                <Text>Enter Your</Text>{'\n'}
                <Text>Phone Number</Text>
            </Text> 

            <Text style={styles.baseText2}>
              <Text>If not signup yet, we’ll direct you</Text>{'\n'}
              <Text>to register page</Text>
            </Text>

            <Text style={styles.numberStyle}>Mobile Number</Text>
            <NumberInput/>
            <TouchableOpacity style={styles.button} onPress={() => { /* Handle Continue Press */ }}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>Or Continue with</Text>
            <View style={styles.fixToText}>
              
      </View>

        </View>
      );
}



const styles = StyleSheet.create({
    container:{
      paddingTop:0
    },
    baseText: {
      fontSize:20,
      padding:10,
      fontWeight: 'bold',
    },
    baseText2: {
      padding:10,
      color:'#8E8B8B',
    },
    numberStyle: {
      padding:10,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      marginTop:10,
      width:'100%',
      padding: 15,
      backgroundColor: '#8A9A5B',
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 10,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },
    orText: {
      textAlign:'center',
      fontSize: 14,
      color: '#888',
      marginVertical: 10,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  