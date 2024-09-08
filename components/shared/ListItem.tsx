import { View, Text, StyleSheet, Dimensions, Pressable, Image, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { feed } from '@/constants/FeedData';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const ListItem = (props:any) => {
  const tabBarHeight = useBottomTabBarHeight();
  let itemHeight = SCREEN_HEIGHT - tabBarHeight;


    return (
      <SafeAreaView style={[styles.itemContainer, {height: itemHeight}]}>
       <View style={styles.subItemContainer}>
        <Text style={styles.feedItemText}>YOUR PICKS</Text>
        <Pressable
        onPress={() => {
          props?.setData(1)
        }}
        >
        <Text style={[styles.feedItemText, {color: '#706EB5'}]}>UPSC</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          props?.setData(2)
        }}
        >
        <Text style={[styles.feedItemText, {color: '#BBB960'}]}>MS DHONI</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          props?.setData(3)
        }}
        >
        <Text style={[styles.feedItemText, {color: '#D56D6D'}]}>NIFTY</Text>
        </Pressable>
       </View>
       <View>
        <View>
          <Image source={props?.item?.itemImage} style={{ width: Platform.OS === 'android' ? scale(350) : scale(350), height: Platform.OS === 'android' ? verticalScale(344) : verticalScale(317) }} resizeMode='contain' />
        </View>
        <View style={styles.feedContentContainer}>
          <Text style={styles.feedItemContentText}>{props?.item?.itemText}</Text>
        </View>
       </View>
      </SafeAreaView>
    );
  };


export default ListItem


const styles = StyleSheet.create({
    itemContainer: {
        width: moderateScale(SCREEN_WIDTH),
        padding:0,
        flex: 1,
        backgroundColor: '#211C34',
      },
      subItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        paddingHorizontal: moderateScale(7),
        flexDirection: 'row',
        gap: moderateScale(4)
      },
      feedItemText:{ 
        fontSize: moderateScale(22),
        color: 'white',
        lineHeight: moderateScale(40),
        fontWeight: '600'
      },
      feedContentContainer: {
        // borderWidth: 2,
        // borderColor: 'blue',
        width: moderateScale(380),
        paddingHorizontal: moderateScale(12)
      },
      feedItemContentText: {
        color: 'white',
        fontWeight: '500',
        fontSize: moderateScale(36),
      }

})