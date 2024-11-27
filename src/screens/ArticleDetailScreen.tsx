import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ArticleDetailScreen: React.FC<{ route: any }> = ({ route }) => {
  const { article } = route.params;
  const navigation = useNavigation();

  const handleShare = () => {
    // Implement share functionality
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content}</Text>
      <Button title="Share" onPress={handleShare} />
      <Button title="Back to Feed" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  image: { width: '100%', height: 200, marginBottom: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  content: { fontSize: 16, marginBottom: 10 },
});

export default ArticleDetailScreen;
