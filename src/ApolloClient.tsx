import ApolloClient from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" })

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`
    }
  }
})

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
