import { View, Text, Button } from 'react-native';
import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

import styles from './styles';

import List from '../List';
import Details from '../Details';

const Tab = createBottomTabNavigator();

function Home () {
  const navigation = useNavigation();

    return (
          <Tab.Navigator 
            screenOptions={{
              headerShown: false, 
              tabBarShowLabel: false,
              tabBarStyle: {
                backgroundColor: '#201C30',
                position: 'absolute',
                height: 83,
                borderRadius: 57,
                bottom: 25,
                left: 20,
                right: 20,
                borderColor: 'transparent',
              }
          }}>
            <Tab.Screen
              name="List"
              component={List}
            />
            <Tab.Screen
              name="Details"
              component={Details}
            />
        </Tab.Navigator>
    )
}

export default Home;