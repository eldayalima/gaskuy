import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import {Table, Spinner, ModalHeader,ModalBody,ModalFooter,Modal } from 'reactstrap'
import {connect} from 'react-redux'
import axios from '../config/axios'
import { isNull } from 'util';
import * as moment from 'moment';


export class ProfilUser extends Component {
    state = {
        profil : null,
        updated : false,
        transaksi : null,
        detail_transaksi : null,
        modal : false
    }
    modalDetail = (value) =>{
        axios.get(`/user/transaksi-detail/${value}`)
                .then((res)=>{
                    this.setState({detail_transaksi : res.data})
                    // console.log(this.state.detail_transaksi)
                    this.setState(e=>({
                        modal : !e.modal
                    }))
                })
                .catch((err)=>{
                    console.log(err)
                })
       
    }
    componentDidMount() {
        if(!this.props._username){
            alert('Silahkan Login Terlebih Dahulu')
        }
        axios.get(`/user/profil/${this.props._username}`)
        .then((res)=>{
            this.setState({profil : res.data})
            // console.log(this.state.profil)

        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`/user/history-transaksi/${this.props._id}`)
        .then((res)=>{
            this.setState({transaksi : res.data})
            console.log(this.state.transaksi)
            // console.log(this.state.transaksi[0].idpayment)
        })
        .catch((err)=>{
            console.log(err)
        })
        
    }

    renderTransaksi = () =>{
        if(this.state.transaksi === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div>
            )
        }
        let transaksi = this.state.transaksi.map((val)=>{
            var tanggal = moment(val.tanggal_pembelian).format('LLLL')
            var total = val.grand_total
            var status = val.status
            return(
                <tr>
                    <td>1</td>
                    <td>{tanggal} </td>
                    <td>{total} </td>
                    <td>{status ? status === 0 : <mark color='black'>Pending</mark>} </td>
                    <button className='btn btn-primary' onClick={()=>{this.modalDetail(val.idpayment)}}>Detail</button>
                </tr>
            )
        })
        return transaksi
    }

    renderDetail = () =>{
        if(this.state.detail_transaksi === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                    <Spinner type="grow" color="success" />
                    <Spinner type="grow" color="danger" />
                    <Spinner type="grow" color="warning" />
                    <Spinner type="grow" color="info" />
                    <Spinner type="grow" color="light" />
                    <Spinner type="grow" color="dark" />
                </div>
            )
        }
        let detail = this.state.detail_transaksi.map((val)=>{
            return(
                <tr>
                    <td>{val.nama_event} </td>
                    <td>{moment(val.tanggal).format('LLLL')} </td>
                    <td>{val.harga} </td>
                    <td>{val.qty} </td>
                    <td>{val.harga * val.qty} </td>
                    <td>{val.kota} </td>
                </tr>
            )
        })
        return detail
    
        
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
            this.setState({updated:true})
            alert('Profil Berhasil diperbaharui')
        }).catch((err)=>{
            alert(err)
            
        })
    }

    componentDidUpdate(){
        if(this.state.updated){
            axios.get(`/user/profil/${this.props._username}`)
        .then((res)=>{
            this.setState({profil : res.data,updated :false})
            console.log(this.state.profil)

        })
        .catch((err)=>{
            console.log(err)
        })
        }
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
                    <h2 className='text-center'>Riwayat Transaksi</h2>
                    <div className='row'>
                    <div className='col-12'>
                    <Table>
                    <table>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Tanggal Pembelian</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderTransaksi()}
                        </tbody>
                    </table>
                    </Table>
                    </div>
                    </div>
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

                <Modal isOpen={this.state.modal} size='lg'>
                    <ModalHeader>
                        Detail Transaksi Anda
                    </ModalHeader>
                    <ModalBody>
                        <Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Nama Event</th>
                                        <th>Tanggal Penyelenggaraan</th>
                                        <th>Harga</th>
                                        <th>Kuantiti</th>
                                        <th>Total Harga</th>
                                        <th>Kota</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderDetail()}
                                </tbody>
                            </table>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <button className='btn btn-warning' onClick={()=>{this.setState({modal : false})}}>Close</button>
                    </ModalFooter>
                </Modal>
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
