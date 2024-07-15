import React, { useRef, useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput } from 'react-native';

export default function NumberInput() {
  const [number, setNumber] = useState('');
  const inputRef = useRef<TextInput>(null); // Use explicit type for useRef

  const handleChange = (text: string) => {
    if (text.length <= 10) {
      setNumber(text); // Use setNumber to update state
    }
    if (text.length === 10 && inputRef.current) {
      inputRef.current.blur(); // Auto close the text field when empty
    }
    if (text.length === 0 && inputRef.current) {
        inputRef.current.blur(); // Auto close the text field when empty
    }
  };

  return (
    <View>
      <SafeAreaView>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={handleChange}
          value={number}
          placeholder="Enter Your Mobile Number"
          keyboardType="phone-pad"
          maxLength={10} // Ensures no more than 10 digits are entered
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingBottom:10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
