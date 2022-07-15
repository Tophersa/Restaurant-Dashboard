import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import AddMenuScreen from './src/screens/AddMenuScreen';
import HomeScreen from './src/screens/HomeScreen';
import MenuScreen from './src/screens/MenuScreen';
import OrderScreen from './src/screens/OrderScreen';
import SettingScreen from './src/screens/SettingScreen';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

      <OrderScreen/>
      <StatusBar style="auto" />
    </SafeAreaView>

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
