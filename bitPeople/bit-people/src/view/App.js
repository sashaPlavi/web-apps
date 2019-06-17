import React from 'react';

import './style.css'

import { Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'

class MyApp extends React.Component {




  render() {



    return (
      <>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
      </>
    )
  }
}


export { MyApp }