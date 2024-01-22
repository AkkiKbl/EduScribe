import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import FoodItems from "../../../resources/CanteenMenu";

const Canteen_menu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    FoodItems.Meal.forEach((item) => {
      data.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
      });
    });
  }, []);

  //decrement the quantity
  function decreQuantity(id) {
    data.forEach((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          item.isSelected = false;
        }
        item.quantity--;
      }
    });

    //Re-Render List
    setData((prevState) => {
      return [...prevState];
    });
  }

  // increment quantity

  function increQuantity(id) {
    data.forEach((item) => {
      if (item.id === id) {
        item.quantity++;
      }
    });

    //Re-Render List
    setData((prevState) => {
      return [...prevState];
    });
  }

  //add quantity
  function onClickAdd(id) {
    data.forEach((item) => {
      if (item.id === id) {
        item.isSelected = true;
        item.quantity = 1;
      }
    });

    //Re-Render List
    setData((prevState) => {
      return [...prevState];
    });
  }

  function RenderFlatlist() {
    return (
      <FlatList
        numColumns={"2"}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        data={data}
        extraData={data}
        renderItem={({ item }) => (
          <View style={styles.cards}>
            <View>
              {item.isSelected ? (
                <TouchableOpacity style={styles.menuButton}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Text
                      style={{ fontSize: 18 }}
                      onPress={() => decreQuantity(item.id)}
                    >
                      -
                    </Text>
                    <Text
                      style={{ marginLeft: 16, marginRight: 16, fontSize: 18 }}
                    >
                      {item.quantity}
                    </Text>
                    <Text
                      style={{ fontSize: 18 }}
                      onPress={() => increQuantity(item.id)}
                    >
                      +
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.menuButton}
                  onPress={() => onClickAdd(item.id)}
                >
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.textColor}>Rs.{item.price}</Text>
            <Text style={styles.textColor}>{item.foodItem}</Text>
            <View style={styles.line} />
          </View>
        )}
      />
    );
  }

  return (
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
        <RenderFlatlist />
        <View style={{ justifyContent: "space-around" }}></View>
      </View>
    </View>
  );
};

export default Canteen_menu;

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
    width: 120,
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
