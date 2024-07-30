// import React from 'react';
// import { SafeAreaView, View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { useRouter } from "expo-router";

// export default function ExplorePage() {
//   const router = useRouter();

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Following</Text>
//         <Text style={styles.headerText}>Related</Text>
//       </View>

//       <ScrollView>
//         <View style={styles.categoriesContainer}>
//           <Text style={styles.sectionTitle}>Categories</Text>
//           <TouchableOpacity onPress={() => { /* Navigate to categories page */ }}>
//             <Text style={styles.viewAll}>View all</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//           <View style={styles.categoryItem}>
//             <Text style={styles.categoryText}>Breakfast</Text>
//             <Text style={styles.categoryRecipes}>289 Recipes</Text>
//           </View>
//           <View style={styles.categoryItem}>
//             <Text style={styles.categoryText}>Appetizers</Text>
//             <Text style={styles.categoryRecipes}>289 Recipes</Text>
//           </View>
//           <View style={styles.categoryItem}>
//             <Text style={styles.categoryText}>Pizza</Text>
//             <Text style={styles.categoryRecipes}>289 Recipes</Text>
//           </View>
//           {/* Add more categories as needed */}
//         </ScrollView>

//         <View style={styles.categoriesContainer}>
//           <Text style={styles.sectionTitle}>Popular Cooks</Text>
//         </View>
//         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
//           <Image source={require('../../assets/images/profilePNG.png')} style={styles.cookImage} />
//           <Image source={require('../../assets/images/profilePNG.png')} style={styles.cookImage} />
//           <Image source={require('../../assets/images/profilePNG.png')} style={styles.cookImage} />
//           {/* Add more cooks as needed */}
//         </ScrollView>

//         <Text style={styles.sectionTitle}>Popular Recipes</Text>
//         <View style={styles.recipeList}>
//           <View style={styles.recipeItem}>
//             <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.recipeImage} />
//             <View style={styles.recipeInfo}>
//               <Text style={styles.recipeTitle}>Veg Noodles Recipes</Text>
//               <Text style={styles.recipeAuthor}>by Bethmi Jayamila</Text>
//               <Text style={styles.recipeDetails}>Chinese Food • 25 mins</Text>
//             </View>
//           </View>
//           <View style={styles.recipeItem}>
//             <Image source={require('../../assets/images/recepiePhoto1.png')} style={styles.recipeImage} />
//             <View style={styles.recipeInfo}>
//               <Text style={styles.recipeTitle}>Veg Noodles Recipes</Text>
//               <Text style={styles.recipeAuthor}>by Bethmi Jayamila</Text>
//               <Text style={styles.recipeDetails}>Chinese Food • 25 mins</Text>
//             </View>
//           </View>
//           {/* Add more recipes as needed */}
//         </View>
//       </ScrollView>

//       <View style={styles.footer}>
//         <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/homePage") }}>
//           <Image source={require('../../assets/images/Home.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Home</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/explorePage") }}>
//           <Image source={require('../../assets/images/add.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Category</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/addRecipePage") }}>
//           <Image source={require('../../assets/images/add.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>Add Recipe</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.footerItem} onPress={() => { router.push("myPages/morePage") }}>
//           <Image source={require('../../assets/images/more.png')} style={styles.footerIcon} />
//           <Text style={styles.footerText}>More</Text>
//         </TouchableOpacity>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   headerText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   container: {
//     flex: 1,
//   },
//   categoriesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   viewAll: {
//     fontSize: 14,
//     color: '#007BFF',
//   },
//   horizontalScroll: {
//     paddingLeft: 10,
//   },
//   categoryItem: {
//     backgroundColor: '#FFDDC1',
//     padding: 20,
//     borderRadius: 10,
//     marginRight: 10,
//     alignItems: 'center',
//   },
//   categoryText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   categoryRecipes: {
//     fontSize: 14,
//     color: '#666',
//   },
//   cookImage: {
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//     marginRight: 10,
//   },
//   recipeList: {
//     padding: 10,
//   },
//   recipeItem: {
//     flexDirection: 'row',
//     marginBottom: 10,
//   },
//   recipeImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//     marginRight: 10,
//   },
//   recipeInfo: {
//     justifyContent: 'center',
//   },
//   recipeTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   recipeAuthor: {
//     fontSize: 14,
//     color: '#666',
//   },
//   recipeDetails: {
//     fontSize: 12,
//     color: '#999',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//     backgroundColor: '#f8f8f8',
//     borderTopWidth: 1,
//     borderTopColor: '#ccc',
//     width: '100%',
//   },
//   footerItem: {
//     alignItems: 'center',
//   },
//   footerIcon: {
//     width: 24,
//     height: 24,
//   },
//   footerText: {
//     fontSize: 12,
//     marginTop: 4,
//   },
// });
