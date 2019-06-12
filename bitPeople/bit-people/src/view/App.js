import React from 'react';

import { UserListData } from '../shared/UserData'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'
import { fetchUsers } from './sevices/userService'

const MyAppp = () => {
    fetchUsers();

    return (
        <React.Fragment>

            <Header text='React Users' />
            <Main users={[]} />
            <Footer />
        </React.Fragment>

    )
}

export { MyAppp }