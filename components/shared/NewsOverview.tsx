import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters'

const NewsOverview = (props: any) => {
    console.log("PROPS", props)
    return (
        <View style={styles.container}>
            <View>
                <Image source={props?.item?.contentImage} style={{ width: scale(350), height: Platform.OS === 'android' ? verticalScale(380) : verticalScale(360) }} resizeMode='contain' />

            </View>
            <View style={styles.textContainer}>
                <Text style={styles.heading}>{props?.item?.contentTitle}</Text>
                <Text style={styles.subHeading}>{props?.item?.contentDesciption}</Text>
            </View>
        </View>
    )
}

export default NewsOverview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        alignItems: 'center',
        backgroundColor: '#211C34',
        height: '100%',
        width: '100%'
    },
    textContainer: {
        paddingHorizontal: moderateScale(10),
        marginVertical: moderateScale(10)
    },
    heading: {
        fontSize: 52,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: moderateScale(10),
        color: '#BE4848',
    },
    subHeading: {
        fontSize: moderateScale(40),
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        letterSpacing: Platform.OS === "android" ? 2 : 3,
        lineHeight: Platform.OS === "android" ?moderateScale(40): moderateScale(50)
    }
})