import {View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Home from './src/pages/Home';
import GetStarted from './src/pages/GetStarted';

import styles from './AppStyles';
import { LinearGradient } from "expo-linear-gradient";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0.1 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <NavigationContainer style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen 
            name="GetStarted" 
            component={GetStarted}
          />
          <Stack.Screen 
            name="Home" 
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}