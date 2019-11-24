import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Table} from 'reactstrap'
import {connect} from 'react-redux'
import axios from '../config/axios'
import { isNull } from 'util';


export class ProfilUser extends Component {
    state = {
        profil : null
    }

    componentDidMount() {
        axios.get(`/user/profil/${this.props._username}`)
        .then((res)=>{
            this.setState({profil : res.data})
            console.log(this.state.profil)

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    updateProfile = () =>{
        let formData = new FormData()

        let _firstname = this.first_name.value
        let _lastname = this.last_name.value
        let _password = this.password.value
        let _email = this.email.value
        let _alamat = this.alamat.value
        let _fotoProfil = this.avatar.files[0]

        // console.log(_firstname,_lastname,_password,_konfirmPass,_email,_tanggallahir,_alamat,_fotoProfil)
        if(_firstname) formData.append('first_name', _firstname)
        if(_lastname) formData.append('last_name', _lastname)
        if(_email) formData.append('email' , _email)
        if(_alamat) formData.append('alamat' , _alamat)
        if(_password) formData.append('password', _password)
        if(_fotoProfil) formData.append('avatar',_fotoProfil)

        axios.patch(`/user/profil/${this.props._username}`, formData)
        .then((res)=>{
            console.log(res)
            alert('Profil Berhasil diperbaharui')
        }).catch((err)=>{
            alert(err)
            
        })
    }




    render() {

        if(!isNull(this.state.profil) ){

        let {first_name,last_name,username,gender,email,tanggal_lahir,alamat,avatar,password} = this.state.profil
        return (
            <div className='container mt-5 pt-5'>
                <h1 className='tulisan text-center'>
                    Profil
                </h1>

                <Tabs>
                    <TabList>
                    <Tab>Profil Anda</Tab>
                    <Tab>Riwayat Pembelian</Tab>
                    <Tab>Edit Profil</Tab>
                    </TabList>
                
            
                    <TabPanel className='row mt-5'>
                        <div className='col-3 ml-5'>
                            <span>
                                <img src={`http://localhost:1996/public/uploads/user/${this.props._avatar}`} style={{width:'90%',borderRadius:10}} alt=""/>
                            </span>
                        </div>
                        <div className='col-6'>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Nama Depan</td>
                                        <td>{first_name} </td>
                                    </tr>
                                </tbody>
                                

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Nama Belakang</td>
                                        <td> {last_name} </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Username</td>
                                        <td>{username} </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Jenis Kelamin</td>
                                        <td>{gender} </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Alamat Email</td>
                                        <td>{email} </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Tanggal Lahir</td>
                                        <td>{tanggal_lahir} </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Alamat</td>
                                        <td>{alamat} </td>
                                    </tr>
                                </tbody>

                            </Table>

                        </div>
                    </TabPanel>

                    <TabPanel>
                    <h2>Any content 2</h2>
                    </TabPanel>

                    <TabPanel>
                    <h2>Update Profil</h2>
                    <div className='col-6'>
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Nama Depan</td>
                                        <td>
                                        <input ref={(input) => this.first_name = input} className="form-control" type="text" defaultValue={first_name}/>
                                        
                                        </td>
                                    </tr>
                                </tbody>
                                

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Nama Belakang</td>
                                        <td> 
                                            <input ref={(input) => this.last_name = input} className="form-control" type="text" defaultValue={last_name}/>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Password</td>
                                        <td> 
                                            <input ref={(input) => this.password = input} className="form-control" type="password" />
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Alamat Email</td>
                                        <td>
                                        <input ref={(input) => this.email = input} className="form-control" type="text" defaultValue={email}/>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Alamat</td>
                                        <td>
                                            <textarea className='form-control' rows='5' id='comment' ref={ (input) => {this.alamat = input}} placeholder={alamat} defaultValue={alamat}></textarea>
                                        </td>
                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td className='font-weight-bold'>Foto Profil</td>
                                        <td>
                                            <input ref={(input) => this.avatar = input} type="file" class="form-control-file" id="fotoProfilUser"/>
                                        </td>
                                    </tr>
                                </tbody>

                                <button onClick={this.updateProfile} className="mt-5 btn-block btn btn-outline-primary">Update Profil</button>
                            </Table>

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        )
    }else{
        return(
            <h1 className='mt-5 pt-5'>Loading</h1>

        )
    }
    }
}
const mapStateToProps = (state) =>{
    return{
        _id : state.auth.id,
        _username : state.auth.username,
        _avatar : state.auth.avatar
    }
}


export default connect(mapStateToProps) (ProfilUser)
