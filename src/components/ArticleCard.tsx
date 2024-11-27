import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Article } from '../types';

type Props = {
  article: Article;
  onPress: () => void;
};

const ArticleCard: React.FC<Props> = ({ article, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' ,alignItems:'center'},
  image: { width: 100, height: 100 },
  content: { flex: 1, padding: 10 },
  title: { fontWeight: 'bold', fontSize: 16 },
  description: { color: '#666', marginTop: 5 },
});

export default ArticleCard;
