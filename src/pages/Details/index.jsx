import { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

function Details () {
    const navigation = useNavigation();

    return (
      <LinearGradient
          colors={["#111017", "#090320"]}
          start={{ x: 1, y: 0.1 }}
          end={{ x: 0, y: 1 }}
          style={{ flex: 1 }}
        >
          <View>
            <Text>Details</Text>
            <Button title='Return' onPress={() => navigation.navigate('List')}/>
          </View>
        </LinearGradient>
    )
}

export default Details;