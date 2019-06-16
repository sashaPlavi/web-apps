import React from 'react';

import './style.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { userservices } from '../sevices/userService'

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isGrid: JSON.parse(localStorage.getItem('isGrid')),
       onQueryUserList:[],
       
    };

    this.changeLayout = this.changeLayout.bind(this);
    this.onReloadClick = this.onReloadClick.bind(this);
    this.searchUsersOnChange= this.searchUsersOnChange.bind(this);
    this.whileLoding= this.whileLoding.bind(this);
     
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
    localStorage.setItem('isGrid', newLayout);
  }
  searchUsersOnChange(event){
    const query = event.target.value
    const userList = this.state.users
    //console.log(userList);
    
    const result = userList.filter(user => user.name.includes(query))
    const newList= result.slice(0,10)
   //console.log(newList);
   
    this.setState({
      onQueryUserList: newList
      
    })
    }
    whileLoding(){
    this.state.users?
    this.setState({isLoading:true})
     : this.setState({isLoading:false})
      
    }
    componentWillMount(){
      this.whileLoding()
    }


  render() {

    return (

      <React.Fragment>
        < Header
          isGrid={this.state.isGrid}
          onLayoutChange={this.changeLayout}
          onReloadClick={this.onReloadClick}
        />

        <Main 
        isLoading={this.state.isLoading}
        users={this.state.users} 
        isGridLayout={this.state.isGrid} 
        searchUsersOnChange={this.searchUsersOnChange}
         searchList = {this.state.onQueryUserList}
        />
        <Footer />
      </React.Fragment >

    )
  }
}

export { MyApp }