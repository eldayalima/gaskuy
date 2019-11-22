import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from '../config/axios'

export class verification_success extends Component {
    state={
        username : ''
    }

    componentDidMount(){
        // ngambil username di link
        var path = this.props.location.pathname
        path = path.split('/')
        var username = path[2]
        console.log(username)

        // 
        axios.get(`/user/verification/${username}`)
        .then((res) => {
            console.log(res.data)
            this.setState({username})
        })
        .catch((err) => {
            console.log(err)
        })

    }
    render() {
        return (
            <div className='mt-5 pt-5'>
                Verifikasi Berhasil, Silahkan Lengkapi data Anda 
                <Link to={'/userdetails/' + this.state.username }> Disini </Link> 
            </div>
        )
    }
}

export default verification_success
