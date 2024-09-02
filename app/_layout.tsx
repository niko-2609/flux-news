import { Stack } from 'expo-router/stack';
import { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function Layout(props:any) {
    const [ isEnabled, setIsEnabled ] = useState<any>(false)
  return (
    <SafeAreaProvider style={styles.container}>
            {/* Hide the status bar globally */}
            <StatusBar hidden={true} />
                <Stack screenOptions={{
                    headerShown: false,
                    contentStyle: {backgroundColor: '#211C4'}
                }}>
                    <Stack.Screen name="index" />
                </Stack>
        </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#211C34"
  }
})