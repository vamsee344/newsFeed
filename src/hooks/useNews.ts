import {useQuery, useQueryClient} from 'react-query';
import {fetchArticles} from '../api/newsApi';
import {useDispatch, useSelector} from 'react-redux';
import {setOffline} from '../redux/slices/uiSlice';
import {useEffect, useCallback} from 'react';
import NetInfo, {NetInfoState} from '@react-native-community/netinfo';

import {RootState} from '../redux/store';
import {Article} from '../types';

const useNews = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const isOffline = useSelector((state: RootState) => state.ui.isOffline);

  // Fetch articles using react-query
  const {data, error, isLoading, refetch} = useQuery<Article[], Error>(
    'articles',
    fetchArticles,
    {
      initialData: () =>
        isOffline ? queryClient.getQueryData<Article[]>('articles') : undefined,
      enabled: !isOffline,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      onSuccess: data => {
        queryClient.setQueryData('articles', data);
      },
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 60,
    },
  );
  const handleConnectivityChange = useCallback(
    (state: NetInfoState) => {
      if (state.isConnected && state.isInternetReachable) {
        if (isOffline) {
          dispatch(setOffline(false));
        }
      } else if (!isOffline) {
        dispatch(setOffline(true));
      }
    },
    [dispatch, isOffline],
  );
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);
    return () => unsubscribe();
  }, [handleConnectivityChange]);

  const handleRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  return {data, error, isLoading, handleRefresh};
};

export default useNews;
