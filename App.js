import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AddMenuScreen from './src/screens/AddMenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import OrderScreen from './src/screens/OrderScreen';
import SettingScreen from './src/screens/SettingScreen';
import Router from './src/navigation/Router';

export default function App() {
  return (

    <NavigationContainer>
    <SafeAreaView style={styles.container}>

      <Router/>
    
      <StatusBar style="auto" />
    </SafeAreaView>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
