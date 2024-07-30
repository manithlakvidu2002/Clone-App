import React from 'react';
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image,TouchableOpacity } from 'react-native';
import {useRouter} from "expo-router";

export default function HomePage() {

  const router = useRouter()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Following</Text>
        <Text style={styles.headerText}>Related</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.scrollContentView}>
            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>
            
            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>

            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>

            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>


            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>


            <View style={styles.postContainer}>
              <View style={styles.userInfo}>
                <Image source={require('../../assets/images/profilePNG.png')} style={styles.userImage} />
                <View>
                  <Text style={styles.userName}>Manith Lakvidu</Text>
                  <Text style={styles.postTime}>23m ago</Text>
                </View>
              </View>
              <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
              <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.postImage} />
            </View>
        </View>
      </ScrollView>



    

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/homePage") }}>
          <Image source={require('../../assets/images/Home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/explorePage") }}>
          <Image source={require('../../assets/images/add.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Category</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/addRecipePage") }}>
          <Image source={require('../../assets/images/add.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Add Recipe</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/morePage") }}>
          <Image source={require('../../assets/images/more.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>More</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  container:{
    width: "auto",
    height:"100%",
    
  },
  scrollContent:{
    width: "auto",
  },
  scrollContentView:{
    width: 'auto',
  },
  postContainer: {
    marginBottom: 20,
    padding:10
  },
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
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 14,
    color: '#666',
  },
  postText: {
    fontSize: 16,
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerText: {
    fontSize: 12,
    marginTop: 4,
  },
});

