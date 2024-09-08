import { View, FlatList, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import ListItem from '@/components/shared/ListItem'
import { feed } from '@/constants/FeedData';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const Tag = () => {
    const [data, setData] = useState<any>([]);
    const flatListRef = useRef<FlatList>(null); // Ref for FlatList



    useEffect(() => {
        const reqData = feed[0]?.feedItems
        setData(reqData)
    }, [])

    useEffect(() => { }, [data])
    const updateData = (feedId: any) => {
        let filteredItem = feed.filter((item: any) => item?.id === feedId)
        setData(filteredItem[0]?.feedItems);


        // Scroll to the first item of the new feed
        flatListRef.current?.scrollToIndex({ index: 0, animated: false });

    }
    return (
        <View style={styles.rootContainer}>
            <FlatList
                ref={flatListRef} // Attach the ref to FlatList
                data={data}
                renderItem={({ item, index }: any) => (
                    <ListItem setData={updateData} item={item} />
                )}
                keyExtractor={(item: any, index: any) => index.toString()}
                pagingEnabled
                showsVerticalScrollIndicator={false}
                snapToAlignment="center"
                decelerationRate="fast"
                scrollEnabled={true} // Control vertical scrolling
                getItemLayout={(data, index) => ( // Optimization
                    { length: SCREEN_HEIGHT, offset: SCREEN_HEIGHT * index, index }
                )}
                contentContainerStyle={styles.flatListContainer}
            />
        </View>
    )
}

export default Tag;


const styles = StyleSheet.create({
    flatListContainer: {
        paddingBottom: 0, // Ensure that there is no padding at the bottom
    },
    rootContainer: {
    }
})