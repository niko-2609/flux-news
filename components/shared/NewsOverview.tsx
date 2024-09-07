import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const NewsOverview = (props: any) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props?.item?.contentImage} style={{ width: Platform.OS === 'android' ? scale(350) : scale(360), height: Platform.OS === "android" ? verticalScale(344) : verticalScale(325) }} resizeMode='contain' />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{props?.item?.contentTitle}</Text>
                <Text style={styles.description}>{props?.item?.contentDesciption}</Text>
            </View>
        </View>
    )
}

export default NewsOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === "android" ? moderateScale(0) : moderateScale(0),
        alignItems: 'center',
        backgroundColor: '#211C34',
    },
    textContainer: {
        // paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(10),
    },
    heading: {
        fontSize: moderateScale(24),
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: moderateScale(3),
        color: '#BE4848',
        fontFamily: "Monda_700Bold"
    },
    description: {
        fontSize: moderateScale(17),
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        fontFamily: "Monda_400Regular"
        // letterSpacing: Platform.OS === "android" ? 2 : 3,
        // lineHeight: Platform.OS === "android" ?moderateScale(40): moderateScale(50)
    }
})

