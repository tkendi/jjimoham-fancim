import { useMemo } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client/core';
import { from } from '@apollo/client/link/core';
import { onError } from '@apollo/client/link/error';
import { HttpLink } from '@apollo/client/link/http';
import fetch from 'cross-fetch';
import merge from 'deepmerge';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
  fetch,
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const { extensions } of graphQLErrors) {
      switch (extensions.code) {
        case '404': {
          if (
            operation.operationName === 'groups' ||
            operation.operationName === 'pages'
          ) {
            return forward(operation).map(() => {
              const response: any = {
                data: {},
              };
              response.data[operation.operationName] = [];

              return response;
            });
          }
        }
      }
    }
  }
});

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'network-only',
      },
    },
  });
};

export const initializeApollo = (
  initialState = null,
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState !== null) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache);

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (apolloClient !== null) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (
  initialState: any,
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
