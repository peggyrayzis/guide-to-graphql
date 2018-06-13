export const restExample = `GET /api/pizza/cheese
GET /api/pizza/supreme
GET /api/pizza/margherita`;

export const gqlExample = `query {
  pizza {
    cheese {
      mozzarella
    }
    toppings {
      basil
      mushrooms
    }
  }
}`;

export const apolloServer = `const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen()
  .then(() => {
    console.log('Server ready! 🚀')
  })
`;

// const fetchMovies = sort => async dispatch => {
//   dispatch(requestMovies(sort));

//   const results = await fetch('https://movieapi.com/movies');
//   const movies = await results.json();

//   const sortedMovies =
//     sort === 'POPULARITY'
//       ? movies.sort((a, b) => b.popularity - a.popularity)
//       : movies;

//   return dispatch(receiveMovies(sort, sortedMovies));
// };

// const resolvers = {
//   Query: {
//     movies: async (root, { sort }) => {
//       const results = await fetch('https://movieapi.com/movies');
//       const movies = await results.json();

//       return sort === 'POPULARITY'
//         ? movies.sort((a, b) => b.popularity - a.popularity)
//         : movies;
//     },
//   },
// };

export const dataSource = `class MovieAPI extends RESTDataSource {
  baseURL = 'https://movieapi.com/';

  getProgram(id) {
    return this.get(\`movies/\${id}\`);
  }

  async getMostViewedMovies() {
    const body = await this.get('movies', {
      per_page: 10,
      order_by: 'most_viewed',
    });
    return body.results;
  }
}`;
