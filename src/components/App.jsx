import React, { Component } from 'react'
import '../style.css'
import {BrowserRouter , Route} from 'react-router-dom'


import Header from './Header'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Register from './Register'
import PageFourth from './PageFourth'
import DetailEvent from './DetailEvent'
import Event from './Event'
import Cart from './Cart'


export class App extends Component {
    render() {
        return (
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/'  component ={PageOne}/>
                <Route  exact path='/'  component ={PageTwo}/>
                <Route  exact path='/'  component ={PageThree}/>
                <Route  exact path='/' component ={PageFourth}/>
                <Route  path='/register' component ={Register}/>
                <Route path='/event-detail' component ={DetailEvent} />
                <Route path='/event' component ={Event} />
                <Route path='/cart' component ={Cart} />
            </div>
        </BrowserRouter>
        )
    }
}

export default App
