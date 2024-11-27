import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles } from '../../api/newsApi';

export const loadArticles = createAsyncThunk('news/loadArticles', async () => {
  const articles = await fetchArticles();
  return articles;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    articles: [],
    loading: false,
    error: null,
  },
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
