import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NewsFeedScreen from './screens/NewsFeedScreen';
import ArticleDetailScreen from './screens/ArticleDetailScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsFeed">
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} options={{ title: 'News Feed' }} />
        <Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} options={{ title: 'Article Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
