import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import dishes from "../../../assets/data/dashboard/dishes.json"

const MenuScreen = () => {

    const renderItem = ({ item }) => (

      
        <View style={styles.itemContainer}>
        <Text style={[styles.itemText, {width: 200}]}>{item.name}</Text>
        <Text style={[styles.itemText, {width: 60}]}>R {item.price}</Text>
        <View style={[styles.statusBlock,{backgroundColor: "#FADBD8", borderWidth: "0.5", borderColor: "#E74C3C"}]}>
            <Text style={[styles.itemText, {color: "#E74C3C"}]}>Remove</Text>
        </View>
        
    </View>
      );


  return (
    <View style={styles.pageContainer}>

      <View style={styles.ordersContainer}>
        <View style={styles.headerCover}>
            <Text style={styles.header}>Menu</Text>
            <Text style={[styles.header, {fontSize: 15, color: "white", backgroundColor: "#239B56", padding: 5}]}>New Item</Text>
        </View>
        <View style={styles.tableHeaderContainer}>
            <Text style={[styles.tableHeaderText, {width: 200}]}>Menu Item</Text>
            <Text style={[styles.tableHeaderText, {width: 60}]}>Price</Text>
            <Text style={[styles.tableHeaderText, {width: 50}]}>Action</Text>
        </View>

        <FlatList
            data={dishes}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#EBF5FB",
        marginBottom: 10,
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
        height: 21,
        paddingHorizontal: 2
    }

  });

export default MenuScreen