import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      _id
      title
      author
      description
      image
      link
    }
  }
`;