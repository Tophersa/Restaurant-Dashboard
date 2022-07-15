import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const OrderScreen = () => {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
          <View style={styles.headerCover}>
            <Text style={styles.header}>Order F8463Y</Text>
          </View>

          <View style={styles.customerDetails}>
            <View style={styles.customerRow}>
                <Text style={styles.customerLeft}>Customer</Text>
                <Text style={styles.customerRight}>Vhonani Mukhotho</Text>
            </View>
            <View style={styles.customerRow}>
                <Text style={styles.customerLeft}>Customer Address</Text>
                <Text style={styles.customerRight}>Observatory, UCT Obz Square</Text>
            </View>
          </View>

            <View style={styles.itemRow}>
              <Text style={{fontWeight: "bold"}}> Big Mac x2</Text>
              <Text> R72.36</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={{fontWeight: "bold"}}> Chicken Nuggets x1</Text>
              <Text> R38.71</Text>
            </View>
            <View style={styles.itemRow}>
              <Text style={{fontWeight: "bold"}}> Big Tasty x3</Text>
              <Text> R169.92</Text>
            </View>

            <View style={[styles.itemRow, {paddingVertical: 15}]}>
              <Text style={{fontWeight: "bold", fontSize: 18}}>Total</Text>
              <Text style={{fontWeight: "bold", fontSize: 18}}> R280.99</Text>
            </View>


            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <TouchableOpacity style={[styles.buttonRow,{backgroundColor: "#E74C3C"}]}><Text style={{color: "white"}}>Decline Order</Text></TouchableOpacity>
              <TouchableOpacity style={[styles.buttonRow,{backgroundColor: "#27AE60"}]}><Text style={{color: "white"}}>Accept Order</Text></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.longButton}>
              <Text style={{color: "white"}}>Food is Done</Text>
            </TouchableOpacity>
          
          
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  pageContainer:{
      backgroundColor: "#EBF5FB",
      height: "100%"
  },
  container:{
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
customerDetails:{
  margin: 10,
  marginBottom: 15
  //borderWidth: 1,
  //borderColor: "#E5E7E9"
},
customerRow:{
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#A9CCE3"
},
customerLeft:{
  width: "40%",
  backgroundColor: "#D4E6F1",
  padding: 10
},
customerRight:{
  padding: 10
},
itemRow:{
  flexDirection: "row",
  justifyContent: "space-between",
  marginVertical: 5,
  marginHorizontal: 10,
  paddingBottom: 5,
  borderBottomWidth: 1,
  borderBottomColor: "#EBF5FB"
},
buttonRow:{
  width: 150,
  height: 35, 
  margin: 10,
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5
},
longButton:{
  backgroundColor: "#27AE60",
  justifyContent: "center",
  alignItems: "center",
  margin: 10,
  height: 35,
  borderRadius: 5
}

})

export default OrderScreen