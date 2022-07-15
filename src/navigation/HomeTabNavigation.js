import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderHistory from '../screens/OrderHistory';
import SettingScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} 
      options={{ title: 'Home',  headerShown: false }}
      />
      <Tab.Screen name="MenuScreen" component={MenuScreen} 
      options={{ title: 'Menu',  headerShown: false }}
      />
      <Tab.Screen name="OrderHistory" component={OrderHistory} 
      options={{ title: 'Order History',  headerShown: false }}
      />
      <Tab.Screen name="SettingScreen" component={SettingScreen} 
      options={{ title: 'Setting',  headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default HomeTabNavigation