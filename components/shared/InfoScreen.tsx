import { View, Text, Platform, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const InfoScreen = (props:any) => {
    return (
        <View style={styles.container}>
            <View>
                <Image source={props?.item?.contentImage} style={{ width: scale(350), height: 400 }} resizeMode='contain' />
            </View>
            <Text style={styles.title}>{props?.item?.contentTitle}</Text>
            <View style={styles.line}>
            </View>
            <View>
                <Text style={styles.description}>{props?.item?.contentDesciption}</Text>
            </View>
        </View>
    )
}

export default InfoScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: Platform.OS === "android" ? moderateScale(0) : moderateScale(0),
        alignItems: 'center',
        backgroundColor: '#211C34',
    },
    line:{
        width: '85%',
        alignSelf: 'center',
        
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    title: {
        fontSize: moderateScale(24),
        marginVertical: moderateScale(18),
        textAlign: 'center',
        color: "white",
        letterSpacing: 1,
        fontWeight: '600',
        fontFamily: "KronaOne_400Regular"
    },
    description: {
        fontSize: moderateScale(16),
        color: 'white',
        textAlign: 'center',
        paddingTop: moderateScale(16),
        paddingHorizontal: moderateScale(3),
        letterSpacing: 2,
        lineHeight: Platform.OS === "android" ? 25 : 30
    }
})