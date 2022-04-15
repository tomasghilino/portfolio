import { GraphQLClient, ClientContext } from 'graphql-hooks';
const client = new GraphQLClient({
  url: 'https://graphql.datocms.com/',
  headers: {
    Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_DATOCMS_APIKEY,
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ClientContext.Provider value={client}>
      <title>Tomas Ghilino</title>
      <Component {...pageProps} />
    </ClientContext.Provider>
  );
}

export default MyApp;
