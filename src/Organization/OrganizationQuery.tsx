import gql from "graphql-tag"

export default gql`
  query($login: String!) {
    organization(login: $login) {
      url
    }
  }
`
