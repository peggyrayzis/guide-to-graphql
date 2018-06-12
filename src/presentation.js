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
  Code,
  Link,
  Notes,
} from 'spectacle';

import VideoPlayer from 'react-player';

// Spectacle Theme & Layout components
import { theme, colors, size } from './theme';
import * as Layout from './layout';
import Timeline from './timeline';

// Prism plugins
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-graphql';

// Server & client code samples
import * as hoc from './code/hoc';
import * as renderProp from './code/render-prop';
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
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Frontend development is<br />all about{' '}
            <span style={{ color: colors.primary }}>communication</span>.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
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
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            If we can communicate<br />more effectively, can we ship products{' '}
            <span style={{ color: colors.primary }}>faster</span>?
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.communication} width="100%" />
        </Slide>
        <Slide>
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
        />
        <Slide>
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
            Switching to GraphQL doesn't require an entire rewrite! You can
            migrate incrementally by building a GraphQL server over your
            existing REST endpoints and microservices.
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
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Who's using GraphQL?
          </Heading>
        </Slide>
        <Slide bgImage={images.companies} />
        <Slide bgColor="secondary">
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
              Why should I care about an<br />API technology?
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading>Our apps are data driven</Heading>
          <Image src={images.dataDriven} width="100%" />
        </Slide>
        <Slide>
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
          <Layout.Row align="center">
            <Image src={images.duplication} height="650px" />
            <Heading>Duplicated logic across clients</Heading>
          </Layout.Row>
        </Slide>
        <Slide>
          <Heading>GraphQL reduces complexity</Heading>
          <Image src={images.complexity} width="95%" />
        </Slide>
        <Slide bgImage={images.tip1} />
        <Slide>
          <Text>What is the Apollo platform?</Text>
        </Slide>
        <Slide>
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
          <Heading>Apollo Engine</Heading>
          <Text>
            replace with cloud diagram showing all the Engine extension points
          </Text>
        </Slide>
        <Slide>
          <Heading>Apollo Client</Heading>
        </Slide>
        <Slide bgColor="secondary">
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
        <Slide>
          <Heading>Declarative data fetching</Heading>
          <CodePane
            theme="light"
            source={renderProp.queryComponent}
            lang="jsx"
          />
        </Slide>
        <Slide>
          <Heading>Apollo DevTools</Heading>
          <Image
            src={images.devTools}
            width="100%"
            style={{ border: `1px solid ${colors.secondary}` }}
          />
        </Slide>
        <Slide>
          <Heading>Apollo Codegen</Heading>
          <Layout.Row align="center">
            <CodePane
              theme="light"
              source={renderProp.codegen1}
              lang="graphql"
            />
            <Heading>➡</Heading>
            <CodePane theme="light" source={renderProp.codegen2} lang="js" />
          </Layout.Row>
        </Slide>
        <Slide>
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
          <Heading>Apollo Engine schema analysis</Heading>
          <Image src={images.engine} width="100%" />
        </Slide>
        <Slide bgImage={images.tip2} />
        <Slide>
          <Notes>
            One of the best features of Apollo client is that it intelligently
            normalizes and caches your data for you. You don't have to mess
            around with normalizr. So you understand what's going on under the
            hood, I'm going to try and demystify the Apollo cache's
            normalization process for you. First, we have our articles query.
            You'll also see we have our response payload, which comes back as
            the shape of the query, with the addition of a meta field called
            __typename which specifies the data's type. For each nested part of
            the query with a typename and id, we split those objects out into
            their own entry in the cache stored as a flattened map. Then, the
            cache reconstructs each query result from the flattened nodes in the
            cache. If this sounds a little complex, don't worry. You get this
            out of the box with Apollo Client without having to set it up
            yourself.
          </Notes>
          <Heading>Intelligent normalized cache</Heading>
          <Image
            src={images.normalization}
            width="100%"
            style={{ borderRadius: '6px', border: '15px solid #3a3c4b' }}
          />
        </Slide>
        <Slide>
          <Heading>Unified state management</Heading>
          <Image src={images.unified} width="100%" />
        </Slide>
        <Slide>
          <Heading>Apollo Link State</Heading>
          <Layout.Row>
            <CodePane
              theme="light"
              source={renderProp.stateMgmt1}
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
        <Slide>
          <Heading>One single source of truth</Heading>
        </Slide>
        <Slide bgColor="secondary">
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
              What about a GraphQL server?
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Notes>
            instead of defining a specific APIs for each of these relationships
            — which means writing and maintaining code — with graphql the
            services describe the data they have, apps describe the data they
            need, and there's a layer between them — that's apollo — that
            manages how that data moves between the two.
            <br />
            graphql's the language we use to describe the data; apollo is the
            implementation.
          </Notes>
          <Heading>
            GraphQL{' '}
            <span style={{ textDecoration: 'line-through' }}>server</span> layer
          </Heading>
          <Image src={images.layer} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            We want to make GraphQL<br />
            server development<br />
            <span style={{ color: colors.primary }}>approachable</span> for
            everyone.
          </Heading>
        </Slide>
        <Slide>
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
        <Slide bgImage={images.tip3} />
        <Slide bgColor="secondary">
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            The product team should<br />
            own designing the schema.
          </Heading>
        </Slide>
        <Slide>
          <Heading>All the latest features</Heading>
          <Text>
            - error handling, schema stitching, persisted queries,
            subscriptions, mocking, tracing
          </Text>
        </Slide>
        <Slide>
          <Heading>GraphQL on the edge</Heading>
          <Layout.Row align="center">
            <Image src={images.cloudflare} width="32%" />
            <List margin="0 0 0 40px">
              {[
                `Run Apollo Server on the edge using Cloudflare's new worker platform`,
                'Supports whole and partial query caching',
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
          <VideoPlayer
            url={images.partialQuery1}
            controls
            playsinline
            width="100%"
            height="100%"
          />
        </Slide>
        <Slide>
          <VideoPlayer
            url={images.partialQuery2}
            controls
            playsinline
            width="100%"
            height="100%"
          />
        </Slide>
        <Slide bgImage={images.tip4} />
        <Slide>
          <Heading>Schema driven development</Heading>
          <Image src={images.sdd} width="100%" />
        </Slide>
        <Slide bgColor="secondary">
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            Design the API<br />
            you wish you had.
          </Heading>
        </Slide>
        <Slide>
          <Heading>Reusable sorting logic</Heading>
          <CodePane
            theme="light"
            source={server.resolvers}
            lang="js"
            textSize="1em"
          />
        </Slide>
        <Slide bgImage={images.tip5} />
        <Slide>
          <Heading>Build a fullstack feature</Heading>
        </Slide>
        <Slide>
          <Heading>Apollo Server Data Sources</Heading>
        </Slide>
        <Slide>
          <Heading>Gain visibility into your API</Heading>
        </Slide>
        <Slide>
          <Heading>The future of data management</Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            GraphQL fosters better<br />
            <span style={{ color: colors.primary }}>
              communication
            </span> between<br />
            clients & services.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading style={{ textAlign: 'left', lineHeight: 1.2 }}>
            GraphQL fosters better<br />
            <span style={{ color: colors.primary }}>
              communication
            </span> between<br />
            frontend & backend teams.
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
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
      </Deck>
    );
  }
}
