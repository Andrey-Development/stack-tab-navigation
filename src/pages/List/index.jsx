import { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';

function List () {
    const navigation = useNavigation();


    // function handlePress(){
    //     navigation.navigate("Details", { id: 1 });
    // }

    return (
    <LinearGradient
        colors={["#111017", "#090320"]}
        start={{ x: 1, y: 0.1 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1 }}
    >
      <View>
        <Text>List</Text>
        <Button title='Details' onPress={() => navigation.navigate('Details')}/>
      </View>
    </LinearGradient>
    )
}

export default List;