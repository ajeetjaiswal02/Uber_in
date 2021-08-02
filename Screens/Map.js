import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';

const Map = () => {
    return (
        <SafeAreaView>
            <Text style={tw`p-10`}>This is the Map area</Text>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({})
