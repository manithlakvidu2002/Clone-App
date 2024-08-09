import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useRouter} from "expo-router";

export default function SignUpPage() {
    const router = useRouter()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleSignUp = () => {
        Alert.alert('Sign Up', `Name: ${name}\nEmail: ${email}`);
        setName(''); 
        setEmail(''); 
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Enter signUp Info</Text>
            <Text style={styles.subLabel}>We’ve sent OTP on below given number</Text>
            <Text style={styles.mobileText}>+94 783496963</Text>

            <Text style={styles.name}>Enter the Full Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter the Full Name"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.name}>Enter the Email Address</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter the Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TouchableOpacity style={styles.button} onPress={() => {router.push("../tabs")} }>
                <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
    },
    backButton: {
        marginBottom: 40,
    },
    backButtonText: {
        fontSize: 18,
        color: '#8b9b39',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subLabel: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 8,
    },
    mobileText: {
        fontSize: 15,
        marginBottom: 50,
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    button: {
        marginTop: 120,
        width: '100%',
        height: 50,
        backgroundColor: '#8b9b39',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});
