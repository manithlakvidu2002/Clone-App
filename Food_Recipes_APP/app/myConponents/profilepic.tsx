import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

export default function ProfilePic(){
    return (
        <View>
        <Image
          style={styles.stretch}
          source={require('../../assets/images/profile.png')}
        />
      </View>
      );

}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    stretch: {
      width: width,
      height: 230,
    }
    

});