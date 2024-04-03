import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'


const index = () => {
  return (
	<SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>

	
	<View style={{flex:1}}>
		<Stack.Screen
		options={{
			header:() => <ExploreHeader/>,
		}}/>
		<Listings/>
		
	</View>
	</SafeAreaView>
  )
}

export default index