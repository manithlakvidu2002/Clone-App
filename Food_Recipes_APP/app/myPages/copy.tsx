import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Following</Text>
        <Text style={styles.headerText}>Related</Text>
      </View>

      {/* Scrollable Body */}
      <ScrollView style={styles.body}>
        {/* Post */}
        <View style={styles.postContainer}>
          <View style={styles.userInfo}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>Manith Lakvidu</Text>
              <Text style={styles.postTime}>23m ago</Text>
            </View>
          </View>
          <Text style={styles.postText}>Love at first bite. Try how Hakka Schezwan Noodle</Text>
          <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.postImage} />
        </View>

      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={require('../../assets/images/Home.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Home</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../../assets/images/add.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>Add Recipe</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={require('../../assets/images/more.png')} style={styles.footerIcon} />
          <Text style={styles.footerText}>More</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  body: {
    flex: 1,
    padding: 10,
  },
  postContainer: {
    marginBottom: 20,
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

export default App;
