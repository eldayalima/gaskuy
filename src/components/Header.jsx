import React, { Component } from 'react'
import Image from '../image/gaskuy.png'
import Image2 from '../image/frh.jpeg'
import {Link} from 'react-router-dom'
// keep login
import axios from '../config/axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {sendData} from '../action/index'
import {onLougoutUser} from '../action/index'

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
        modal : false,
        afterLogin : false
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


            this.setState({modal:false})

            let {username , id,avatar} = res.data[0]
            localStorage.setItem('user' , JSON.stringify({username ,id,avatar}))
            this.props.sendData(
                username,
                id,
                avatar
            )

        }).catch(err=>{
            console.log(err)
        })
        
        this.username.value = ''
        this.password.value = ''

        this.setState({afterLogin : true})




        
    }

    renderNavigation =  () =>{
        // Jika belum login yg di tampilka n
        if(!this.props._username){
            return(

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
        )

        }else{
            return(
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

            <UncontrolledDropdown>
            <DropdownToggle nav inNavbar style={{color:'white'}}>
                <img src={'http://localhost:1996/public/uploads/user/' + this.props._avatar} style={{width:50, height:50, borderRadius:100}}  alt=""/>
            </DropdownToggle>
                

            <DropdownMenu>
                <span style={{fontFamily:'arial bold',fontSize:19}} className=''>
                Hello, {this.props._username}
                </span>
                <NavLink tag={Link} to='/profil'>
                <DropdownItem>Profile</DropdownItem>
                </NavLink>
                <NavLink tag={Link} to='/editprofile'>
                <DropdownItem>Edit Profile</DropdownItem>
                </NavLink>

                <DropdownItem divider/>
                <NavLink onClick={this.props.onLougoutUser}>
                <DropdownItem style={{color:'red'}}>Logout</DropdownItem>
                </NavLink>
                
            </DropdownMenu>

            </UncontrolledDropdown>
        </Nav>
            )
        }

    }



    render() {
        if(this.state.afterLogin === true){
            return(
                <div>
                    <Navbar light expand="md" className='styleNav fixed-top' style={{backgroundColor:'black'}}>
                        {/* <Link className='navbar-brand' to="/"> <img src= {Image}  style={{width:200}}  alt="Gaskuy.id"/> </Link> */}
                        <NavbarBrand className='navbar-brand container'>
                            <img  style={{width:200}} src={Image} alt="Gaskuy.id"/>

                        </NavbarBrand>
                            <NavbarToggler onClick={this.togglle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                
                                {this.renderNavigation()}
                                </Collapse>
                    </Navbar>


                    {/* MODAL LOGIN */}
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
                    <Redirect to='/'  />
            </div>
            )
        }
        return (
            <div>
                    <Navbar light expand="md" className='styleNav fixed-top' style={{backgroundColor:'black'}}>
                        {/* <Link className='navbar-brand' to="/"> <img src= {Image}  style={{width:200}}  alt="Gaskuy.id"/> </Link> */}
                        <NavbarBrand className='navbar-brand container'>
                            <img  style={{width:200}} src={Image} alt="Gaskuy.id"/>

                        </NavbarBrand>
                            <NavbarToggler onClick={this.togglle} />
                                <Collapse isOpen={this.state.isOpen} navbar>
                                
                                {this.renderNavigation()}
                                </Collapse>
                    </Navbar>


                    {/* MODAL LOGIN */}
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

const mapStateToProps = (state) =>{
    return {
        _username : state.auth.username,
        _avatar : state.auth.avatar
    } 
    
}

export default connect(mapStateToProps,{sendData, onLougoutUser}) (Header)
