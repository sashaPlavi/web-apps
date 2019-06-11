import React from 'react';

import { UserListData } from '../shared/UserData'
import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './Main'

const MyAppp = () => {
    return (
        <React.Fragment>

            <Header text='React Users' />
            <Main users={UserListData.results} />
            <Footer />
        </React.Fragment>

    )
}

export { MyAppp }