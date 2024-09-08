import { Stack } from 'expo-router/stack';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { KronaOne_400Regular } from '@expo-google-fonts/krona-one';
import { Monda_400Regular, Monda_700Bold } from '@expo-google-fonts/monda';
import { Lalezar_400Regular } from '@expo-google-fonts/lalezar';


export default function Layout(props: any) {
  const [fontsLoaded] = useFonts({
    KronaOne_400Regular,
    Monda_400Regular,
    Monda_700Bold,
    Lalezar_400Regular
  });

  if (!fontsLoaded) {
    return null; // TODO: Show loading screen
  }
  return (
    <SafeAreaProvider style={styles.container}>
      {/* Hide the status bar globally */}
      <StatusBar hidden={true} />
      <Stack screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#211C4' }
      }}>
        <Stack.Screen name="index" />
      </Stack>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#211C34"
  }
})