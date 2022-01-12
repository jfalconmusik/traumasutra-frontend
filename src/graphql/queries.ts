/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSong = /* GraphQL */ `
  query GetSong($id: ID!) {
    getSong(id: $id) {
      id
      title
      url
    }
  }
`;
export const listSongs = /* GraphQL */ `
  query ListSongs(
    $filter: TableSongFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSongs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        url
      }
      nextToken
    }
  }
`;
