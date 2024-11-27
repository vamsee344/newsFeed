import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import Share from 'react-native-share'; // For sharing functionality

type ArticleDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'ArticleDetail'>;
  navigation: NativeStackNavigationProp<RootStackParamList, 'ArticleDetail'>;
};

const ArticleDetailScreen: React.FC<ArticleDetailScreenProps> = ({ route, navigation }) => {
  const { article } = route.params;

  const handleShare = async () => {
    try {
      await Share.open({
        title: article.title,
        message: `${article.title}\n\nRead more: ${article.content}`,
        url: article.urlToImage,
      });
    } catch (error) {
      console.error('Share error: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content || 'Full content is unavailable.'}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Share" onPress={handleShare} />
        <Button title="Back to Feed" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ArticleDetailScreen;
