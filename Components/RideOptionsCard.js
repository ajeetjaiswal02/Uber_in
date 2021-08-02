import {Image, SafeAreaView,  Text, View } from 'react-native'
import React from 'react'
import {useState} from "react"
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

const data = [
    {
        id: "Uber_XL-123",
        title: "UberGo",
        multiplier: 1,
        image: "https://links.papareact.com/3pn"
    },
    {
        id: "Uber_XL-456",
        title: "UberGo Sedan",
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8"

    },
    {
        id: "Uber_XL-789",
        title: "UberGo LUX",
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf"
    },

]; 


const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [select, setSelect] = useState(null);
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity onPress={()=> navigation.navigate('NavigationCard')}
                    style={tw`absolute top-3 left-5 p-3 rounded-full`}
                >
                    <Icon name="chevron-left" type="fontawesome" />
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
            </View>

            <FlatList 
               data={data} 
               keyExtractor={(item) => item.id}
                renderItem={({item: {id,title,multiplier,image},item}) => (
                    <TouchableOpacity onPress={()=> setSelect(item)} style={tw`flex-row justify-between items-center px-10 ${id === select?.id && "bg-gray-200"}`}>                        
                        <Image style={{
                              width: 100,
                              height: 100,
                              resizeMode: 'contain',
                          }} 
                          source={{uri: image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>Travel time ...</Text>
                        </View>
                        <Text style={tw`text-xl`}>₹1000</Text>
                    </TouchableOpacity> 
                )}
            />
            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-3`}>
                    <Text style={tw`text-center text-white text-xl`}>Choose {select?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

