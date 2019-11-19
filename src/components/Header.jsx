import React, { Component } from 'react'
import Image from '../image/gaskuy.png'
import {Link} from 'react-router-dom'
// keep login
import axios from '../config/axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {sendData} from '../action/index'

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


export class Header extends Component {
    state = {
        isOpen: false,
        modal : false
    };


    togglle = () => {
        this.setState(
            {
            isOpen: !this.state.isOpen
            }
        )
    }
    login = () =>{
        this.setState( prevstate => ({
            modal : !prevstate.modal,
        }))
    }

    Clicklogin = () =>{
        let _username = this.username.value
        let _password = this.password.value

        axios.post('/user/login',
            {
                username : _username,
                password : _password
            }
        ).then(res=>{
            if (res.data.error) return alert(res.data.error)

            alert('Login berhasil')            

        

        }).catch(err=>{
            console.log(err)
        })
        
        this.username.value = ''
        this.password.value = ''
    }

    render() {
        return (
            <div>
                <Navbar light expand="md" className='styleNav fixed-top' style={{backgroundColor:'black'}}>
                    {/* <Link className='navbar-brand' to="/"> <img src= {Image}  style={{width:200}}  alt="Gaskuy.id"/> </Link> */}
                    <NavbarBrand className='navbar-brand container'>
                        <img  style={{width:200}} src={Image} alt="Gaskuy.id"/>
                    </NavbarBrand>
                        <NavbarToggler onClick={this.togglle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto container" navbar style={{marginRight:20}}>

                                    <NavItem style={{marginRight:30, marginLeft:30,marginTop:10}}>
                                        <NavLink tag={Link} to='/'>
                                            <p style={{color:'white'}}>
                                                Home
                                            </p>
                                        </NavLink>
                                    </NavItem>

                                    <NavItem style={{marginRight:30, marginLeft:30,marginTop:10}}>
                                        <NavLink href="/">
                                            <p style={{color:'white'}}>
                                                About
                                            </p>
                                        </NavLink>
                                    </NavItem>

                                    <NavItem style={{marginRight:50, marginLeft:30,marginTop:10}}>
                                        <NavLink href="/event">
                                        <p style={{color:'white'}}>
                                                Event
                                            </p>
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink tag={Link} className='nav-link' to="/register">
                                            <button className = 'btn btn-success'>Register</button>
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink  className='nav-link'>
                                            <button onClick={()=>{this.login()}} className ='btn btn-primary'>Login</button>
                                        </NavLink>
                                    </NavItem>

                                </Nav>
                            </Collapse>
                </Navbar>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader>
                        Login 
                    </ModalHeader>
                    <ModalBody>
                        Username  <input className='form-control' ref={(input)=>{this.username = input}} placeholder='Masukan Username' type="text"/>
                        Password  <input className='form-control' ref={(input)=>{this.password = input}} placeholder='Masukan Password' type="password"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={()=>{this.Clicklogin()}}>Login</Button>
                        <Button color="secondary" onClick={this.login}>Cancel</Button>
                    </ModalFooter>
                </Modal>
        </div>
        )
    }
}

export default Header
