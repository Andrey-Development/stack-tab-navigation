import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useLayoutEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

function GetStarted () {
  const route = useRoute();
  const navigation = useNavigation();

  function handlePress(){
    navigation.navigate('Home');
  }
  
    return (
      <LinearGradient
          colors={["#111017", "#090320"]}
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 60 }}>
            <View style={{top: 145, width: 365, height: 365, backgroundColor: '#fff'}}>
              <Text>asdasd</Text>
            </View>

            <View style={{ width: 296, height: 296, gap: 60 }}>
              <View>
                <Text style={{color: '#ffffff', fontSize: 28, lineHeight: 42, fontWeight: 500 }}>Manage Your Employees. All in One Place</Text>
                <Text style={{color: '#ffffff', fontSize: 14, lineHeight: 21, fontWeight: 400 }}>Eliminate physical cards, get virtual data in your hand.</Text>
              </View>            
                
              <LinearGradient
                colors={["#179AC3", "#4A4A4A"]}
                start={{ x: 1, y: 0.1 }}
                end={{ x: 0, y: 1 }}
                style={{borderRadius: 20}}
              >
                <TouchableOpacity onPress={handlePress}>
                  <View style={{ height: 57 }}>
                    <Text style={{
                        flex: 1,
                        color: '#ffffff', 
                        fontSize: 18, 
                        fontWeight: 500,
                        lineHeight: 27, 
                        textAlignVertical: 'center', 
                        textAlign: 'center',
                      }}>Get Started</Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
    )
}

export default GetStarted;