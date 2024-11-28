export type Article = {
  id: string;
  title: string;
  description: string;
  urlToImage: string;
  content: string;
};

export type RootStackParamList = {
  Splash: undefined;
  NewsFeed: undefined;
  ArticleDetail: {article: Article};
};
