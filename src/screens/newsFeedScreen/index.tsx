import React from 'react';
import { FlatList, View, RefreshControl, Text, ActivityIndicator , Button } from 'react-native';
import useNews from '../../hooks/useNews';
import ArticleCard from '../../components/articleCard';
import OfflineIndicator from '../../components/offlineIndicator';
import styles from './styles';

const NewsFeedScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { data: articles = [], isLoading, error, handleRefresh } = useNews();

  const renderItem = ({ item }: { item: any }) => (
    <ArticleCard
      article={item}
      onPress={() => navigation.navigate('ArticleDetail', { article: item })}
    />
  );

  const refreshControl = (
    <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
  );

  const listEmptyComponent = (
    <Text style={styles.emptyText}>No articles available.</Text>
  );

  if (isLoading && articles.length === 0) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading Articles...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <OfflineIndicator />
      {error && !articles.length && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error.message || error.toString()}</Text>
          <Button title="Retry" onPress={handleRefresh} />
        </View>
      )}
      <FlatList
        data={articles}
        keyExtractor={(item, index) => item.id || index.toString()}
        renderItem={renderItem}
        refreshControl={refreshControl}
        ListEmptyComponent={listEmptyComponent}
      />
    </View>
  );
};

export default NewsFeedScreen;
