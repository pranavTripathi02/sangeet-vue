export type TArtist = {
  _id: string;
  first_name: string;
  last_name: string;
  artist_image: string;
  listens: string;
  albums?: { id: string }[];
  tracks?: { id: string }[];
};

export type TAlbum = {
  _id: string;
  title: string;
  image: string;
  tracks: { id: string }[];
  artist?: { id: string; first_name?: string; last_name?: string };
  duration?: number;
};

export type TTrack = {
  _id: string;
  title: string;
  image?: string;
  artist: {
    id: number;
    first_name: string;
    last_name: string;
  };
  album?: {
    id: number;
    title: string;
  };
  listens: number;
  // trendingRank?: number;
  track_num?: number;
  addedOn: Date;
  track_uri?: string;
};

export type TPlaylist = {
  _id: string;
  title: string;
  description?: string;
  tracks: { id: string }[];
  image: string;
  creator?: {
    id: string;
    name: string;
  };
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  password?: string;
  roles: "user" | "admin";
};
