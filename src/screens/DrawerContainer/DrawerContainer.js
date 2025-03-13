import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import MenuButton from "../../components/MenuButton/MenuButton";

export default function DrawerContainer(props) {
  const { navigation } = props;
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <MenuButton
          title="Page Principale"
          source={require("../../../assets/icons/home.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Home" });
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Catégories"
          source={require("../../../assets/icons/category.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Catégories" });
            navigation.closeDrawer();
          }}
        />
        <MenuButton
          title="Rechercher"
          source={require("../../../assets/icons/search.png")}
          onPress={() => {
            navigation.navigate("Main", { screen: "Rechercher" });
            navigation.closeDrawer();
          }}
        />
      </View>
    </View>
  );
}

DrawerContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }),
};