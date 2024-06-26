export interface Author {
    username: string;
    bio: string;
    image: string;
    following: boolean;
};

export interface ArticleProps {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: string;
    updatedAt: string;
    favorited: boolean;
    favoritesCount: number;
    author: Author;
};

export interface ArticlesResponse {
    articles: ArticleProps[];
    articlesCount: number;
};

export interface PreviewProps extends ArticleProps {
    onClickLike: (slug: string, favorited: boolean) => void;
};