import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const OfflineIndicator: React.FC = () => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You are offline</Text>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'red', padding: 5},
  text: {color: 'white', textAlign: 'center'},
});

export default OfflineIndicator;
