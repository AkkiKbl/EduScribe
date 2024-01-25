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
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  //Store fetched Data
  useEffect(() => {
    //Meal
    FoodItems.Meal.forEach((item) => {
      data1.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
      });
    });

    //Snacks
    FoodItems.Snacks.forEach((item) => {
      data2.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
      });
    });

    //Drinks

    FoodItems.Drinks.forEach((item) => {
      data3.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
      });
    });

    //Extras

    FoodItems.Extras.forEach((item) => {
      data4.push({
        id: item.id,
        foodItem: item.foodItem,
        price: item.price,
        quantity: 0,
        isSelected: false,
        nonVeg: item.nonVeg,
        tag: item.tag,
      });
    });
  }, []);

  //Re-Render List Function
  function reRender(tag) {
    if (tag === "Meal") {
      setData1((prevState) => {
        return [...prevState];
      });
    } else if (tag === "Snacks") {
      setData2((prevState) => {
        return [...prevState];
      });
    } else if (tag === "Drinks") {
      setData3((prevState) => {
        return [...prevState];
      });
    } else {
      setData4((prevState) => {
        return [...prevState];
      });
    }
  }

  //decrement quantity
  function decreQuantity(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
      //Re-Render List
      reRender(tag);
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
      //Re-Render List
      reRender(tag);
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
      //Re-Render List
      reRender(tag);
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          if (item.quantity === 1) {
            item.isSelected = false;
          }
          item.quantity--;
        }
      });
      //Re-Render List
      reRender(tag);
    }
  }

  // increment quantity

  function increQuantity(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
          console.log(item.quantity);
        }
      });
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          item.quantity++;
        }
      });
    }
    //Re-Render List
    reRender(tag);
  }

  //Create quantity
  function onClickAdd(id, tag) {
    if (tag === "Meal") {
      data1.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else if (tag === "Snacks") {
      data2.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else if (tag === "Drinks") {
      data3.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    } else {
      data4.forEach((item) => {
        if (item.id === id) {
          item.isSelected = true;
          item.quantity = 1;
        }
      });
    }
    //Re-Render List
    reRender(tag);
  }

  //Meal Flatlist
  function RenderFlatlist1() {
    return (
      <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Meal</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={"2"}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={data1}
            extraData={data1}
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
                          onPress={() => decreQuantity(item.id, item.tag)}
                        >
                          -
                        </Text>
                        <Text
                          style={{
                            marginLeft: 16,
                            marginRight: 16,
                            fontSize: 18,
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <Text
                          style={{ fontSize: 18 }}
                          onPress={() => increQuantity(item.id, item.tag)}
                        >
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => onClickAdd(item.id, item.tag)}
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
        </View>
      </View>
    );
  }

  //Snacks FlatList
  function RenderFlatlist2() {
    return (
      <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Snacks</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={"2"}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={data2}
            extraData={data2}
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
                          onPress={() => decreQuantity(item.id, item.tag)}
                        >
                          -
                        </Text>
                        <Text
                          style={{
                            marginLeft: 16,
                            marginRight: 16,
                            fontSize: 18,
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <Text
                          style={{ fontSize: 18 }}
                          onPress={() => increQuantity(item.id, item.tag)}
                        >
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => onClickAdd(item.id, item.tag)}
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
        </View>
      </View>
    );
  }

  //Drinks FlatList

  //Snacks FlatList
  function RenderFlatlist3() {
    return (
      <View>
        <View style={styles.titleText}>
          <Text style={styles.TextColor}>Drinks</Text>
          <View style={styles.line} />
        </View>
        <View
          style={{
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <FlatList
            numColumns={"2"}
            scrollEnabled={false}
            keyExtractor={(item) => item.id}
            data={data3}
            extraData={data3}
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
                          onPress={() => decreQuantity(item.id, item.tag)}
                        >
                          -
                        </Text>
                        <Text
                          style={{
                            marginLeft: 16,
                            marginRight: 16,
                            fontSize: 18,
                          }}
                        >
                          {item.quantity}
                        </Text>
                        <Text
                          style={{ fontSize: 18 }}
                          onPress={() => increQuantity(item.id, item.tag)}
                        >
                          +
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => onClickAdd(item.id, item.tag)}
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
        </View>
      </View>
    );
  }

  return (
    <View>
      <RenderFlatlist1 />
      <RenderFlatlist2 />
      <RenderFlatlist3 />
      <View style={{ justifyContent: "space-around" }}></View>
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
