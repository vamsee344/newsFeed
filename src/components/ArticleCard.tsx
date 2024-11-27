import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ArticleCard: React.FC<{ article: any; onPress: () => void }> = ({ article, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: article.urlToImage }} style={styles.thumbnail} />
    <View style={styles.info}>
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.summary}>{article.description}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#f8f8f8', borderRadius: 5, overflow: 'hidden' },
  thumbnail: { width: 100, height: 100 },
  info: { flex: 1, padding: 10 },
  title: { fontSize: 16, fontWeight: 'bold' },
  summary: { fontSize: 14, color: '#555' },
});

export default ArticleCard;
