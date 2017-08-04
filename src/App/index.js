import React, { Component } from 'react';
import '../App.css';
import { Layout } from 'antd';
import RootMenu from '../RootMenu'
import NotesList from '../NotesList'
import Note from '../Note'

const rootMenuItems = [
  { id: 1, title: "General", icon: "apple" },
  { id: 2, title: "Trash", icon: "delete" }
]

const tags = ["#Learning", "#React", "#Elixir", "#Win"]


class App extends Component {
  render() {
    return (
      <Layout>
        <RootMenu items={rootMenuItems} tags={tags} />
        <NotesList />

        <Layout style={{ marginLeft: 320 }}>
          <Note />
        </Layout>
      </Layout>
    );
  }
}

export default App;
