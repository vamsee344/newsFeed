import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import SplashScreen from '../screens/splashScreen';
import NewsFeedScreen from '../screens/newsFeedScreen';
import ArticleDetailScreen from '../screens/articleDetailScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => {
    return (
        <Stack.Navigator initialRouteName="Splash" screenOptions={{
            headerTitleAlign: 'center',
        }}
        >
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NewsFeed"
                component={NewsFeedScreen}
                options={{ title: 'News Feed' }}
            />
            <Stack.Screen
                name="ArticleDetail"
                component={ArticleDetailScreen}
                options={{ title: 'Article Detail' }}
            />
        </Stack.Navigator>
    );
};

export default RootNavigator;
