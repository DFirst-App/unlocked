import { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { router } from 'expo-router';

export default function OAuthCallback() {
  useEffect(() => {
    // On web, preserve query parameters when redirecting to home
    // The home screen will handle the OAuth callback from URL parameters
    if (Platform.OS === 'web' && typeof window !== 'undefined') {
      const queryString = window.location.search;
      router.replace(`/(app)/home${queryString}`);
    } else {
      router.replace('/(app)/home');
    }
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

