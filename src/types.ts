export type TArtist = {
  name: string;
  image: string;
  albums?: TAlbum[];
  tracks?: TTrack[];
};

export type TAlbum = {
  name: string;
  image: string;
  tracks: number;
  duration?: number;
};

export type TTrack = {
  id: string;
  title: string;
  image?: string;
  artist: TArtist;
  album?: TAlbum;
  listens: number;
  trendingRank: number;
  trackNum?: number;
  addedOn: Date;
  link?: string;
};

export type TPlaylist = {
  title: string;
  tracks: TTrack[];
  image: string;
  creator: TUser;
};

export type TUser = {
  name: string;
  email: string;
  password?: string;
  roles: "user" | "admin";
};
