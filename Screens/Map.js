import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const Map = () => {
    return (
        <SafeAreaView style={tw`flex-1 bg-blue-200`}>
            <MapView style={tw`flex-1`} provider={PROVIDER_GOOGLE} initialRegion={{
                latitude: 28.7041,
                longitude: 77.1025,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            />
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({})
