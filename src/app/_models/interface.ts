export interface FeaturedPlaylists {
  featuredPlaylists: {
    content: ListProps[];
    name: string;
  };
}

export interface ListProps {
  artwork: string;
  curator_name: string;
  id: string;
  kind: string;
  name: string;
  url: string;
}
