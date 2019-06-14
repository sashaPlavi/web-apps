import React from 'react';

import './style.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { fetchUsers, userservices } from './sevices/userService'

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isGrid: true,
    };

    this.changeLayout = this.changeLayout.bind(this);
    this.onReloadClick = this.onReloadClick.bind(this)
  }

  componentDidMount() {
    userservices.fetchUsers()
      .then(users => this.setState({
        users: users

      }))

  }

  onReloadClick(e) {
    userservices.fetchUsers()
      .then(users => this.setState({
        users: users
      }))
  }


  changeLayout() {
    const newLayout = !this.state.isGrid;

    this.setState({ isGrid: newLayout });
  }


  render() {

    return (

      <React.Fragment>
        < Header
          isGrid={this.state.isGrid}
          onLayoutChange={this.changeLayout}
          onReloadClick={this.onReloadClick}
        />

        <Main users={this.state.users} isGridLayout={this.state.isGrid} />
        <Footer />
      </React.Fragment >

    )
  }
}

export { MyApp }