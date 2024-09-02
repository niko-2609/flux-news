import { Stack } from 'expo-router/stack';
import { useState } from 'react';


export default function Layout(props:any) {
    const [ isEnabled, setIsEnabled ] = useState<any>(false)
  return (
    <Stack screenOptions={{
        headerShown: false
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
