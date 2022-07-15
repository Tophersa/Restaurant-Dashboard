import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddMenuScreen from '../screens/AddMenuScreen';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import OrderScreen from '../screens/OrderScreen';
import SettingScreen from '../screens/SettingScreen';
import OrderHistory from '../screens/OrderHistory';
import HomeTabNavigation from './HomeTabNavigation';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeTabNavigation} 
        options={{ title: 'HomeScreen',  headerShown: false }}
        />
        <Stack.Screen name="MenuScreen" component={MenuScreen} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ title: '' }}/>
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="AddMenuScreen" component={AddMenuScreen} options={{ title: '' }}/>
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
  </Stack.Navigator>
  )
}

export default Router