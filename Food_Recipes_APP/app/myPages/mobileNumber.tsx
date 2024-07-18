import React from 'react';
import { View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native';
import ProfilePic from '../myConponents/profilepic';
import NumberInput from '../myConponents/numberInput';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRouter} from "expo-router";
export default function MobileNumber() {

  const router = useRouter()
  return (
    <View style={styles.container}>
      <ProfilePic />

      <View style={styles.container2}>
      <Text style={styles.baseText}>
        <Text>Enter Your</Text>{'\n'}
        <Text>Phone Number</Text>
      </Text>

      <Text style={styles.baseText2}>
        <Text>If not signed up yet, we’ll direct you</Text>{'\n'}
        <Text>to the register page</Text>
      </Text>

      <Text style={styles.numberStyle}>Mobile Number</Text>
      <NumberInput />
      <TouchableOpacity style={styles.button} onPress={() => {router.push("myPages/verificationPage")}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or Continue with</Text>
      <View style={styles.fixToText}>
        <TouchableOpacity style={[styles.socialButton, styles.googleButton]} onPress={() => { /* Handle Google Login */ }}>
          <Icon name="google" size={20} color="#FFF" />
          <Text style={styles.socialButtonText}> Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, styles.facebookButton]} onPress={() => { /* Handle Facebook Login */ }}>
          <Icon name="facebook" size={20} color="#FFF" />
          <Text style={styles.socialButtonText}> Facebook</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingLeft:4,
    // paddingRight:4
    padding:2
  },
  container2:{
    padding:5
  },
  baseText: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: 'bold',
  },
  baseText2: {
    paddingTop: 10,
    color: '#8E8B8B',
  },
  numberStyle: {
    paddingTop: 10,
  },
  button: {
    marginTop: 20,
    width: '100%',
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
    textAlign: 'center',
    fontSize: 14,
    color: '#888',
    marginVertical: 10,
    paddingBottom:40
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    width: '48%',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  socialButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 10,
  },
});
