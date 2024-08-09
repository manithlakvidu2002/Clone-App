import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');


const isSmallScreen = width < 375;
const isLargeScreen = height > 667;

export default function HomePage() {

  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, isSmallScreen && styles.smallHeader, isLargeScreen && styles.largeScreenHeader]}>
        <Text style={[styles.headerText, isSmallScreen && styles.smallHeaderText]}>Following</Text>
        <Text style={[styles.headerText, isSmallScreen && styles.smallHeaderText]}>Related</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.scrollContentView}>
          {[...Array(10)].map((_, index) => (
            <View 
              style={[
                styles.postContainer, 
                isSmallScreen && styles.smallPostContainer, 
              ]} 
              key={index}
            >
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={[styles.userImage, isSmallScreen && styles.smallUserImage]} />
                <View>
                  <Text style={[styles.userName, isSmallScreen && styles.smallUserName]}>Manith Lakvidu</Text>
                  <Text style={[styles.postTime, isSmallScreen && styles.smallPostTime]}>23m ago</Text>
                </View>
              </View>
              <Text style={[styles.postText, isSmallScreen && styles.smallPostText]}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={[styles.postImage, isSmallScreen && styles.smallPostImage]} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  smallHeader: {
    paddingVertical: 5,
  },
  largeScreenHeader: {
    marginTop: 40, 
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  smallHeaderText: {
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 10,
  },
  scrollContentView: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  postContainer: {
    width: width * 0.9, 
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  smallPostContainer: {
    width: width * 0.9, 
    padding: 8,
  },
  // largeScreenPostContainer: {
  //   marginTop: 40, 
  // },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  smallUserImage: {
    width: 40,
    height: 40,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallUserName: {
    fontSize: 14,
  },
  postTime: {
    fontSize: 14,
    color: '#666',
  },
  smallPostTime: {
    fontSize: 12,
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  smallPostText: {
    fontSize: 14,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  smallPostImage: {
    height: 150,
  },
});
