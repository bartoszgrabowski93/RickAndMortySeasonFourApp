import { gql } from "@apollo/client";

export const GET_EPISODES = gql`
  query GetEpisodes {
    episodes {
      results {
        id
        name
        air_date
      }
    }
  }
`;

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        species
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query GetcharactersByIds($id: ID!) {
    character(id: $id) {
      id
      name
      image
      status
      species
      type
      gender
      origin {
        name
      }
      location {
        name
      }
    }
  }
`;
