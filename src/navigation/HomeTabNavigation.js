import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderHistory from '../screens/OrderHistory';
import SettingScreen from '../screens/SettingScreen';
import { Foundation, FontAwesome5, MaterialIcons, Octicons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} barStyle={{ backgroundColor: "#27AE60" }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <Octicons name="home" size={24} color={color} />
        ),
      }}
      />
      <Tab.Screen name="Menu" component={MenuScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="fast-food-outline" size={24} color={color} />
            ),
        }}
      />
      <Tab.Screen name="Order History" component={OrderHistory} 
        options={{
          tabBarIcon: ({ color }) => (
          <Octicons name="history" size={24} color={color} />
            ),
        }}
      />
      <Tab.Screen name="Setting" component={SettingScreen} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabNavigation