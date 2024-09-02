import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{ 
        tabBarActiveTintColor: 'blue', 
        headerShown: false,
      }}
      sceneContainerStyle={{
        backgroundColor: '#211C4'
      }}
    >
      <Tabs.Screen
        name="whatsNew"
        
        options={{
          title: "What's New",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerLeft: () => null,
          headerTitle: props => <Text>Whats new</Text>,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerLeft: () => null,
        }}
      />
    </Tabs>
  );
}
