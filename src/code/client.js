export const query = `const GET_DOG_PHOTO = gql\`
query dog($breed: String!) {
  dog(breed: $breed) {
    id
    displayImage
  }
}
\`;`;

export const queryComponent = `const DogPhoto = ({ breed }) => (
  <Query query={GET_DOG_PHOTO} variables={{ breed }}>
    {({ loading, error, data }) => {
      if (loading) return null;
      if (error) return 'Error!';

      return (
        <img src={data.dog.displayImage} />
      );
    }}
  </Query>
);`;

export const dynamic = `<Query
  query={this.state.sort !== 'LIKES' ? GET_MOVIES : GET_LIKES}
>
  {({ loading, data }) => {
    if (loading) return 'Loading...';
    return (
      <div>
        {(data.movies || data.likes).map(movie => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>
    )
  }}
</Query>`;

export const mutation = `const Login = () => (
  <Mutation
    mutation={LOGIN_USER}
    onCompleted={({ login }) => localStorage.setItem('token', login)}
  >
    {(loginUser, { data, error }) => (
      <div style={styles.container}>
        <LoginForm login={loginUser} data={data} />
      </div>
    )}
  </Mutation>
);`;

export const combined = `const TodoApp = () => (
  <Query query={GET_TODOS}>
    {({ loading, data }) => {
      if (loading) return 'Loading...';
      return (
        <Mutation mutation={REMOVE_TODO}>
          {removeTodo =>
            data.todos.map(todo => (
              <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}
        </Mutation>
      );
    }}
  </Query>
);`;

export const adopt = `const TodoContainer = adopt({
  todos: <Query query={GET_TODOS} />,
  removeTodo: ({ render }) => (
    <Mutation mutation={REMOVE_TODO}>
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
})
const App = () => (
  <TodoContainer>
    {({ todos, removeTodo }) => /* ... */ }
  </TodoContainer>
)`;

export const testUtils = `const mocks = [{
  request: { query: SINGLE_ORDER_QUERY, variables: { id: '123' } },
  result: { data: { order: fakeOrder() }},
}];

describe('<Order/>', () => {
  it('Renders loading state', () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <Order id="123" />
      </MockedProvider>
    );
    expect(wrapper.text()).toContain('Loading...');
  })
})`;

export const codegen1 = `query Characters {
  characters(episode: NEW_HOPE) {
    name
    ... on Human {
      homePlanet
    }
    ... on Droid {
      primaryFunction
    }
  }
}`;

export const codegen2 = `export type CharactersQuery = {
  characters: Array<{
    __typename: 'Human',
    name: string,
    homePlanet: ?string
  } | {
    __typename: 'Droid',
    name: string,
    primaryFunction: ?string
  }>
}`;

export const boost = `import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://your-server-url.me/graphql"
});`;

export const stateMgmt1 = `const GET_DOG = gql\`
  query getDogByBreed($breed: String!) {
    dog(breed: $breed) {
      images {
        url
        id
        isLiked @client
      }
    }
  }
\`;`;

export const stateMgmt2 = `const FilterLink = ({ filter, children }) => (
  <ApolloConsumer>
    {client => (
      <Link
        onClick={() =>
          client.writeData({ data: { visibilityFilter: filter } })
        }
      >
        {children}
      </Link>
    )}
  </ApolloConsumer>
);`;

// const GET_DOGS = gql`
//   {
//     dogs {
//       id
//       breed
//       displayImage
//     }
//   }
// `;

// const Dogs = () => (
//   <Query query={GET_DOGS} pollInterval={1000}>
//     {({ loading, data, error, fetchMore }) => {
//       if (loading) return null;
//       if (error) return 'Error!';

//       return data.dogs.map(dog => <Dog key={dog.id} {...dog} />);
//     }}
//   </Query>
// );
