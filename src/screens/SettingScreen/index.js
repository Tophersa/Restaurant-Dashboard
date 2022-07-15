import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const SettingScreen = () => {
  const [restautantName, onChangeRestautantName] = React.useState("");
  const [address, onChangeAddress] = React.useState("");

  const submitHandler = () =>{

  }
  
  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>

          <View style={styles.headerCover}>
            <Text style={styles.header}>Restaurant Details</Text>
          </View>

          <View style={styles.inputContainer}>
            <View style={[styles.inputTitleCover, {flexDirection: "row", alignItems: "center"}]}>
              <Text style={[styles.inputTitle,{color: "red"}]}>*</Text>
              <Text style={styles.inputTitle}>Restaurant Name</Text>
            </View>
            <TextInput style={styles.input} onChangeText={onChangeRestautantName} 
              value={restautantName} placeholder="Enter restaurant item here" keyboardType="default"
            />
            <View style={[styles.inputTitleCover, {flexDirection: "row", alignItems: "center"}]}>
              <Text style={[styles.inputTitle,{color: "red"}]}>*</Text>
              <Text style={styles.inputTitle}>Restaurant Address</Text>
            </View>
            <TextInput style={[styles.input, {}]} onChangeText={onChangeAddress} 
              value={address} placeholder="Select..." keyboardType="default"
            />
            <TouchableOpacity style={styles.button} onPress={submitHandler}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>

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
  inputContainer:{
    marginBottom: 10,
    paddingHorizontal: 10
  },
  inputTitleCover:{
    marginVertical: 5
  },
  inputTitle:{
    fontSize: 16
  },
  input:{
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10
  },
  button:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#239B56",
    width: 80,
    height: 30,
    borderRadius: 5,
    marginTop: 25
  },
  submitText:{
    color: "white",
    fontWeight: "bold"
  }

});

export default SettingScreen