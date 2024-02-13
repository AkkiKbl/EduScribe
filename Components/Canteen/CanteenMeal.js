import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Canteen_menu from "./Canteen_Menu/Canteen_menu";

const CanteenMeal = () => {
  return (
    <View>
      <Canteen_menu />
    </View>
  );
};

export default CanteenMeal;
