import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useStarredRecipes } from '../../context/StarredRecipesContext';
import styles from './styles';

export default function StarButton({ recipeId }) {
  const { isRecipeStarred, toggleStarRecipe } = useStarredRecipes();

  return (
    <TouchableOpacity 
      style={styles.starButton}
      onPress={() => toggleStarRecipe(recipeId)}
    >
      <Image
        source={
          isRecipeStarred(recipeId)
            ? require('../../../assets/icons/star-filled.png')
            : require('../../../assets/icons/star.png')
        }
        style={styles.starIcon}
      />
    </TouchableOpacity>
  );
} 