/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($id: ID, $title: String, $url: String) {
    onCreateSong(id: $id, title: $title, url: $url) {
      id
      title
      url
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($id: ID, $title: String, $url: String) {
    onUpdateSong(id: $id, title: $title, url: $url) {
      id
      title
      url
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($id: ID, $title: String, $url: String) {
    onDeleteSong(id: $id, title: $title, url: $url) {
      id
      title
      url
    }
  }
`;
