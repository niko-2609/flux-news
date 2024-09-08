import { View, Text, FlatList, Dimensions, StyleSheet, useWindowDimensions } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import InfoScreen from '@/components/shared/InfoScreen';
import { useLocalSearchParams } from 'expo-router';


const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const TagScreen = (props: any) => {
    const tabBarHeight = useBottomTabBarHeight();
    const itemHeight = SCREEN_HEIGHT - tabBarHeight;
    const tags = useLocalSearchParams<any>()
    const parsedTags = JSON.parse(tags?.tags || '[]');
    return (
        <View >
            <FlatList
                data={parsedTags}
                renderItem={({ item, index }: any) => (
                    <View style={[styles.itemContainer, { height: itemHeight }]}>
                        <SafeAreaProvider>
                            <InfoScreen item={item} />
                        </SafeAreaProvider>
                    </View>
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

export default TagScreen;

const styles = StyleSheet.create({
    flatListContainer: {
        paddingBottom: 0, // Ensure that there is no padding at the bottom
    },
    itemContainer: {
        width: SCREEN_WIDTH,
        padding: 0,
        flex: 1,
        backgroundColor: '#211C34',
    }
})