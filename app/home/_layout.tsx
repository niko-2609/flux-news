import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router/stack';

export default function TabLayout() {
  return (
    <Tabs 
    initialRouteName='whatsNew'
    screenOptions={{ 
      unmountOnBlur: true,
        tabBarActiveTintColor: '#cfbf15', 
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#211C34',
          shadowOpacity: 0,
          elevation: 0
        }
      }}
      sceneContainerStyle={{
        backgroundColor: '#211C4'
      }}
    >
      <Tabs.Screen
        name="whatsNew"
        options={({navigation}) => { return {
          title: "What's New",
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerLeft: () => null,
          headerTitle: props => <Text>Whats new</Text>,
          tabBarButton : props => (
            <TouchableOpacity {...props} onPress={() => navigation.navigate('whatsNew', {from: 'tabBarButton'})}/>
          )

        }}
      }
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: 'Feed',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          headerLeft: () => null,
        }}
      />
      <Tabs.Screen
      name="tags/[id]"
      options={{
        href: null,
      }}
    />
    </Tabs>
  );
}
