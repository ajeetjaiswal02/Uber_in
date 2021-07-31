import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {FlatList,TouchableOpacity, Text, View,Image } from 'react-native'
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: 123,
        title: "Ride",
        image : "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: 456,
        title: "Order Food",
        image: "https://links.papareact.com/28w", 
        screen: "OrderScreen"
    },
    {
        id: 789,
        title: "Package",
        image : "https://links.papareact.com/28w",
        screen: "Package"
    },
    {
        id: 101112,
        title: "Rentals",
        image : "https://links.papareact.com/3pn",
        screen: "Rentals"
    }

]

const NavOption = () => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={data}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                onPress={() => navigation.navigate(item.screen)} 
                style={tw`p-2 pt-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                           style={{ width: 120, height: 120, resizeMode: 'contain' }}
                           source={{ uri: item.image }} 
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                           style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                           name="arrowright"
                           color="white"
                           type="antdesign"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOption