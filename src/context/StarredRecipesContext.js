import React, { createContext, useState, useContext } from 'react';

const StarredRecipesContext = createContext();

export function StarredRecipesProvider({ children }) {
  const [starredRecipes, setStarredRecipes] = useState([]);

  const toggleStarRecipe = (recipeId) => {
    setStarredRecipes(prev => {
      if (prev.includes(recipeId)) {
        return prev.filter(id => id !== recipeId);
      } else {
        return [...prev, recipeId];
      }
    });
  };

  const isRecipeStarred = (recipeId) => {
    return starredRecipes.includes(recipeId);
  };

  return (
    <StarredRecipesContext.Provider value={{ starredRecipes, toggleStarRecipe, isRecipeStarred }}>
      {children}
    </StarredRecipesContext.Provider>
  );
}

export function useStarredRecipes() {
  return useContext(StarredRecipesContext);
} 