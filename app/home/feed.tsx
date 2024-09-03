import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItem from '@/components/shared/ListItem'
import { feed } from '@/constants/FeedData';
import { SafeAreaView } from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const Tag = () => {
const [ data, setData ] = useState<any>([])


useEffect(() => {
    const reqData = feed[0]?.feedItems
    setData(reqData)
},[])

const updateData = (feedName:string) => {
    let filteredItem = feed.filter((item:any) => item?.feedTitle === feedName)
    setData(filteredItem[0]?.feedItems)
}
    return (
        <View style={styles.rootContainer}>
            <FlatList
                data={data}
                renderItem={({ item, index }: any) => (
                    <ListItem setData={updateData} item={item}/>
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
  rootContainer:{
  }
})