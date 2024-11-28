import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Article} from '../../types';
import styles from './styles';
import defaultImage from '../../assets/images/news.jpg';

type Props = {
  article: Article;
  onPress: () => void;
};

const ArticleCard: React.FC<Props> = ({article, onPress}) => {
  const imageUrl = article.urlToImage
    ? {uri: article.urlToImage}
    : defaultImage;
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ArticleCard;
