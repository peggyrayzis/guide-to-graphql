export const definition = `const withClick = (WrappedComponent) => {
  return class extends React.Component {
    state = { clicked: false }

    handleClick = () => {
      this.setState(prevState => ({ clicked: !prevState.clicked }))
    }

    render = () => (
      <div onClick={this.handleClick}>
        <WrappedComponent {...this.props} {...this.state}/>
      </div>
    )
  }
}`;

export const propIndirection = `const SoManyProps =
  ({ loading, fetchMore, mutate, client, data, refetch }) => (
    <div>
    { /* insert really long component here */ }
    </div>
  );

export default compose(
  withQuery,
  withMutation,
  withSubscription,
  withApollo
)(SoManyProps);`;

export const noDynamic = `const GET_PHOTOS = gql\`{
  photos {
    id
    url
  }
}\`

export default graphql(GET_PHOTOS, {
  props: ({ data: { loading, photos } }) => ({ loading, photos })
})(Photos)`;

export const hocQuery = `const DogPhoto = ({ loading, data }) => {
  if (loading) return 'Loading...';
  return (
    <img src={data.dog.displayImage} />
  );
};

export default graphql(GET_DOG_PHOTO, {
  options: (props) => ({
    variables: { breed: props.breed }
  })
})(DogPhoto)`;

export const fetchMore = `fetchMore({
  variables: { /* new query variables */ },
  updateQuery: (previous, { fetchMoreResult }) => {
    /* return next query result */
  }
})`;

export const auth = `const client = new ApolloClient({
  uri: 'https://fullstack-workshop-server.glitch.me/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers,
        authorization: localStorage.getItem('token'),
      },
    }));
  }
});`;

export const mutation = `import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const ADD_TODO = gql\`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
\`;`;

export const mutationComponent = `const AddTodo = () => {
  let input;
  return (
    <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo({ variables: { type: input.value } });
            input.value = "";
          }}>
          <input ref={node => { input = node }} />
          <button type="submit">Add Todo</button>
        </form>
      )}
    </Mutation>
  );
};`;

export const update = `<Mutation
  mutation={ADD_TODO}
  update={(cache, { data: { addTodo } }) => {
    const { todos } = cache.readQuery({ query: GET_TODOS });
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: todos.concat([addTodo]) }
    });
  }}
>
</Mutation>`;

export const ssr = `import { ApolloProvider, getDataFromTree } from 'react-apollo';
      
const components = (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);

getDataFromTree(components).then(() => {
  const html = ReactDOMServer.renderToString(components);
});`;
