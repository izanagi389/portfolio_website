// 共通の型定義
export interface Content {
  id: string;
  title: string;
  thumbnail: {
    url: string;
  };
  createdAt: string;
}

export interface BlogContents {
  contents: Content[];
  totalCount: number;
}

export interface Work {
  name: string;
  url: string;
  img: string;
}

export interface Profile {
  ncikname: {
    title: string;
    content: string;
  };
  hobby: {
    title: string;
    content: string;
  };
}

export interface Account {
  name: string;
  href: string;
  class: string;
}

export interface NavigationItem {
  name: string;
  description: string;
  href: string;
  icon: any;
}

export interface TopicItem {
  id: string;
  text: string;
  tag: string;
  children: TopicItem[];
}

export interface BlogPost {
  id: string;
  title: string;
  blogContent: any[];
  createdAt: string;
} 