import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OtpVerification() {
    const [code, setCode] = useState('');
    const inputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const handleConfirm = () => {
        Alert.alert('Verification', `Entered Code: ${code}`);
        setCode(''); 
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleChange = (text: string) => {
        if (text.length <= 6) {
            setCode(text);
        }
        if (text.length === 6 && inputRef.current) {
            inputRef.current.blur(); 
        }
        if (text.length === 0 && inputRef.current) {
            inputRef.current.blur(); 
        }
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
            <SafeAreaView>
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    placeholder="Enter Code"
                    value={code}
                    onChangeText={handleChange}
                    keyboardType="numeric"
                />
            </SafeAreaView>
            <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                <Text style={styles.buttonText}>Confirm</Text>
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
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
    },
    inputLabel: {
        fontSize: 14,
        marginBottom: 5,
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
