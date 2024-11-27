import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../../api/newsApi';
import { Article } from '../../types';

export const loadArticles = createAsyncThunk('news/loadArticles', fetchArticles);

type NewsState = {
  articles: Article[];
  loading: boolean;
  error: string | null;
};

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload;
      })
      .addCase(loadArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load articles';
      });
  },
});

export default newsSlice.reducer;
