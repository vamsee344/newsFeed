import React, { useEffect } from 'react';
import { FlatList, RefreshControl, View, StyleSheet, Text, ActivityIndicator, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../redux/slices/newsSlice';
import { RootState } from '../redux/store';
import ArticleCard from '../components/ArticleCard';
import OfflineIndicator from '../components/OfflineIndicator';

type NewsArticle = {
  title: string;
  description: string;
  urlToImage: string;
};

const NewsFeedScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  const handleRefresh = () => {
    dispatch(loadArticles());
  };

  const renderArticle = ({ item }: { item: NewsArticle }) => (
    <ArticleCard article={item} onPress={() => navigation.navigate('ArticleDetail', { article: item })} />
  );

  if (loading && articles.length === 0) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <OfflineIndicator />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Retry" onPress={handleRefresh} />
        </View>
      ) : null}
      {articles.length === 0 && !loading && !error ? (
        <Text style={styles.emptyText}>No articles available</Text>
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderArticle}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={handleRefresh} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorContainer: { alignItems: 'center', margin: 10 },
  errorText: { color: 'red', textAlign: 'center' },
  emptyText: { textAlign: 'center', color: '#666', marginTop: 20 },
});

export default NewsFeedScreen;
