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
        spicies
      }
    }
  }
`;
