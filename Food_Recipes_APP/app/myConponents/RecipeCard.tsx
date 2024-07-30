import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface RecipeCardProps {
  imageSource: ImageSourcePropType;
  title: string;
  author: string;
  details: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ imageSource, title, author, details }) => {
  return (
    <View style={styles.recipeItem}>
      <Image source={imageSource} style={styles.recipeImage} />
      <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={styles.gradient} />
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeTitle}>{title}</Text>
        <Text style={styles.recipeAuthor}>{author}</Text>
        <Text style={styles.recipeDetails}>{details}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeItem: {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    width: '100%',
    height: 150,
    position: 'relative',
  },
  recipeImage: {
    width: '60%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  recipeInfo: {
    padding: 10,
    justifyContent: 'center',
    width: '40%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 2,
  },
  recipeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recipeAuthor: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  recipeDetails: {
    color: '#fff',
    fontSize: 12,
  },
});

export default RecipeCard;
