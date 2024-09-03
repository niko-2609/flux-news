import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Root() {
  return (
    <SafeAreaView> 
      <Link href="/home/feed">Navigate to Feed</Link>
    </SafeAreaView>
  );
}

