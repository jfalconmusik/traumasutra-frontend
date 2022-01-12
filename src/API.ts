/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSongInput = {
  title: string,
  url: string,
};

export type Song = {
  __typename: "Song",
  id: string,
  title: string,
  url: string,
};

export type UpdateSongInput = {
  id: string,
  title?: string | null,
  url?: string | null,
};

export type DeleteSongInput = {
  id: string,
};

export type TableSongFilterInput = {
  id?: TableIDFilterInput | null,
  title?: TableStringFilterInput | null,
  url?: TableStringFilterInput | null,
};

export type TableIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type SongConnection = {
  __typename: "SongConnection",
  items?:  Array<Song | null > | null,
  nextToken?: string | null,
};

export type CreateSongMutationVariables = {
  input: CreateSongInput,
};

export type CreateSongMutation = {
  createSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type UpdateSongMutationVariables = {
  input: UpdateSongInput,
};

export type UpdateSongMutation = {
  updateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type DeleteSongMutationVariables = {
  input: DeleteSongInput,
};

export type DeleteSongMutation = {
  deleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type GetSongQueryVariables = {
  id: string,
};

export type GetSongQuery = {
  getSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type ListSongsQueryVariables = {
  filter?: TableSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSongsQuery = {
  listSongs?:  {
    __typename: "SongConnection",
    items?:  Array< {
      __typename: "Song",
      id: string,
      title: string,
      url: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSongSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  url?: string | null,
};

export type OnCreateSongSubscription = {
  onCreateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type OnUpdateSongSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  url?: string | null,
};

export type OnUpdateSongSubscription = {
  onUpdateSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};

export type OnDeleteSongSubscriptionVariables = {
  id?: string | null,
  title?: string | null,
  url?: string | null,
};

export type OnDeleteSongSubscription = {
  onDeleteSong?:  {
    __typename: "Song",
    id: string,
    title: string,
    url: string,
  } | null,
};
