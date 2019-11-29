import React, { Component } from 'react'
import '../style.css'
import {BrowserRouter , Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Header from './Header'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Register from './Register'
import PageFourth from './PageFourth'
import DetailEvent from './DetailEvent'
import Event from './Event'
import Cart from './Cart'
import Profil from './ProfilUser'
import Register2 from './Register2'
import {keepLogin} from '../action/index' 
import verification_success from './verification_success'
import AppAdmin from './admin/AdminPage'

export class App extends Component {
    state = {
        check : false
    }
    componentDidMount(){
        let user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            this.props.keepLogin(user)
        }
        this.setState({check:true})
    }

    render() {
        if(this.state.check){
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
                    <Route path='/profil' component ={Profil} />
                    <Route path='/verification-success/:username' component ={verification_success} />
                    <Route path='/userdetails/:id' component ={Register2} />
                    <Route path='/admin' component ={AppAdmin} />
                    
                </div>
            </BrowserRouter>
            )

        }
        return (
            <h1>Loading...</h1>
        )
    }
}




export default connect(null,{keepLogin}) (App)
