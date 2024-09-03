import React from 'react'
import { Stack } from 'expo-router/stack';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const TagLayout = () => {
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
  )
}

export default TagLayout


const styles = StyleSheet.create({
    container:{
      backgroundColor: "#211C34"
    }
  })