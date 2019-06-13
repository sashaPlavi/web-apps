import React from 'react';

import './style.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { fetchUsers } from './sevices/userService'

class MyAppp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetchUsers()
      .then(users => this.setState({ users }))

  }




  render() {

    console.log(this.state.users);

    return (

      <React.Fragment>

        <Header text='React Users' />
        <Main users={this.state.users} />
        <Footer />
      </React.Fragment>

    )
  }
}

export { MyAppp }