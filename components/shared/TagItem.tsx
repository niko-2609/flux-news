import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';
import { moderateScale } from 'react-native-size-matters';

const TagItem = (props:any) => {
  return (
   <Link href={props?.item?.tagLink}>
    <View style={styles.tagItemContainer}>
      <Text style={styles.tagItemText}>{props?.item.tagName}</Text>
    </View>
   </Link>
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
    tagItemText:{
        fontSize: moderateScale(20)
    }
})