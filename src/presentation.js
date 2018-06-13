/* eslint jsx-a11y/accessible-emoji: 0 */

// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  ListItem,
  List,
  Image,
  Slide,
  Text,
  Heading,
  CodePane,
  Notes,
} from 'spectacle';

// Spectacle Theme & Layout components
import { theme, colors, size } from './theme';
import * as Layout from './layout';

// Prism plugins
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';

// Server & client code samples
import * as client from './code/client';
import * as server from './code/server';

// Preload images
import preloader from 'spectacle/lib/utils/preloader';
import images from './images';

preloader(images);

// Require CSS
require('normalize.css');

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        contentWidth={1500}
        contentHeight={800}
        controls={false}
        progress="none"
        theme={theme}
      >
        <Slide bgImage={images.title} />
        <Slide bgColor="secondary">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              alignSelf: 'center',
            }}
          >
            <Image
              src={images.peggy}
              height="400px"
              margin="0 60px 0 0"
              style={{ borderRadius: '50%' }}
            />
            <Layout.Column>
              <Text margin="20px 0px 0px 0px" bold textColor="tertiary">
                @peggyrayzis
              </Text>
              <Image
                src={images.apollo}
                width="550px"
                margin="10px 0 0 -40px"
              />
            </Layout.Column>
          </div>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            Before I was an open source engineer for Apollo, I was a UI engineer
            spending most of my time on the frontend. One thing I learned is
            that development and especially front end development is all about
            communication.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Frontend development is<br />all about{' '}
            <span style={{ color: colors.primary }}>communication</span>.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            On any given day, you're communicating with a lot of different
            people to execute one feature. You're communicating with your fellow
            frontend engineers to build UI. You're communicating with
            stakeholders to identify product requirements. You're communicating
            with backend developers to identify your data requirements. Finally,
            you're also communicating with various APIs in order to display the
            data you need in your UI.
          </Notes>
          <Heading style={{ textAlign: 'left' }}>
            You're communicating with:
          </Heading>
          <List>
            {['Teammates', 'Stakeholders', 'Backend developers', 'APIs'].map(
              item => (
                <Appear
                  key={item}
                  transitionDuration={400}
                  startValue={{ maxHeight: 0, opacity: 0 }}
                  endValue={{ maxHeight: 400, opacity: 1 }}
                >
                  <ListItem bold textSize={size.medium} textColor="primary">
                    {item}
                  </ListItem>
                </Appear>
              ),
            )}
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            Communication is extremely important. Any inefficiencies or back and
            forth between all of these groups can slow us down. What if, as
            frontend developers, we could communicate more efficiently? If we
            could, I think we could ship products faster.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            If we can communicate<br />more effectively, can we ship products{' '}
            <span style={{ color: colors.primary }}>faster</span>?
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            GraphQL is all about communication. It's a specification that
            describes how to communicate between clients and services. With
            GraphQL, services describe the data they have and clients describe
            the data they want. GraphQL acts as a layer between the two to
            manage this communication. But what does this actually look like in
            practice?
          </Notes>
          <Image src={images.communication} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Your GraphQL server is where you define a schema - kind of like a
            blueprint - for your data. This schema is strongly typed and it's
            how the underlying services describe the data they have.
            <br />
            <br />
            On the client, you'll describe the data you need to build your UI
            using a GraphQL query. This query is sent to your GraphQL server
            where it's validated against your schema. Because GraphQL is
            strongly typed, you can take advantage of some great tooling like
            autocomplete...
          </Notes>
          <Heading>What is GraphQL?</Heading>
          <Layout.Row align="flex-end">
            <Appear>
              <Layout.Column style={{ padding: '20px' }}>
                <Image src={images.schema} margin="0px" height="400px" />
                <Text textSize={size.small}>
                  1. Define a{' '}
                  <span
                    style={{ color: colors.quartenary, fontWeight: 'bold' }}
                  >
                    schema
                  </span>{' '}
                  for your data on the server
                </Text>
              </Layout.Column>
            </Appear>
            <Appear>
              <Layout.Column style={{ padding: '20px' }}>
                <Image src={images.query} margin="0px" height="400px" />
                <Text textSize={size.small}>
                  2. Write a{' '}
                  <span
                    style={{ color: colors.quartenary, fontWeight: 'bold' }}
                  >
                    query
                  </span>{' '}
                  on the client to get the data you need
                </Text>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide
          bgImage={images.annotatedPlayground}
          bgRepeat="no-repeat"
          bgSize="contain"
        >
          <Notes>
            There's also some really awesome IDEs like GraphQL Playground to
            test out your queries, like you see here. On the left, we're hitting
            our GraphQL endpoint with a query that describes the data we want.
            In the middle, you'll see the payload we get back. You'll notice
            that the shape of the response matches the shape of the request,
            nothing more or less. On the right, you'll see a schema explorer.
            GraphQL automatically generates this for you thanks to its strong
            type system. Regardless of where the data is coming from, you can
            view all available queries, mutations and types in your GraphQL API.
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            This sounds cool but who's actually using GraphQL in production
            today?
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Who's using GraphQL?
          </Heading>
        </Slide>
        <Slide bgImage={images.companies}>
          <Notes>
            Companies ranging from startups to enterprises, in a variety of
            industries ranging from tech to e-commerce are all successfully
            using GraphQL to power some of their most important applications.
            And this list is exponentially growing year after year.
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            No conversation about GraphQL would be complete without a comparison
            to REST. They're both API technologies but approach client/server
            communication a bit differently. I'm from New York so I'm going to
            illustrate this using my favorite food, pizza, as an example.
            <br />
            <br />
            A frontend developer walks into a REST pizzeria. On the menu are
            only three types of pizza, or resources. What if we want a special
            kind of pizza with some ingredients from the supreme and some
            ingredients from the margherita? At the REST pizzeria, you gotta
            roll up your sleeves, go back into the kitchen and make it yourself.
            You're taking ingredients off of one pizza and combining them with
            another pizza. This is all manual so it gets pretty messy.
            <br />
            <br />
            At the GraphQL pizzeria, things are a lot more modern. You're handed
            a schema or a menu that describes all of the possible topping
            combinations you can choose from. You're no longer limited to just
            the 3 pizzas from before, you can combine ingredients to order your
            custom pie. When it's ready, the waiter hands you a perfectly
            assembled pizza.
          </Notes>
          <Heading>REST vs. GraphQL 🍕</Heading>
          <Layout.Row align="flex-start">
            <Appear>
              <Layout.Column margin="0 20px 0 0">
                <Text bold textSize={size.medium}>
                  REST
                </Text>
                <CodePane
                  theme="light"
                  source={server.restExample}
                  lang="bash"
                />
                <List>
                  <ListItem textSize={size.small}>
                    Filter down the data
                  </ListItem>
                  <ListItem textSize={size.small}>
                    Perform waterfall requests for related data
                  </ListItem>
                  <ListItem textSize={size.small}>
                    Aggregate the data yourself
                  </ListItem>
                </List>
              </Layout.Column>
            </Appear>
            <Appear>
              <Layout.Column margin="0 0 0 20px">
                <Text textSize={size.medium} bold>
                  GraphQL
                </Text>
                <Layout.Row>
                  <CodePane
                    theme="light"
                    source={server.gqlExample}
                    lang="graphql"
                    style={{ minWidth: '350px' }}
                  />
                  <List margin="0px">
                    <ListItem textSize={size.small}>
                      Receive exactly what you ask for
                    </ListItem>
                    <ListItem textSize={size.small}>
                      No aggregating or filtering data
                    </ListItem>
                  </List>
                </Layout.Row>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            In other words, this is what your pizza looks like with REST. And
            this is what your pizza looks like with GraphQL. Maybe I'm just a
            New York City pizza snob but I'd much rather have the one on the
            right. I don't want to rip on REST too hard here,
          </Notes>
          <Layout.Row align="flex-end">
            <Layout.Column>
              <Heading>REST</Heading>
              <Image src={images.uglyPizza} style={{ borderRadius: '15px' }} />
              <Text>A hot mess 😞</Text>
            </Layout.Column>
            <Appear>
              <Layout.Column>
                <Heading>GraphQL</Heading>
                <Image src={images.pizza} style={{ borderRadius: '15px' }} />
                <Text>Perfect every time 😍</Text>
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            It turns out that layering GraphQL on top of REST can fix a lot of
            REST's shortcomings. That's the awesome thing about switching to
            GraphQL - it doesn't require an entire rewrite. You can migrate
            incrementally by building a GraphQL server over your existing REST
            endpoints and microservices. When backend developers don't have to
            worry about creating a new REST endpoint for every data combination,
            they can actually start to architect their REST APIs in a more
            thoughtful way.
          </Notes>
          <Heading>GraphQL over REST</Heading>
          <Layout.Row align="flex-start">
            <Layout.Column>
              <Image src={images.gqlOverRest} height="550px" />
            </Layout.Column>
            <Layout.Column>
              <List>
                {[
                  'Start with the APIs you already have & migrate incrementally',
                  'Reuse filtering and sorting logic across platforms',
                  'Ship features faster without writing new endpoints',
                ].map(item => (
                  <ListItem key={item} textSize={size.small}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            So far we've talked a lot about APIs. But I'm a front end developer.
            What does it look like to go down this path? Before we can answer
            that, it's important to know where we're starting first.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            I'm a frontend developer.
          </Heading>
          <Appear
            transitionDuration={400}
            startValue={{ maxHeight: 0, opacity: 0 }}
            endValue={{ maxHeight: 400, opacity: 1 }}
          >
            <Heading
              textColor="primary"
              style={{ textAlign: 'left', lineHeight: 1.2 }}
            >
              What does it look like to<br />go down this path?
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            As frontend developers, the apps we build are increasingly data
            driven. We're building for mobile, wearables, VR, IOT - all separate
            clients requesting data from a multitude of different microservices.
            We have to meet our users where they are so we have to keep building
            for new platforms. Over time, this starts to get messy.
          </Notes>
          <Heading>Our apps are data driven</Heading>
          <Image src={images.dataDriven} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            To top it off, managing that data is extremely complex. Before you
            even make your first request, you have to think about state
            management concerns like reducers and middleware and async action
            creators if you're using Redux. Then, you have to worry about how
            you're going to build necessary features like pagination and
            optimistic mutations.
            <br />
            <br />
            I'd like you all to think about the last frontend feature you worked
            on. How much time was actually spent building UI? I'd be willing to
            bet that most of your time was spent dealing with data management
            issues instead than actually building UI and that's a problem.
          </Notes>
          <Heading>Data management is complex</Heading>
          <Layout.Row align="center">
            <Layout.Column>
              <Image src={images.stateMgmt} />
            </Layout.Column>
            <Appear>
              <Text textSize={size.medium}>+</Text>
            </Appear>
            <Appear>
              <Layout.Column>
                <Image src={images.features} />
              </Layout.Column>
            </Appear>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            To make matters worse, you're duplicating all of the code for
            fetching data and sorting it and aggregating it across every new
            client you build. Not only does this exponentially increase your
            maintenance burden, it also leads to bugs. Luckily there's a
            solution
          </Notes>
          <Layout.Row align="center">
            <Image src={images.duplication} height="650px" />
            <Heading>Duplicated logic across clients</Heading>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            And that solution is GraphQL and Apollo. Instead of writing complex
            code for fetching and transforming the data into the shape you need,
            you just create a GraphQL query and bind it to your UI using
            Apollo's Query component. Apollo Client will take care of making the
            request, caching it, tracking loading and error state, as well as
            updating your UI.
          </Notes>
          <Heading>Apollo reduces complexity</Heading>
          <Image src={images.complexity} width="95%" />
        </Slide>
        <Slide bgImage={images.tip1}>
          <Notes>
            Here's my first tip of the day! Implementing GraphQL with Apollo
            will reduce the data management code you have to write and maintain.
            We recommend using the Apollo cache as your single source of truth
            for all state management, whether it's local or remote. Let's dive
            into what that would look like.
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            One of the best features of Apollo client is that it intelligently
            normalizes and caches your data for you. If you're using any other
            state management solution like Redux, you have to use something like
            normalizr to do this manually and manage caching yourself. This gets
            really messy. With Apollo, you dont have to write or maintain that
            code yourself. The caching system is intelligent enough to update
            your query results reactively, even if one query result updates the
            result of another query.
          </Notes>
          <Heading>Intelligent normalized cache</Heading>
          <Image
            src={images.normalization}
            width="100%"
            style={{ borderRadius: '6px', border: '15px solid #3a3c4b' }}
          />
        </Slide>
        <Slide>
          <Notes>
            Here's what state management looks like in a GraphQL world. We have
            our UI which sends a query to Apollo Client. Through Apollo's
            extensible network stack called Apollo Link, we can actually
            intercept that request and send it to our GraphQL server, our client
            cache, a Firebase store, a REST endpoint, or any other data source
            we choose. With this architecture, GraphQL becomes a unified
            interface to all of our app's data and the Apollo Client cache
            becomes the single source of truth.
          </Notes>
          <Heading>Unified state management</Heading>
          <Image src={images.unified} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            One of my personal favorite initiatives we're working on is Apollo
            Link State, our extension that allows you to manage local data, like
            device API results and boolean flags, with Apollo Client. It uses a
            @client directive to signify that the data should be resolved from
            the Apollo cache. This is super cool because it allows us to combine
            local and remote data in one query, which makes a lot of sense
            because our components are usually made up of local and remote data.
            We can also easily execute some really cool features like adding
            virtual fields to data from our server that you can't currently do
            with any other state management solution.
          </Notes>
          <Heading>GraphQL for local state</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={client.stateMgmt1}
              lang="graphql"
              style={{ minWidth: '60%' }}
            />
            <List margin="0 0 0 50px">
              {[
                'Specify local queries with @client',
                'Add virtual fields to remote data',
                'Combine local & remote data in one query',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            We've touched on a lot of the benefits of Apollo in an abstract
            sense already but as a front end developer, how can Apollo's tooling
            simplify my daily workflow? Ultimately at the end of the day, we all
            just want to go home early.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            I'm a frontend developer.
          </Heading>
          <Appear
            transitionDuration={400}
            startValue={{ maxHeight: 0, opacity: 0 }}
            endValue={{ maxHeight: 400, opacity: 1 }}
          >
            <Heading
              textColor="primary"
              style={{ textAlign: 'left', lineHeight: 1.2 }}
            >
              How can Apollo & GraphQL simplify my workflow?
            </Heading>
          </Appear>
        </Slide>
        <Slide bgImage={images.tip2}>
          <Notes>
            First, we should cover what Apollo is. It's a fullstack
            implementation of GraphQL specifically designed with product
            engineers in mind. It's what allows you to write a GraphQL and not
            have to worry about the data management piece of things. It's much
            more than a query however. In the next couple of slides, you'll see
            all the incredible tooling and benefits that make for a great
            developer experience using Apollo.
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            One of the biggest productivity gains is its declarative approach to
            data fetching. Just wrap your UI in a Query component and Apollo
            Client will take care of fetching the data, tracking loading and
            error state, and updating your UI. In a React app, you have this
            super intuitive render prop API so your data fetching logic is just
            a component, just like any other component in your app. This keeps
            your data fetching logic easy to compose and reuse.
          </Notes>
          <Heading>Declarative data fetching</Heading>
          <CodePane theme="light" source={client.queryComponent} lang="jsx" />
        </Slide>
        <Slide>
          <Notes>
            While you're creating query components, you probably want to check
            that the data you're receiving from your GraphQL API is what you
            expect. That's where Apollo Codegen comes in. If you're on the
            statically typed JS train like I am, this will save you so much
            time. Codegen compiles your queries to automatically generate type
            definitions for TypeScript, Flow, and many other language targets.
            Then, you can use those type definitions in your UI for an added
            layer of safety.
          </Notes>
          <Heading>Apollo Codegen</Heading>
          <Layout.Row align="center">
            <CodePane theme="light" source={client.codegen1} lang="graphql" />
            <Heading>➡</Heading>
            <CodePane theme="light" source={client.codegen2} lang="js" />
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            What about when you need to debug your query components? We have a
            Chrome extension, Apollo DevTools, that will allow you to fully
            inspect the contents of your Apollo Client cache, as well as track
            any watched queries, view any mutations, and test out queries
            without ever having to leave the browser. Here's an example of the
            cache explorer which allows you to view the normalized cache exactly
            how Apollo Client sees it.
          </Notes>
          <Heading>Apollo DevTools</Heading>
          <Image
            src={images.devTools}
            width="100%"
            style={{ border: `1px solid ${colors.secondary}` }}
          />
        </Slide>
        <Slide>
          <Notes>
            But what about when you need to make changes to your GraphQL API?
            How do we ensure that changes to our schema don't break our UI?
            That's where Apollo Engine's schema management tools come in. Just
            specify a list of validation rules for your schema and Apollo Engine
            will check each change you make against those rules. This allows you
            to refactor, add fields, deprecate fields, and clean up code with
            confidence that you haven't broken anything. Our schema validation
            integrates with GitHub so it's a natural part of your existing CI
            workflow.
          </Notes>
          <Layout.Row align="center">
            <Image
              src={images.schemaDiffing}
              width="40%"
              style={{ border: `1px solid ${colors.secondary}` }}
            />
            <Layout.Column>
              <Heading style={{ textAlign: 'left' }} margin="0 0 50px 50px">
                Apollo Engine schema diffing
              </Heading>
              <List margin="0 0 0 50px">
                {[
                  'Validates your schema against a set of rules to prevent breaking changes',
                  'Integrates with GitHub as a part of your CI workflow',
                ].map(item => (
                  <ListItem textSize={size.small} key={item}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            How do you determine what to refactor in your schema? Apollo Engine
            provides field by field monitoring for your entire schema that
            allows you to see how often a field is used and how much time it
            takes to resolve. This can be useful for identifying areas to
            optimize your GraphQL API.
          </Notes>
          <Heading>Apollo Engine schema analysis</Heading>
          <Image src={images.engine} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            Hopefully by now I've convinced you of some of the tooling benefits
            of Apollo and how it can improve your daily workflow as a frontend
            developer. How do I start using it today? You're going to want to
            start with the Apollo platform which is a collection of open source
            tools spanning across the stack that developers use to implement
            GraphQL. The three main tools you'll need are Apollo Server, Apollo
            Client, and Apollo Engine. None of them are dependent on each other
            but they all work best together.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            There's just one thing left.
          </Heading>
          <Appear
            transitionDuration={400}
            startValue={{ maxHeight: 0, opacity: 0 }}
            endValue={{ maxHeight: 400, opacity: 1 }}
          >
            <Heading
              textColor="primary"
              style={{ textAlign: 'left', lineHeight: 1.2 }}
            >
              How do I get started?
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            Apollo Server is where you'll build your schema and implement it
            with resolver functions. Your resolver functions are what gives
            GraphQL their flexibility. Here you can call a REST endpoint or a
            database or whatever you'd like. A GraphQL query is just a tree of
            resolver calls, which is why its able to aggregate data from
            multiple sources.
          </Notes>
          <Heading>Apollo Server</Heading>
          <Layout.Row align="center">
            <List margin="0 50px 0 0" style={{ maxWidth: '40%' }}>
              {[
                'Build your schema and implement it with resolver functions',
                'Resolvers are flexible - call a REST endpoint or query a DB',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
            <Image src={images.apolloServer} height="500px" />
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            Apollo Engine is our new cloud service that tracks field-by-field,
            query by query use of your graphql API. Engine can also integrate
            with what you're already using to help make you more productive,
            like your your CI to validate schema changes. It integrates with
            services like Slack to provide alerts for your GraphQL API and
            Datadog for performance monitoring.
          </Notes>
          <Heading>Apollo Engine</Heading>
          <Image src={images.engine3} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Apollo Client is what helps you take all that complicated state
            management code on the frontend and reduce it down to just queries
            and components. It's made up of a cache, a network stack, and a thin
            orchestration layer between the two. All of those concerns you had
            to worry about before like pagination, normalization, and realtime
            data are already baked into the library. While this example shows
            React, we have view integrations for Angular, Vue, Reason, and you
            can use it with plain JavaScript too.
          </Notes>
          <Heading>Apollo Client</Heading>
          <Image src={images.complexity} width="95%" />
        </Slide>
        <Slide>
          <Notes />
          <Image src={images.platform} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            The only thing left standing in our way is the GraphQL server. This
            is often the most intimidating part of implementing GraphQL, but
            we've been working hard to make building this GraphQL server
            approachable enough for a frontend developer to own the entire
            process from start to finish.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            We want to make<br />
            developing a GraphQL server<br />
            <span style={{ color: colors.primary }}>approachable</span> for
            everyone.
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            Up until now, I've used the term GraphQL server but sometimes I
            think the word server can be intimidating, especially for frontend
            developers. I think it's more accurate to call it a GraphQL layer
            since it sits on top of your existing data sources. Instead of
            defining a specific APIs for each relationship between a client and
            a service — which means writing and maintaining code — with graphql
            the services describe the data they have, apps describe the data
            they need, and there's a layer between them — that's apollo server —
            that manages how that data moves between the two.
            <br />
            <br />
            GraphQL APIs are at their best when they're built by the product
            teams that are using them, which is why we've lowered the barrier to
            entry with our latest release of Apollo Server.
          </Notes>
          <Heading>
            GraphQL{' '}
            <span style={{ textDecoration: 'line-through' }}>server</span> layer
          </Heading>
          <Image src={images.layer} width="100%" />
        </Slide>
        <Slide>
          <Notes>
            Apollo Server 2.0! We've completely revamped the getting started
            experience with Apollo Server to make it as simple as possible. Just
            pass in your schema to the typeDefs property and your resolver
            functions that implement your schema. Apollo Server will take care
            of all the heavy lifting for you, such as setting up an Express
            server with subscriptions, file uploads, schema stitching, and all
            the best practices already wired up for you. With the new release,
            we've also created some new error primitives for common use cases
            such as AuthorizationErrors which propogate throughout the stack.
            We're shipping a release candidate on Friday so be sure to check it
            out.
          </Notes>
          <Heading>Apollo Server 2.0 🎉</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={server.apolloServer}
              lang="js"
              style={{ minWidth: '50%' }}
            />
            <List margin="0px">
              {[
                'Standard patterns based on best practices, all wired up',
                'Includes error management & schema stitching',
                'Supports advanced features like subscriptions & file uploads out of the box',
              ].map(item => (
                <ListItem textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide bgImage={images.tip3}>
          <Notes>
            Although you can write a GraphQL server in almost any language, we
            strongly recommend writing it in JavaScript to unlock all the latest
            features and keep the API closest to the language product developers
            are already familiar with.
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            Apollo Server is the most feature complete GraphQL server
            implementation. If you're using our server, you can guarantee that
            you'll be able to take advantage of all the latest features like
            tracing and subscriptions, which aren't implemented by all the
            language servers yet. We've also pioneered schema stitching, which
            allows you to develop your schema in a more modular way and stitch
            it together into one so you still gain all the tooling benefits.
          </Notes>
          <Heading>All the latest features</Heading>
          <Layout.Row>
            <Layout.Column>
              {['Error handling', 'Schema stitching', 'Tracing'].map(item => (
                <Text key={item} margin="40px 0 40px 0">{`✅ ${item}`}</Text>
              ))}
            </Layout.Column>
            <Layout.Column>
              {['Subscriptions', 'Persisted queries', 'Mocking'].map(item => (
                <Text key={item} margin="40px 0 40px 0">{`✅ ${item}`}</Text>
              ))}
            </Layout.Column>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            Another reason to use Apollo Server for your GraphQL layer is that
            you'll be able to run it on the edge. This is something experimental
            that we've been working on which is super cool. It uses Cloudflare's
            new worker platform to run Apollo Server in a truly serverless
            environment. This allows you to cache whole query responses from
            within your CDN and partial responses on the edge, delivering data
            to your users faster. If you'd like to be on the list for early
            access, check out the link below
          </Notes>
          <Heading>GraphQL on the edge</Heading>
          <Layout.Row align="center">
            <Image src={images.cloudflare} width="32%" />
            <List margin="0 0 0 40px">
              {[
                `Run Apollo Server on the edge using Cloudflare's new worker platform`,
                'Completely serverless',
                'Early access: apollographql.com/edge',
              ].map((item, idx) => (
                <ListItem bold={idx === 3} textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            Another cool new feature in Apollo Server 2.0 that you can't get
            with any other language server is our new data source API, which
            simplifies layering a GraphQL API over your existing endpoints. It
            takes care of all the difficult parts for you, including resource
            caching that you used to have to do with DataLoader, already wired
            up for you. The data source interacts with a shared cache between
            each request which is what enables partial query caching.
          </Notes>
          <Heading>Apollo Server Data Source</Heading>
          <Layout.Row>
            <CodePane
              lang="js"
              theme="light"
              textSize=".8em"
              source={server.dataSource}
              style={{ minWidth: '60%' }}
            />
            <List margin="0 0 0 40px">
              {[
                'Easiest way to encapsulate access to a REST API',
                'Interacts with a shared cache upon request',
                'Supports whole and partial query caching',
              ].map((item, idx) => (
                <ListItem bold={idx === 3} textSize={size.small} key={item}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Layout.Row>
        </Slide>
        <Slide>
          <Notes>
            I've used the term partial query caching before, let's see what this
            actually looks like. It's helpful for data that's a mix of static
            and dynamic, for example, we have mostly static movie data with a
            dynamic playback rate attached. Here's what this query looks like
            when you first run it. Notice all the resolver timings at the
            bottom.
          </Notes>
          <Image src={images.pq1} width="100%" height="100%" />
        </Slide>
        <Slide>
          <Notes>
            The second time you run it, all the static data is already cached
            and we only have to fetch the dynamic data, as you can see from the
            resolver tracing stats at the bottom. This is partial query caching
            at work thanks to the Apollo Server Data Source API.
          </Notes>
          <Image src={images.pq2} width="100%" height="100%" />
        </Slide>
        <Slide bgImage={images.tip4}>
          <Notes>
            Even though some of these features sound really advanced, they don't
            require much effort to execute. In fact, we've designed Apollo so
            frontend developers can own the entire process start to finish. We
            recommend that product teams have a heavy influence on the schema
            design since ultimately they're the ones using it.
          </Notes>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            GraphQL schemas are at their best when they are designed around the
            needs of client applications. When a team is building their first
            GraphQL schema, they might be tempted to take a more backend focused
            approach and create literal mappings on top of existing database
            collections. While this literal database-to-schema mapping may be a
            fast way to get up and running, we strongly suggest avoiding it and
            instead building the schema around based on how the GraphQL API will
            be used by the product team.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            The product team should<br />
            own designing the schema.
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            In fact, we recommend starting with the schema first. This is called
            schema driven development and it allows teams to develop
            independently while using the schema as a contract. One team can
            work on hooking up the schema's resolvers to the appropriate
            backends. While they're working on that, the frontend team can mock
            their schema which allows them to develop their UI without waiting
            on all of the data.
          </Notes>
          <Heading>Schema driven development</Heading>
          <Image src={images.sdd} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            One way to get started quickly is to move the data fetching logic
            you already have on the frontend to your resolvers. Let's see what
            this looks like.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Move logic from the frontend<br /> to the GraphQL layer.
          </Heading>
        </Slide>
        <Slide>
          <Notes>
            Building your resolvers shouldn't take too much heavy lifting. Just
            copy the data fetching and transformation you were already doing in
            your Redux reducers and move it to your GraphQL resolvers. Any
            transformation like sorting should always be moved to the backend so
            it's reusable across all platforms.
          </Notes>
          <Image
            src={images.redux}
            width="85%"
            style={{ alignSelf: 'center' }}
          />
        </Slide>
        <Slide bgImage={images.tip5}>
          <Notes>
            One of the best parts of GraphQL is that you don't have to rewrite
            everything to get started. Start small and migrate incrementally.
            Build an entire fullstack feature by wrapping an existing REST API.
            Be sure to monitor query performance along the way.
          </Notes>
        </Slide>
        <Slide>
          <Notes>
            I'm really excited about the future of GraphQL and Apollo and its
            potential to change how we think about data in our applications.
            Whether you're a frontend developer at a small startup or large
            enterprise, I think everyone can benefit from layering GraphQL over
            their existing data sources, especially if you're aggregating data
            from many places or transforming it on the frontend.
          </Notes>
          <Image src={images.platform} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            One of the coolest parts about GraphQL is how it fosters better
            communication. When services describe the data they have and clients
            describe the data they need,
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            GraphQL fosters better<br />
            <span style={{ color: colors.primary }}>
              communication
            </span> between<br />
            clients & services.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            frontend teams and backend teams can communicate more efficiently,
            using the schema as a common ground to unite the two. If we can
            communicate more effectively, we'll be able to ship products faster
            and have more confidence in our code.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Apollo fosters better<br />
            <span style={{ color: colors.primary }}>
              communication
            </span> between<br />
            frontend & backend teams.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            If you're looking for resources to take back to your team,
            definitely check out our learning resource at
            apollographql.com/docs. It features implementation guides for auth,
            testing, schema design, as well as getting started guides.
          </Notes>
          <Heading
            textColor="primary"
            margin="0px"
            style={{ textAlign: 'left', lineHeight: 1.2 }}
          >
            Get started!
          </Heading>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            apollographql.com/docs
          </Heading>
          <Appear
            transitionDuration={400}
            startValue={{ maxHeight: 0, opacity: 0 }}
            endValue={{ maxHeight: 400, opacity: 1 }}
          >
            <Text textColor={colors.primary}>
              Guides for authentication, security, state management, and more 🎉
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Notes>
            Also if you're curious about realtime GraphQL, make sure you check
            out Alex's session tomorrow afternoon. He has a lot of really
            awesome demos planned that you won't want to miss.
          </Notes>
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            GraphQL subscriptions 👍
          </Heading>
          <Appear
            transitionDuration={400}
            startValue={{ maxHeight: 0, opacity: 0 }}
            endValue={{ maxHeight: 400, opacity: 1 }}
          >
            <Text textColor={colors.primary}>
              Alex Banks (Moon Highway)<br />
              6/14 at 3:35pm (Room 210 B/F)
            </Text>
          </Appear>
        </Slide>
        <Slide bgImage={images.tip6}>
          <Notes>
            If you have any questions about GraphQL, be sure to stop by my
            GraphQL topic table at lunch today. I have to get on a plane shortly
            after to speak at GraphQL Europe in Berlin so please reach out to me
            on Twitter if you can't make it to lunch and I'd be happy to help.
            Thank you!
          </Notes>
        </Slide>
      </Deck>
    );
  }
}
