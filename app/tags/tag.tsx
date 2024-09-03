import { View, Text, FlatList, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import ListItem from '@/components/shared/ListItem'
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Tag = () => {
    return (
        <View>
            <FlatList
                data={[]}
                renderItem={({ item, index }: any) => (
                    <ListItem />
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

export default Tag

const styles = StyleSheet.create({
    flatListContainer: {
        paddingBottom: 0, // Ensure that there is no padding at the bottom
    },
})