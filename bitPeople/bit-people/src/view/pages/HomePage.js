import React from 'react';


import { Main } from '../Main';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { LoadingPage } from '../LoadingPage';
import { userservices } from '../../sevices/userService'

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            isGrid: JSON.parse(localStorage.getItem('isGrid')),
            isLoading: true

        };

        this.changeLayout = this.changeLayout.bind(this);
        this.onReloadClick = this.onReloadClick.bind(this);
        this.searchUsersOnChange = this.searchUsersOnChange.bind(this);


    }

    componentDidMount() {
        userservices.fetchUsers()
            .then(users => {
                this.setState({
                    users: users,
                    filteredUsers: users,
                    isLoading: false
                })
            })

    }

    onReloadClick(e) {
        this.setState({ isLoading: true })
        userservices.fetchUsers()
            .then(users => this.setState({
                users: users,
                filteredUsers: users,
                isLoading: false
            }))
    }


    changeLayout() {
        const newLayout = !this.state.isGrid;

        this.setState({ isGrid: newLayout });
        localStorage.setItem('isGrid', newLayout);
    }

    searchUsersOnChange(event) {
        const query = event.target.value.toLowerCase()
        const userList = this.state.users
        //console.log(userList);

        const filteredUsers = userList.filter(user => user.fullName().toLowerCase().includes(query))

        this.setState({
            filteredUsers
        })
    }



    render() {
        const { isLoading } = this.state
        return (
            <>
                < Header
                    isGrid={this.state.isGrid}
                    onLayoutChange={this.changeLayout}
                    onReloadClick={this.onReloadClick}
                />

                {
                    isLoading
                        ? <LoadingPage />
                        : <Main
                            users={this.state.filteredUsers}
                            isLoading={this.state.isLoading}
                            isGridLayout={this.state.isGrid}
                            searchUsersOnChange={this.searchUsersOnChange}
                        />
                }

                <Footer />
            </>

        )
    }
}


export { HomePage }
