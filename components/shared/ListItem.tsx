import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;


const ListItem = () => {
  const tabBarHeight = useBottomTabBarHeight();
  let itemHeight = SCREEN_HEIGHT - tabBarHeight;
    return (
      <SafeAreaView style={[styles.itemContainer, {height: itemHeight}]}>
       <View style={styles.subItemContainer}>
        <Text>Hello world</Text>
       </View>
      </SafeAreaView>
    );
  };


export default ListItem


const styles = StyleSheet.create({
    itemContainer: {
        height: 773,
        width: moderateScale(SCREEN_WIDTH),
        padding:0,
        flex: 1,
        backgroundColor: '#211C34',
      },
      subItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        padding:0,
      },
})