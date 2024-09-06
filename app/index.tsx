import { Link, useNavigation } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale } from 'react-native-size-matters';

export default function Root() {
  const navigation = useNavigation<any>()
  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.textContainer}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headerText, { color: "#EB864B" }]}>FLUXX</Text>
          <Text style={[styles.headerText, { color: "#FFFFFF" }]}>NEWS</Text>
          <Text style={[styles.headerText, { color: "#927ED3" }]}>INDIA</Text>
        </View>
        <View style={styles.subHeadingContainer}>
          <Text style={styles.subHeadingText}>News that flows, clarity that stays!</Text>
        </View>
      </View>
      <Link href="/home/whatsNew">
        <View style={styles.launchButtonContainer}>

            <Text>LAUNCH</Text>
        </View>
      </Link>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  rootContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: moderateScale(150)
  },
  headingContainer: {
    flexDirection: 'row',
    gap: 14
  },
  headerText: {
    fontFamily: "Lalezar_400Regular",
    fontSize: moderateScale(36),
    fontWeight: '400',
    textAlign: 'center'
  },
  subHeadingContainer: {
  },
  subHeadingText: {
    fontSize: moderateScale(20),
    color: '#89DEAF',
    fontFamily: 'Lalezar_400Regular',
    fontWeight: '200'
  },
  launchButtonContainer: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: moderateScale(32),
    paddingVertical: moderateScale(16),
    borderRadius: moderateScale(8),
    cursor: 'pointer',
    // height: moderateScale(60)
  },
  buttonText: {
    fontSize: moderateScale(32),
  },
  launchBtnPress: {
    width: '100%'
  }
})
