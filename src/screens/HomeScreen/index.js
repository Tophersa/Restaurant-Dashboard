import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import orders from "../../../assets/data/dashboard/orders.json"

const HomeScreen = () => {

    const renderItem = ({ item }) => (

      
        <View style={styles.itemContainer}>
        <Text style={[styles.itemText, {width: 60}]}>{item.orderID}</Text>
        <Text style={[styles.itemText,{width: 150}]}>{item.deliveryAddress}</Text>
        <Text style={[styles.itemText, {width: 50}]}>R {item.price}</Text>

        {item.status =="Accepted"?
        <View style={[styles.statusBlock,{backgroundColor: "#E9F7EF", borderWidth: "0.5", borderColor: "#145A32"}]}>
            <Text style={[styles.itemText, {color: "#145A32"}]}>{item.status}</Text>
        </View>
        :null}

        {item.status =="Pending"?
        <View style={[styles.statusBlock,{backgroundColor: "#FAE5D3", borderWidth: "0.5", borderColor: "#AF601A"}]}>
            <Text style={[styles.itemText, {color: "#AF601A"}]}>{item.status}</Text>
        </View>
        :null}

        {item.status =="Declined"?
        <View style={[styles.statusBlock,{backgroundColor: "#FADBD8", borderWidth: "0.5", borderColor: "#E74C3C"}]}>
            <Text style={[styles.itemText, {color: "#E74C3C"}]}>{item.status}</Text>
        </View>
        :null}
        

    </View>
      );


  return (
    <View style={styles.pageContainer}>

      <View style={styles.ordersContainer}>
        <View style={styles.headerCover}>
            <Text style={styles.header}>Orders</Text>
        </View>
        <View style={styles.tableHeaderContainer}>
            <Text style={[styles.tableHeaderText, {width: 60}]}>Order ID</Text>
            <Text style={[styles.tableHeaderText, {width: 150}]}>Delivery Address</Text>
            <Text style={[styles.tableHeaderText, {width: 50}]}>Price</Text>
            <Text style={[styles.tableHeaderText, {width: 80}]}>Status</Text>
        </View>

        <FlatList
            data={orders}
            renderItem={renderItem}
            keyExtractor={item => item.orderID}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    pageContainer:{
        backgroundColor: "#EBF5FB",
        height: "100%"
    },
    ordersContainer:{
        backgroundColor: "white",
        marginVertical: 5,
        marginHorizontal: 10
    },
    header:{
        margin: 10,
        fontSize: 16,
        fontWeight: "bold", 
    },
    headerCover:{
        borderBottomWidth: 2,
        borderBottomColor: "#EBF5FB",
        marginBottom: 10
    },
    tableHeaderContainer: {
        flexDirection: "row",
        //justifyContent: "space-between",
        backgroundColor: "#EBF5FB",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    tableHeaderText: {
        //fontWeight: "bold",
    },
    itemContainer: {
        flexDirection: "row",
        //justifyContent: "space-between",
        backgroundColor: "white",
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    statusBlock:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        borderRadius: 5,
        height: 21,
        paddingHorizontal: 2
    }

  });
  

export default HomeScreen