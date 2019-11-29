import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Table} from 'reactstrap'
import axios from '../../config/axios';






export class InfoUser extends Component {
    state ={
        user : []
    }

    componentDidMount() {
        axios.get(`/user`)
        .then((res)=>{
            this.setState({user : res.data})
            console.log(this.state.user)
        }).catch((err)=>{
            console.log(err)
        })
    }

    userList =  () =>{
        let allUser = this.state.user.map((user)=>{
            return(
                <tr>
                    <td>{user.user_id}  </td>
                    <td>{user.first_name} </td>
                    <td>{user.last_name} </td>
                    <td>{user.username} </td>
                    <td>{user.gender} </td>
                    <td>{user.email} </td>
                    <td>{user.tanggal_lahir} </td>
                    <td>{user.alamat} </td>
                    <td>{user.emailVerif} </td>
                    <td> 
                        <img src={`http://localhost:1996/public/uploads/user/${user.avatar}`}style={{width:'50%',borderRadius:100}}  alt=""/>
                    </td>
                    <td>
                        <button className='btn btn-warning' style={{width:'100%'}}>Edit</button>
                    </td>
                    <td>
                    <button className='btn btn-danger' style={{width:'100%'}}>Hapus</button>
                    </td>
                </tr>
            )
        })
        return allUser 
    }

    render() {
        return (
            <div className='container mt-5 pt-4'>
                <Tabs>
                    <TabList>
                        <Tab>Daftar Pengguna</Tab>
                        <Tab>Data Lengkap Pengguna</Tab>
                        <Tab>Review Pengguna</Tab>
                    </TabList>

                    <TabPanel>
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama Depan</th>
                                    <th>Nama Belakang</th>
                                    <th>Username</th>
                                    <th>Jenis Kelamin</th>
                                    <th>Alamat Email</th>
                                    <th>Tanggal Lahir</th>
                                    <th>Alamat</th>
                                    <th>Terverifikasi</th>
                                    <th>Avatar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.userList()}
                            </tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        as
                    </TabPanel>

                </Tabs>
            </div>
        )
    }
}

export default InfoUser
