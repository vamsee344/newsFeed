import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './styles';

const OfflineIndicator: React.FC = () => {
  const isOffline = useSelector((state: RootState) => state.ui.isOffline);

  if (!isOffline) {return null;}

  return (
    <View style={styles.container}>
      <Text style={styles.text}>You are offline</Text>
    </View>
  );
};

export default OfflineIndicator;
