import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
      flexDirection: 'row',
      margin: 5,
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
      alignItems:'center'
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 8,
      margin: 5,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#333',
    },
    description: {
      color: '#777',
      marginTop: 5,
      fontSize: 14,
    },
  });

  export default styles;