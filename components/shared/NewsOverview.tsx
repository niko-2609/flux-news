import { View, Text } from 'react-native'
import React from 'react'

const NewsOverview = (props:any) => {
  return (
    <View className='flex-1'>
      <Text>{props?.title}</Text>
    </View>
  )
}

export default NewsOverview