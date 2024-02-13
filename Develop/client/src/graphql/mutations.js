import { gql } from '@apollo/client';

export const SAVE_BOOK = gql`
  mutation SaveBook($bookData: BookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        _id
        title
        author
        description
        image
        link
      }
    }
  }
`;