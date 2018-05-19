// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Row, Column, Grid } from './Grid';
import Playlist from './Playlist';
import PlayerBar from './PlayerBar';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <Grid>
        <Row noflex>
          <h1>Radiodiodi</h1>
        </Row>
        <Row>
          <Column>
            <Playlist />
          </Column>
          <Column>
            <Playlist />
          </Column>
        </Row>
        <Row noflex>
          <PlayerBar />
        </Row>
      </Grid>
    );
  }
}
