import React from 'react';
import { Image, Text } from 'spectacle';

import { colors } from './theme';
import * as Layout from './layout';
import images from './images';

const Timeline = ({ position, showLabel }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    }}
  >
    <Image src={images.rocket} height="300px" style={{ alignSelf: position }} />
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        margin: '30px 0px 30px 0px',
      }}
    >
      <div
        style={{
          height: '100px',
          width: '8px',
          borderRadius: '2px',
          backgroundColor: `${colors.quartenary}`,
        }}
      />
      <div
        style={{
          height: '8px',
          borderRadius: '2px',
          width: '40%',
          backgroundColor: `${colors.quartenary}`,
        }}
      />
      <div
        style={{
          height: '100px',
          width: '8px',
          borderRadius: '2px',
          backgroundColor: `${colors.quartenary}`,
        }}
      />
      <div
        style={{
          height: '8px',
          borderRadius: '2px',
          width: '40%',
          backgroundColor: `${colors.quartenary}`,
        }}
      />
      <div
        style={{
          height: '100px',
          width: '8px',
          borderRadius: '2px',
          backgroundColor: `${colors.quartenary}`,
        }}
      />
    </div>
    <Layout.Row width="123%">
      <Layout.Column align="center">
        <Text textColor="primary">2016</Text>
        {showLabel && <Text textColor="quartenary">HOCs</Text>}
      </Layout.Column>
      <Layout.Column align="center">
        <Text textColor="primary">2018</Text>
        {showLabel &&
          (position === 'center' || position === 'flex-end') && (
            <Text textColor="quartenary">Render props</Text>
          )}
      </Layout.Column>
      <Layout.Column align="center">
        <Text textColor="primary">????</Text>
        {showLabel &&
          position === 'flex-end' && (
            <Text textColor="quartenary">Suspense</Text>
          )}
      </Layout.Column>
    </Layout.Row>
  </div>
);

export default Timeline;
