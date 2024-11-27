import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const OfflineIndicator: React.FC = () => {
  const isOffline = useSelector((state: RootState) => state.ui.isOffline);

  if (!isOffline) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are offline</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: 'red', padding: 10 },
  text: { color: '#fff', textAlign: 'center' },
});

export default OfflineIndicator;
