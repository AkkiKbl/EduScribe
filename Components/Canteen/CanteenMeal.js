import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Canteen_menu from "./Canteen_Menu/Canteen_menu";

const CanteenMeal = () => {
  return (
    <View>
      {/* Meal List */}

      <Canteen_menu />

      {/* Snacks List */}

      {/* <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Snacks</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "space-around" }}>
            <FlatList
              numColumns={"2"}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              data={FoodItems.Snacks}
              renderItem={({ item }) => (
                <View style={styles.cards}>
                  <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                  <Text style={styles.textColor}>Rs.{item.price}</Text>
                  <Text style={styles.textColor}>{item.foodItem}</Text>
                  <View style={styles.line} />
                </View>
              )}
            />
          </View>
        </View>
      </View> */}

      {/* Drinks List */}

      {/* <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Drinks</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "space-around" }}>
            <FlatList
              numColumns={"2"}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              data={FoodItems.Drinks}
              renderItem={({ item }) => (
                <View style={styles.cards}>
                  <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                  <Text style={styles.textColor}>Rs.{item.price}</Text>
                  <Text style={styles.textColor}>{item.foodItem}</Text>
                  <View style={styles.line} />
                </View>
              )}
            />
          </View>
        </View>
      </View> */}

      {/* Extras List */}
      {/* <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Extras</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            marginTop: 20,
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "space-around" }}>
            <FlatList
              numColumns={"2"}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              data={FoodItems.Extras}
              renderItem={({ item }) => (
                <View style={styles.cards}>
                  <TouchableOpacity style={styles.menuButton}>
                    <Text style={styles.addButtonText}>Add</Text>
                  </TouchableOpacity>
                  <Text style={styles.textColor}>Rs.{item.price}</Text>
                  <Text style={styles.textColor}>{item.foodItem}</Text>
                  <View style={styles.line} />
                </View>
              )}
            />
          </View>
        </View>
      </View> */}
    </View>
  );
};

export default CanteenMeal;
