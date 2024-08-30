import { Link, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Root() {

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);


  return (
    <SafeAreaView> 
      <Link href="/(tabs)/feed">Navigate to Feed</Link>
    </SafeAreaView>
  );
}