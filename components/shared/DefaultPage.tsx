import { Stack } from 'expo-router/stack';
import React from 'react'

const DefaultPage = () => {
    return (
        <Stack> <Stack.Screen name="default" options={{ headerShown: false }} /> </Stack>
    )
}

export default DefaultPage