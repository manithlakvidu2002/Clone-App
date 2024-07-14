import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OtpVerification() {
    const [code, setCode] = useState('');
    const navigation = useNavigation();

    const handleConfirm = () => {
        Alert.alert('Verification', `Entered Code: ${code}`);
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Verification</Text>
            <Text style={styles.subLabel}>Enter verification code sent on</Text>
            <Text style={styles.mobileText}>+94 783496963</Text>

            <Text style={styles.inputLabel}>Enter Code</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Code"
                value={code}
                onChangeText={setCode}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    backButtonText: {
        fontSize: 18,
        color: '#8b9b39',
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    subLabel: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginBottom: 5,
    },
    mobileText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
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
