import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../redux/slices/newsSlice';
import { RootState, AppDispatch } from '../redux/store';
import ArticleCard from '../components/ArticleCard';
import OfflineIndicator from '../components/OfflineIndicator';

const NewsFeedScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading } = useSelector((state: RootState) => state.news);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <OfflineIndicator />
      <FlatList
        data={articles}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={() => navigation.navigate('ArticleDetail', { article: item })} />
        )}
        refreshControl={<RefreshControl refreshing={loading} onRefresh={() => dispatch(loadArticles())} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
});

export default NewsFeedScreen;
