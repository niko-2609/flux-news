import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const Feed = () => {

  return (
    <SafeAreaView >
 
     <Text>Feed</Text>

    </SafeAreaView>
  )
}

export default Feed

const styles = StyleSheet.create({
  container:{
    flex: 1
  }, 
  subContainer: {
    flex: 1,
    backgroundColor: '#211C4',
  }
})