import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { DataTable } from "react-native-paper";

const BillScreen = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(
        collection(db, "canteen", "TYBCA", "B-21-1320")
      );
      const data1 = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setdata(data1);
    };

    getData();
  }, []);

  return (
    <View>
      <View>
        <View style={{ alignItems: "center", marginTop: 20, marginBottom: 20 }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "600",
            }}
          >
            Bill
          </Text>
        </View>

        <DataTable.Row>
          <DataTable.Cell style={{ justifyContent: "center" }}>
            Item
          </DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: "center" }}>
            Quanity
          </DataTable.Cell>
          <DataTable.Cell style={{ justifyContent: "center" }}>
            Price
          </DataTable.Cell>
        </DataTable.Row>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View>
              <DataTable>
                <DataTable.Row>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.ordered[0].foodItem}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.ordered[0].quantity}
                  </DataTable.Cell>
                  <DataTable.Cell style={{ justifyContent: "center" }}>
                    {item.ordered[0].price}
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          )}
        />

        <View style={{ alignItems: "center" }}>
          <Text>Paid</Text>
          <Text>Reference ID: </Text>
        </View>
      </View>
    </View>
  );
};

export default BillScreen;
