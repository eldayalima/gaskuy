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




    render() {

        if(!isNull(this.state.profil) ){

        let {first_name,last_name,username,gender,email,tanggal_lahir,alamat,avatar} = this.state.profil
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
                    <h2>Any content 2</h2>
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
