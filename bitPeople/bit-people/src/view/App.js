import React from 'react';

import './style.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { fetchUsers } from './sevices/userService'

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      listLayout: 'list',

    };
    this.onHeaderClick = this.onHeaderClick.bind(this);

  }
  componentDidMount() {
    fetchUsers()
      .then(users => this.setState({
        users,

      }))

  }
  onHeaderClick() {

    const listLayout = (this.state.listLayout === 'list') ? 'grid' : 'list'


    this.setState({ listLayout })

  }


  render() {

    //console.log(this.state.users);
    //console.log(this.state.listLayout);

    return (

      <React.Fragment>

        {/* <button onClick={this.onHeaderClick}><i class="fas fa-list"></i></button>
        <button onClick={this.onHeaderClick}><i class="fas fa-grip-horizontal"></i></button> */}



        < Header onHeaderClick={this.onHeaderClick} text='React Users' buttonChange={this.state.listLayout} />
        <Main users={this.state.users} changeClass={this.state.listLayout} />
        <Footer />
      </React.Fragment >

    )
  }
}

export { MyApp }