import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FoodItems from "../../resources/CanteenMenu";

const CanteenMeal = () => {
  return (
    <View>
      {/* Meal List */}
      <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Meal</Text>
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
              data={FoodItems.Meal}
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
      </View>

      {/* Snacks List */}

      <View>
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
      </View>

      {/* Drinks List */}

      <View>
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
      </View>

      {/* Extras List */}
      <View>
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
      </View>
    </View>
  );
};

export default CanteenMeal;

const styles = StyleSheet.create({
  line: {
    backgroundColor: "black",
    width: 120,
    height: 2,
    borderRadius: 30,
  },
  TextColor: {
    color: "white",
    fontSize: 25,
  },
  titleText: {
    marginTop: 20,
    marginLeft: 20,
  },
  cards: {
    backgroundColor: "black",
    width: 180,
    height: 260,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: "column-reverse",
    alignItems: "center",
    marginTop: 20,
  },
  textColor: {
    color: "white",
    fontSize: 16,
  },
  addButtonText: {
    color: "black",
    fontWeight: "600",
  },
  menuButton: {
    backgroundColor: "white",
    width: "70%",
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  line: {
    backgroundColor: "white",
    width: "80%",
    height: 1,
    marginBottom: 5,
  },
});
