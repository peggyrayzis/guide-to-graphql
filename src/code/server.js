export const restExample = `GET /api/pizza/cheese
GET /api/pizza/sauce
GET /api/pizza/toppings`;

export const gqlExample = `query {
  pizza {
    cheese {
      mozzarella
    }
    toppings {
      basil
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

export const resolvers = `const resolvers = {
  Query: {
    movies: async (root, { sort }) => {
      const results = await fetch('https://movieapi.com/movies');
      const movies = await results.json();

      return sort === 'POPULARITY'
        ? movies.sort((a, b) => {
            return b.popularity - a.popularity;
          })
        : movies;
    },
  },
};`;

const dataSource = `class MovieAPI extends RESTDataSource {
  baseURL = 'https://movieapi.com/';

  getProgram(id) {
    return this.get(\`movies/\${id}\`);
  }

  async getMostViewedMovies() {
    const body = await this.get('movies', {
      hours: 1,
      per_page: 10,
      order_by: 'most_viewed',
    });
    return body.results;
  }
}`;
