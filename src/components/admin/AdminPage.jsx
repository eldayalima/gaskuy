import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import InfoUser from './InfoUser'
import EventAdmin from './EventAdmin'
import Transaksi from './Transaksi'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



export class AdminPage extends Component {
    render() {
        if(!this.props._username || this.props._role === 0){
            return(
                <Redirect to ='/'/>
            )
        }
        return (
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='sidenav' style={{height:'100vh'}}>
                        <Link to ='/admin/info'>
                        <button className='btn btn-success mx-auto mt-5' style={{width:'100%'}}>Info User</button>
                        </Link>
                        <Link to ='/admin/event'>
                        <button className='btn btn-success mx-auto mt-1' style={{width:'100%'}}>Event</button>
                        </Link>
                        <Link to ='/admin/transaksi'>
                        <button className='btn btn-success mx-auto mt-1' style={{width:'100%'}}>Transaksi</button>
                        </Link>
                    </div>
                    <div className=' samping-admin'>
                    {/* <Route exact path={this.props.match.path} component={AdminPage} /> */}
                    <Route path={this.props.match.path + '/info'} component={InfoUser} />
                    <Route path={this.props.match.path + '/event'} component={EventAdmin} />
                    <Route path={this.props.match.path + '/transaksi'} component={Transaksi} />

                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        _username : state.auth.username,
        _role : state.auth.role
    } 
    
}

export default connect(mapStateToProps) (AdminPage)
