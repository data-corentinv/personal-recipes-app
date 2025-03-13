import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 180;
const RECIPE_ITEM_MARGIN = 12;

// Color palette
export const Colors = {
  primary: '#FF6B6B',
  secondary: '#4ECDC4',
  background: '#F7F7F7',
  text: '#2D3436',
  textLight: '#636E72',
  white: '#FFFFFF',
  shadow: '#000000',
  border: '#E0E0E0',
  categoryBg: '#E8F3F1',
  timeIconBg: '#FFF5F5'
};

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: RECIPE_ITEM_MARGIN,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 80,
    backgroundColor: Colors.white,
    borderRadius: 16,
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.text,
    marginTop: 8,
    marginHorizontal: 8,
    lineHeight: 22,
  },
  category: {
    marginVertical: 6,
    color: Colors.textLight,
    fontSize: 14,
  }
});

// Common styles
export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.text,
    marginVertical: 16,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  searchBar: {
    backgroundColor: Colors.white,
    marginHorizontal: 16,
    marginVertical: 8,
    paddingHorizontal: 16,
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  }
});
