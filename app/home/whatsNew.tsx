import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import NewsOverview from '@/components/shared/NewsOverview';
import { news } from "../../constants/NewsData"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InfoScreen from '@/components/shared/InfoScreen';
import HistoryScreen from '@/components/shared/HistoryScreen';

const verticalData = news // Example data for vertical FlatList

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const roundedScreenWidth = Math.round(SCREEN_WIDTH);

const Item = ({ item, index, setVerticalScrollEnabled, itemHeight }: any) => {
  const scrollViewRef = useRef<any>(null);
  const [isLeftScreen, setIsLeftScreen] = useState(false);

  const startIndex = 1; // Start at the first right item (after 2 left screens)

  useEffect(() => {
    setTimeout(() => {
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: SCREEN_WIDTH * startIndex,
          animated: false,
        });
      }
    }, 0);
  }, []);

  // handle item position on x-axis
  const handleScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.x;
    const roundedOffset = Math.ceil(currentOffset)
    console.log("Current Offset:", roundedOffset);
    console.log("Screen Width:", roundedScreenWidth);
    const isAtLeftScreen = roundedOffset < roundedScreenWidth * 1; // If scrolled to the left item
    const isAtRightScreen = roundedOffset > roundedScreenWidth * 1.5; 
    console.log("IS AT LEFT SCREEN?", isAtLeftScreen)
    console.log("IS AT RIGHT SCREEN?", isAtRightScreen)
    setIsLeftScreen(isAtLeftScreen);
    setVerticalScrollEnabled(!isAtLeftScreen && !isAtRightScreen); // Disable vertical scroll if on left screen
  };

  // Combine two leftItems and rightItems into one array
  const combinedData = [
    ...verticalData[index].history.reverse().map((item:any, index:any) => ({type: "left", contentTitle: item.historyTitle, contentDescription: item.historyDescription, id: item.id, contentImage: item.historyImage, historyItem: item.historyItems, tag: item.tags})), // Left items
    ...verticalData[index].context.map((item:any, index:any) => ({ type: 'right', contentTitle: item.contextTitle, contentDesciption: item.contextDescription, id: item.id, contentImage: item.contextImage, historyItems: [], tag:[] })), // Right items
  ];

  return (
    <View style={[styles.itemContainer, {height: itemHeight}]}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        nestedScrollEnabled={true}
        onScroll={handleScroll}
        scrollEventThrottle={16} // Throttle scroll events to improve performance
      >
        {combinedData.map((subItem, subIndex) => (
          <View
            key={subIndex}
            style={[
              styles.subItemContainer,
              subItem.type === 'left' ? styles.leftItem : styles.rightItem,
            ]}
          >
             {/* Conditionally render the custom component */}
             {subIndex === 0 ? (
              <HistoryScreen item={subItem} />
            ) : subIndex === 1 ? (
              <NewsOverview item={subItem} />
            ) : (
              <InfoScreen item={subItem}/>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const WhatsNew = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const tabBarHeight = useBottomTabBarHeight();
  let itemHeight = SCREEN_HEIGHT - tabBarHeight;

  return (
    <View style={{flex: 1, backgroundColor: '#211C34'}}>
      <FlatList
      data={verticalData}
      renderItem={({ item, index }) => (
        <Item
          item={item}
          index={index}
          setVerticalScrollEnabled={setVerticalScrollEnabled}
          itemHeight={itemHeight}
          scrollIndex={index === 0 ? 1 : undefined} // Start horizontal scroll at rightItems[0] for the first item
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      scrollEnabled={verticalScrollEnabled} // Control vertical scrolling
      getItemLayout={(data, index) => ( // Optimization
        { length: SCREEN_HEIGHT, offset: SCREEN_HEIGHT * index, index }
      )}
      contentContainerStyle={styles.flatListContainer}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 0, // Ensure that there is no padding at the bottom
  },
  itemContainer: {
    height: 773,
    width: SCREEN_WIDTH,
    padding:0,
    flex: 1,
    backgroundColor: '#211C34'
  },
  subItemContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding:0,
   
  },
  leftItem: {
    backgroundColor: '#d0d0d0',
  },
  rightItem: {
    backgroundColor: '#e0e0e0',
  },
});

export default WhatsNew;
