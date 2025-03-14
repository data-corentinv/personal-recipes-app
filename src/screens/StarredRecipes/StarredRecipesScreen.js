import React from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import { recipes } from "../../data/dataArrays";
import { getCategoryName } from "../../data/MockDataAPI";
import StarButton from "../../components/StarButton/StarButton";
import { useStarredRecipes } from "../../context/StarredRecipesContext";

export default function StarredRecipesScreen(props) {
  const { navigation } = props;
  const { starredRecipes } = useStarredRecipes();

  const starredRecipesList = recipes.filter(recipe => 
    starredRecipes.includes(recipe.recipeId)
  );

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <StarButton recipeId={item.recipeId} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.mainContainer}>
      {starredRecipesList.length === 0 ? (
        <Text style={styles.emptyText}>No starred recipes yet</Text>
      ) : (
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={starredRecipesList}
          renderItem={renderRecipes}
          keyExtractor={(item) => `${item.recipeId}`}
        />
      )}
    </View>
  );
} 