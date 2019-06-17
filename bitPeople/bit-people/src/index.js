import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import { MyApp } from './view/App';

ReactDOM.render(<BrowserRouter><MyApp /></BrowserRouter>, document.querySelector('#root'))