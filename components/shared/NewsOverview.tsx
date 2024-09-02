import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const NewsOverview = (props: any) => {
    console.log("PROPS", props)
    return (
        <View style={styles.container}>
            <View>
                <Image source={props?.item?.contentImage} style={{ width: 380, height: 420 }} resizeMode='contain' />

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
        paddingTop: Platform.OS === "android" ? 25 : 60,
        alignItems: 'center',
        backgroundColor: '#211C34',
        height: '100%',
        width: '100%'
    },
    textContainer: {
        marginVertical: 5,
        paddingHorizontal: 10

    },
    heading: {
        fontSize: 52,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 5,
        color: '#BE4848'
    },
    subHeading: {
        fontSize: 44,
        fontWeight: '500',
        textAlign: 'center',
        color: 'white',
        letterSpacing: 2,
        lineHeight: 45
    }
})