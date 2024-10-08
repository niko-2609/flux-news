//WORKING VERSION - DO NOT DELETE

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, FlatList, ScrollView, Dimensions, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import NewsOverview from '@/components/shared/NewsOverview';
import { news } from "../../constants/NewsData"
import InfoScreen from '@/components/shared/InfoScreen';
import HistoryScreen from '@/components/shared/HistoryScreen';


const verticalData = news // Example data for vertical FlatList

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const roundedScreenWidth = Math.round(SCREEN_WIDTH);

const Item = ({ item, index, setVerticalScrollEnabled, itemHeight, isScrollingDown, isScrollingUp }: any) => {
  const scrollViewRef = useRef<any>(null);
  const [isLeftScreen, setIsLeftScreen] = useState(false);
  const startIndex = 1; // Start at the first right item (after 1 left screens)

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
    const currentXOffset = event.nativeEvent.contentOffset.x;
    const roundedXOffset = Math.ceil(currentXOffset)
    const isAtLeftScreen = roundedXOffset < roundedScreenWidth * 1; // If scrolled to the left item
    setIsLeftScreen(isAtLeftScreen);
    setVerticalScrollEnabled(!isAtLeftScreen); // Disable vertical scroll if on left screen

  };

  // Combine two leftItems and rightItems into one array
  const combinedData = [
    ...verticalData[index].history.reverse().map((item: any, index: any) => ({ type: "left", contentTitle: item.historyTitle, contentDescription: item.historyDescription, id: item.id, contentImage: item.historyImage, historyItem: item.historyItems, tag: item.tags })), // Left items
    ...verticalData[index].context.map((item: any, index: any) => ({ type: 'right', contentTitle: item.contextTitle, contentDesciption: item.contextDescription, id: item.id, contentImage: item.contextImage, historyItems: [], tag: [] })), // Right items
  ];

  //   // Scroll to the first right item on the next vertical item when scrolling down
  useEffect(() => {
    if ((isScrollingDown || isScrollingUp) && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: SCREEN_WIDTH * startIndex, // First right screen
        animated: false,
      });
    }
  }, [isScrollingDown, isScrollingUp, index]);

  // if (loading) return <View style={{justifyContent: 'center', height: itemHeight, width: SCREEN_WIDTH, alignItems: 'center', borderWidth: 1, borderColor: 'blue'}}>
  //   <ActivityIndicator  />
  // </View>

  return (
    <View style={[styles.itemContainer, { height: itemHeight }]}>
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
              <InfoScreen item={subItem} />
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};



const WhatsNew = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const [localIdx, setLocalIdx] = useState<number>(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);  // Track scroll direction
  const tabBarHeight = useBottomTabBarHeight();
  const itemHeight = SCREEN_HEIGHT - tabBarHeight;
  const flatListRef = useRef<any>(null);
  const [previousVerticalIdx, setPreviousVerticalIdx] = useState<number | null>(null);


  const onViewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      const newIndex = viewableItems[0].index;
      
      // If moving between vertical items, track direction and reset horizontal scroll
      if (previousVerticalIdx !== null && newIndex !== previousVerticalIdx) {
        setIsScrollingDown(newIndex > previousVerticalIdx);
        setIsScrollingUp(newIndex < previousVerticalIdx);
      }
  
      setPreviousVerticalIdx(newIndex); // Update the previous index
      setLocalIdx(newIndex); // Update the current index
    }
  };

  // Detect scroll direction
  const handleScroll = (event: any) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const previousIndex = localIdx;
    const newIndex = Math.ceil(yOffset / (itemHeight / 2));

    if (newIndex > previousIndex) {
      setIsScrollingDown(true); // Scrolling down
      setIsScrollingUp(false);
    } else if (newIndex < previousIndex) {
      setIsScrollingDown(false);
      setIsScrollingUp(true); // Scrolling up
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#211C34' }}>
      <FlatList
        data={verticalData}
        ref={flatListRef}
        renderItem={({ item, index }) => (
          <Item
            item={item}
            index={index}
            setVerticalScrollEnabled={setVerticalScrollEnabled}
            itemHeight={itemHeight}
            scrollIndex={index === 0 ? 1 : undefined} // Start horizontal scroll at rightItems[0] for the first item
            isScrollingDown={isScrollingDown}
            isScrollingUp={isScrollingUp}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        scrollEnabled={verticalScrollEnabled} // Control vertical scrolling
        getItemLayout={(data, index) => ( // Optimization
          { length: itemHeight, offset: itemHeight * index, index }
        )}
        contentContainerStyle={styles.flatListContainer}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onScroll={handleScroll}
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
    padding: 0,
    flex: 1,
    backgroundColor: '#211C34'
  },
  subItemContainer: {
    width: SCREEN_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,

  },
  leftItem: {
    backgroundColor: '#d0d0d0',
  },
  rightItem: {
    backgroundColor: '#e0e0e0',
  },
});

export default WhatsNew;
