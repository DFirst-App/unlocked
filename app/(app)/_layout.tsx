import { useEffect } from 'react';
import { Stack, router } from 'expo-router';
import { Platform } from 'react-native';
import { onAuthChanged } from '../firebase.config';

function AppLayout() {
  useEffect(() => {
    // Only enforce Firebase auth on mobile, not on web
    if (Platform.OS === 'web') {
      return; // Allow web access without Firebase auth
    }

    const unsubscribe = onAuthChanged((user) => {
      if (!user) {
        // If not authenticated, redirect to login (mobile only)
        router.replace('/');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFFFFF' },
      }}>
      <Stack.Screen name="home" />
      <Stack.Screen 
        name="bots/trading" 
        options={{
          contentStyle: { backgroundColor: '#FFFFFF' }
        }}
      />
    </Stack>
  );
}

export default AppLayout; 