import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { moderateScale, verticalScale } from 'react-native-size-matters';
import AntDesign from '@expo/vector-icons/AntDesign';
import {  SafeAreaView } from 'react-native-safe-area-context';
import CustomAccordion from './Accordion';
import TagItem from './TagItem';


const HistoryScreen = (props:any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <AntDesign name='eye' color={'#FFFFFF'} size={moderateScale(24)}/>
        <Text style={styles.headingText}>Peak into the Past</Text>
      </View>
      <View style={styles.accordion}>
        <CustomAccordion data={props?.item?.historyItem} />
      </View>
     <View style={styles.tagParentContainer}>
     <View style={styles.tagContainer}>
        {props?.item?.tag?.map((item:any) => <TagItem key={item.tagId} item={item}/>)}
      </View>
     </View>
    </SafeAreaView>
  )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === "android" ? moderateScale(0) : moderateScale(0),
        alignItems: 'center',
        backgroundColor: '#211C34',
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#8198AE',
        width: '100%',
        height: verticalScale(52),
        marginVertical: 20,
        borderRadius: moderateScale(8),
    },
    headingText: {
      fontSize: moderateScale(24),
      fontWeight: '700',
      textAlign: 'center',
      color: '#FFFFFF',
      letterSpacing: 2,
      alignSelf: 'center'
    }, 
    accordion: {
      width: '100%',
    },
    tagParentContainer:{
      marginTop: moderateScale(20)
    },
    tagContainer:{
      flexDirection: 'row',
      gap: 8,
      flexWrap: 'wrap',
    }
})