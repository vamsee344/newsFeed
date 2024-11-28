import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

const SplashScreen: React.FC<Props> = ({navigation}) => {
  useEffect(() => {
    // Simulate a loading delay (e.g., API calls, authentication check)
    const timer = setTimeout(() => {
      navigation.replace('NewsFeed'); // Navigate to the NewsFeed screen after 2 seconds
    }, 2000);
    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to News App</Text>
      <ActivityIndicator size="large" color="#007AFF" />
    </View>
  );
};

export default SplashScreen;
