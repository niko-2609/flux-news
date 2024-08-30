import DefaultPage from '@/components/shared/DefaultPage';
import { Stack } from 'expo-router/stack';
import { useState } from 'react';
import { Text } from 'react-native';

export default function Layout(props:any) {
    const [ isEnabled, setIsEnabled ] = useState<any>(false)
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}

// import { Stack } from 'expo-router';

// export default Stack;