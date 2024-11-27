export type Article = {
    title: string;
    description: string;
    urlToImage: string;
    content: string;
  };
  
  export type RootStackParamList = {
    NewsFeed: undefined;
    ArticleDetail: { article: Article };
  };
  