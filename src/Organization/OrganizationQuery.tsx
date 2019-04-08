import gql from "graphql-tag";

export default gql`
  query($login: String!) {
    organization(login: $login) {
      repositories(first: 100) {
        nodes {
          name
          issues(first: 100, states: CLOSED) {
            nodes {
              title
              id
            }
          }
        }
      }
    }
  }
`;
