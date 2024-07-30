// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomePage from '../myPages/homePage';
// import { Image, Text } from 'react-native';

// // Placeholder components for other tabs
// function CategoryPage() {
//   return (
//     <View>
//       <Text>Category Page</Text>
//     </View>
//   );
// }

// function AddRecipePage() {
//   return (
//     <View>
//       <Text>Add Recipe Page</Text>
//     </View>
//   );
// }

// function MorePage() {
//   return (
//     <View>
//       <Text>More Page</Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen 
//           name="Home" 
//           component={HomePage} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image source={require('../../assets/images/Home.png')} style={{ width: size, height: size, tintColor: color }} />
//             ),
//             tabBarLabel: ({ color }) => (
//               <Text style={{ color }}>Home</Text>
//             ),
//           }} 
//         />
//         <Tab.Screen 
//           name="Category" 
//           component={CategoryPage} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image source={require('../../assets/images/add.png')} style={{ width: size, height: size, tintColor: color }} />
//             ),
//             tabBarLabel: ({ color }) => (
//               <Text style={{ color }}>Category</Text>
//             ),
//           }} 
//         />
//         <Tab.Screen 
//           name="Add Recipe" 
//           component={AddRecipePage} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image source={require('../../assets/images/add.png')} style={{ width: size, height: size, tintColor: color }} />
//             ),
//             tabBarLabel: ({ color }) => (
//               <Text style={{ color }}>Add Recipe</Text>
//             ),
//           }} 
//         />
//         <Tab.Screen 
//           name="More" 
//           component={MorePage} 
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Image source={require('../../assets/images/more.png')} style={{ width: size, height: size, tintColor: color }} />
//             ),
//             tabBarLabel: ({ color }) => (
//               <Text style={{ color }}>More</Text>
//             ),
//           }} 
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
