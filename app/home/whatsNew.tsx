/** WORKING VERSION - LATEST DO NOT DELETE */

// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, FlatList, ScrollView, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
// import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

// const verticalData = [...Array(10).keys()]; // Example data for vertical FlatList
// const rightScrollData = [...Array(5).keys()]; // Example data for right items in the horizontal scroll

// const SCREEN_HEIGHT = Dimensions.get('window').height;
// const SCREEN_WIDTH = Dimensions.get('window').width;


// const Item = ({ item, index, setVerticalScrollEnabled, itemHeight }: any) => {
//   const scrollViewRef = useRef(null);
//   const [isLeftScreen, setIsLeftScreen] = useState(false);
  

//   const startIndex = 2; // Start at the first right item

//   useEffect(() => {
//     setTimeout(() => {
//       if (scrollViewRef.current) {
//         scrollViewRef.current.scrollTo({
//           x: SCREEN_WIDTH * startIndex,
//           animated: false,
//         });
//       }
//     }, 0);
//   }, []);

//   const handleScroll = (event:any) => {
//     const currentOffset = event.nativeEvent.contentOffset.x;
//     const isAtLeftScreen = currentOffset < SCREEN_WIDTH / 2; // If scrolled to the left item
//     setIsLeftScreen(isAtLeftScreen);
//     setVerticalScrollEnabled(!isAtLeftScreen); // Disable vertical scroll if on left screen
//   };

//   // Combine leftItem and rightItems into one array
//   const combinedData = [
//     { type: 'left', content: 'Left Screen' }, // First left item
//     { type: 'left', content: 'Left Screen 2' }, // Second left item
//     ...rightScrollData.map((_, index) => ({ type: 'right', content: `Right Screen ${index + 1}` })), // Right items
//   ];

//   return (
//     <SafeAreaView style={[styles.itemContainer, {height: itemHeight}]}>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         nestedScrollEnabled={true}
//         onScroll={handleScroll}
//         scrollEventThrottle={16} // Throttle scroll events to improve performance
//       >
//         {combinedData.map((subItem, subIndex) => (
//           <View
//             key={subIndex}
//             style={[
//               styles.subItemContainer,
//               subItem.type === 'left' ? styles.leftItem : styles.rightItem,
//               index === 0 && subItem.type === 'left' && styles.firstItemLeft, // Special style for the first item's left screen
//               index === 0 && subItem.type === 'right' && styles.firstItemRight, // Special style for the first item's right screen
//             ]}
//           >
//             <Text>{subItem.content}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const WhatsNew = () => {
//   const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
//   const tabBarHeight = useBottomTabBarHeight();
//   let itemHeight = SCREEN_HEIGHT - tabBarHeight
//   return (
//     <FlatList
//       data={verticalData}
//       renderItem={({ item, index }) => (
//         <Item 
//           item={item} 
//           index={index} 
//           setVerticalScrollEnabled={setVerticalScrollEnabled} 
//           itemHeight={itemHeight}
//           scrollIndex={index === 0 ? 1 : undefined} // Start horizontal scroll at rightItems[0] for the first item
//           />
//       )}
//       keyExtractor={(item, index) => index.toString()}
//       pagingEnabled
//       showsVerticalScrollIndicator={false}
//       snapToAlignment="center"
//       decelerationRate="fast"
//       scrollEnabled={verticalScrollEnabled} // Control vertical scrolling
//       getItemLayout={(data, index) => ( // Optimization
//         { length: SCREEN_HEIGHT, offset: SCREEN_HEIGHT * index, index }
//       )}
//       contentContainerStyle={styles.flatListContainer}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   flatListContainer: {
//     paddingBottom: 0, // Ensure that there is no padding at the bottom
//   },
//   itemContainer: {
//     height: 773,
//     width: SCREEN_WIDTH,
//     backgroundColor: '#f0f0f0',
//     borderWidth: 1,
//     borderColor: 'red'
//   },
//   subItemContainer: {
//     width: SCREEN_WIDTH,
//     height: SCREEN_HEIGHT,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   leftItem: {
//     backgroundColor: '#d0d0d0',
//   },
//   rightItem: {
//     backgroundColor: '#e0e0e0',
//   },
//   firstItemLeft: {
//     backgroundColor: '#ffa07a', // Different background for the first item's left screen
//   },
//   firstItemRight: {
//     backgroundColor: '#20b2aa', // Different background for the first item's right screens
//   },
// });

// export default WhatsNew;


import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ScrollView, Dimensions, StyleSheet, SafeAreaView } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

const verticalData = [...Array(10).keys()]; // Example data for vertical FlatList
const rightScrollData = [...Array(5).keys()]; // Example data for right items in the horizontal scroll

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const roundedScreenWidth = Math.round(SCREEN_WIDTH);

const Item = ({ item, index, setVerticalScrollEnabled, itemHeight }: any) => {
  const scrollViewRef = useRef<any>(null);
  const [isLeftScreen, setIsLeftScreen] = useState(false);

  const startIndex = 2; // Start at the first right item (after 2 left screens)

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
    const isAtLeftScreen = roundedOffset < roundedScreenWidth * 2; // If scrolled to the left item
    const isAtRightScreen = roundedOffset > roundedScreenWidth * 2; 
    console.log("IS AT LEFT SCREEN?", isAtLeftScreen)
    console.log("IS AT RIGHT SCREEN?", isAtRightScreen)
    setIsLeftScreen(isAtLeftScreen);
    setVerticalScrollEnabled(!isAtLeftScreen && !isAtRightScreen); // Disable vertical scroll if on left screen
  };

  // Combine two leftItems and rightItems into one array
  const combinedData = [
    { type: 'left', content: 'Left Screen 1' }, // First left item
    { type: 'left', content: 'Left Screen 2' }, // Second left item
    ...rightScrollData.map((_, index) => ({ type: 'right', content: `Right Screen ${index + 1}` })), // Right items
  ];

  return (
    <SafeAreaView style={[styles.itemContainer, { height: itemHeight }]}>
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
              index === 0 && subItem.type === 'left' && styles.firstItemLeft, // Special style for the first item's left screens
              index === 0 && subItem.type === 'right' && styles.firstItemRight, // Special style for the first item's right screens
            ]}
          >
            <Text>{subItem.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const WhatsNew = () => {
  const [verticalScrollEnabled, setVerticalScrollEnabled] = useState(true);
  const tabBarHeight = useBottomTabBarHeight();
  let itemHeight = SCREEN_HEIGHT - tabBarHeight;

  return (
    <FlatList
      data={verticalData}
      renderItem={({ item, index }) => (
        <Item
          item={item}
          index={index}
          setVerticalScrollEnabled={setVerticalScrollEnabled}
          itemHeight={itemHeight}
          scrollIndex={index === 0 ? 2 : undefined} // Start horizontal scroll at rightItems[0] for the first item
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
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 0, // Ensure that there is no padding at the bottom
  },
  itemContainer: {
    height: 773,
    width: SCREEN_WIDTH,
    backgroundColor: '#f0f0f0',
  },
  subItemContainer: {
    width: SCREEN_WIDTH,
  
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  leftItem: {
    backgroundColor: '#d0d0d0',
  },
  rightItem: {
    backgroundColor: '#e0e0e0',
  },
  firstItemLeft: {
    backgroundColor: '#ffa07a', // Different background for the first item's left screens
  },
  firstItemRight: {
    backgroundColor: '#20b2aa', // Different background for the first item's right screens
  },
});

export default WhatsNew;
