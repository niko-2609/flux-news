import { View, Text, StyleSheet, Button, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { moderateScale } from 'react-native-size-matters';

const TagItem = (props: any) => {
  const navigation = useNavigation<any>()
  return (
    <Pressable onPress={(event: any) => navigation.navigate('tags/[id]', { tags: JSON.stringify(props?.item?.tagData) })}>
      <View style={styles.tagItemContainer}>
        <Text style={styles.tagItemText}>{props?.item.tagName}</Text>
      </View>
    </Pressable>
  )
}

export default TagItem


const styles = StyleSheet.create({
  tagItemContainer: {
    borderRadius: moderateScale(4),
    backgroundColor: '#D5E090',
    paddingHorizontal: moderateScale(5),
    paddingVertical: moderateScale(7)
  },
  tagItemText: {
    fontSize: moderateScale(20)
  }
})