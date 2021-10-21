/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Root from './route.js'
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks';

const App: () => Node = () => {
  const cache = new InMemoryCache({ addTypename: false })
  const client = new ApolloClient({
    uri: 'https://dev.sixergame.com/v1/graphql',
    cache
  })
  

  return (
    <>
      <ApolloProvider client={client}> 
        <Root />
      </ApolloProvider>
    </>
  );
};

export default App;
