import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import Map from "./Map";
import  NavigateCard  from '../Components/NavigateCard';
import  RideOptionsCard  from '../Components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import {TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
    const Stack = createStackNavigator();
    const naviagtion = useNavigation();
    return (
        <View>
            <TouchableOpacity onPress={() => naviagtion.navigate('HomeScreen')}>
            style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full shadow-lg`}>
                <Icon name="menu" />
            </TouchableOpacity>

            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                     name = "NavigateCard"
                     component={NavigateCard}
                     options={{
                         headerShown: false,
                     }} 
                />
                <Stack.Screen
                      name = "RideOptionsCard"
                      component={RideOptionsCard}
                      options={{
                          headerShown: false,
                      }} 
                />

                </Stack.Navigator>
            </View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({})
