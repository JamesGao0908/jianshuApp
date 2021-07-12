import React, {Component} from 'react';

import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Footer from './common/footer';

class App extends Component{
    render(){
        return (
        <>
        <Provider store={store}>
            <Header />
            <BrowserRouter>
            <div>
                <Route path='/' exact component={Home}/>
                <Route path='/detail' exact component={Detail}/>
                <Route path='/detail'  component={Footer}/>
            </div>
            </BrowserRouter>
        </Provider>
        </>);
    }
}

export default App;
