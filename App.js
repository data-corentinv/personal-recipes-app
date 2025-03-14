import React from 'react';
import AppContainer from './src/navigations/AppNavigation';
import { StarredRecipesProvider } from './src/context/StarredRecipesContext';

export default function App() {
  return (
    <StarredRecipesProvider>
      <AppContainer />
    </StarredRecipesProvider>
  );
}
