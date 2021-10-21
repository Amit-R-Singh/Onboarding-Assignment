import { ApolloClient, InMemoryCache, HttpLink, HttpLink } from '@apollo/client';

const HttpLink = new HttpLink({uri: "/graphql"});

const client = new ApolloClient({
  uri: 'https://api.example.com',
  cache: new InMemoryCache()
});