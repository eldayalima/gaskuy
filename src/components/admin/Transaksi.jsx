import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Table, Spinner, Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap'
import axios from '../../config/axios';
import * as moment from 'moment'
import ModalImage from 'react-modal-image'


export class Transaksi extends Component {
    state ={
        transaksi : null,
        transaksiTolak : null,
        transaksiTerima : null,
        detail_transaksi : null,
        modal : false,
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
            console.log(val)
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

    componentDidMount() {
        axios.get('/admin/history-transaksi')
        .then((res)=>{
            this.setState({transaksi : res.data})
            // console.log(this.state.transaksi)

        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/admin/transaksi/rejected')
        .then((res)=>{
            this.setState({transaksiTolak : res.data})
            // console.log(this.state.transaksi)

        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/admin/transaksi/confirm')
        .then((res)=>{
            this.setState({transaksiTerima : res.data})
            // console.log(this.state.transaksi)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    clickKonfirmasi = (id) =>{
        axios.patch(`/admin/konfirmasi/${id}`)
        .then((res)=>{
            alert('Berhasil Mengkonfirmasi Pembelian')
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    clickTolak = (id) =>{
        axios.patch(`/admin/tolak/${id}`)
        .then((res)=>{
            alert('Berhasil Menolak Pembelian')
        })
        .catch((err)=>{
            console.log(err)
        })
    }



    renderTransaksi = () =>{
        let transaksi = this.state.transaksi.map((val)=>{
            return(
            <tr>
                <td>{moment(val.tanggal_pembelian).format('LLLL')} </td>
                <td>
                    {val.id_users}
                </td>
                <td>{'Rp' +  Intl.NumberFormat().format(val.grand_total).replace(/,/g,'.')} </td>
                <td>{val.id}</td>
                <td>
                {/* <img style={{width:100}} src={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer} alt=""/> */}
                <div style={{maxWidth:100}}>
                <ModalImage
                small={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                medium={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                large={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                alt={val.bukti_transfer}
                />
                </div>
                </td>
                <td>{val.status === 0 ? <mark>Menunggu Konfirmasi</mark> : val.status ===1 ? <mark>Terkonfirmasi</mark> : <mark>Ditolak</mark>}  </td>
                <td>
                <button onClick={()=>{this.modalDetail(val.id)}} className='btn btn-outline-success'>Detail</button>
                </td>
                <td>
                    <button onClick={()=>{this.clickKonfirmasi(val.id)}} className='btn btn-primary'>Konfirmasi</button>
                    <button onClick={()=>{this.clickTolak(val.id)}} className='btn btn-warning'>Tolak</button>
                </td>
            </tr>
        )
        })
        return transaksi
    }

    renderTransaksiTolak = () =>{
        let transaksi = this.state.transaksiTolak.map((val)=>{
            return(
            <tr>
                <td>{moment(val.tanggal_pembelian).format('LLLL')} </td>
                <td>
                    {val.id_users}
                </td>
                <td>{'Rp' +  Intl.NumberFormat().format(val.grand_total).replace(/,/g,'.')} </td>
                <td>{val.id}</td>
                <td>
                {/* <img style={{width:100}} src={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer} alt=""/> */}
                <div style={{maxWidth:100}}>
                <ModalImage
                small={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                medium={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                large={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                alt={val.bukti_transfer}
                />
                </div>
                </td>
                <td>{val.status === 0 ? <mark>Menunggu Konfirmasi</mark> : val.status ===1 ? <mark>Terkonfirmasi</mark> : <mark>Ditolak</mark>}  </td>
                <td>
                <button onClick={()=>{this.modalDetail(val.id)}} className='btn btn-outline-success'>Detail</button>
                </td>
            </tr>
        )
        })
        return transaksi
    }
    renderTransaksiTerima = () =>{
        let transaksi = this.state.transaksiTerima.map((val)=>{
            return(
            <tr>
                <td>{moment(val.tanggal_pembelian).format('LLLL')} </td>
                <td>
                    {val.id_users}
                </td>
                <td>{'Rp' +  Intl.NumberFormat().format(val.grand_total).replace(/,/g,'.')} </td>
                <td>{val.id}</td>
                <td>
                {/* <img style={{width:100}} src={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer} alt=""/> */}
                <div style={{maxWidth:100}}>
                <ModalImage
                small={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                medium={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                large={'http://localhost:1996/public/uploads/transaksi/' + val.bukti_transfer}
                alt={val.bukti_transfer}
                />
                </div>
                </td>
                <td>{val.status === 0 ? <mark>Menunggu Konfirmasi</mark> : val.status ===1 ? <mark>Terkonfirmasi</mark> : <mark>Ditolak</mark>}  </td>
                <td>
                    <button onClick={()=>{this.modalDetail(val.id)}} className='btn btn-outline-success'>Detail</button>
                </td>
            </tr>
        )
        })
        return transaksi
    }





    render() {
        if(this.state.transaksi === null || this.state.transaksiTerima === null || this.state.transaksiTolak === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                </div>
            )
        }
        return (
            <div className='container'>

            <div className='mt-5 pt-5 ml-3 col-12'>
            <Tabs>
                <TabList>
                    <Tab>Pembayaran Menunggu Konfirmasi</Tab>
                    <Tab>Pembayaran Yang Terkonfirmasi</Tab>
                    <Tab>Pembayaran Ditolak</Tab>
                </TabList>

                <TabPanel>
                    <div className='row'>
                    <div className='col-12 mx-auto'>
                    <span className="card w-100">
                        <div className="card-header">
                        Transaksi User
                        </div>
                        <div className="card-body">
                        <Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>User</th>
                                        <th>Total Pembayaran</th>
                                        <th>Nomor Transaksi</th>
                                        <th>Bukti Pembayaran</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTransaksi()}
                                </tbody>
                            </table>
                        </Table>
                        </div>
                    </span>
                    </div>
                    </div>

                </TabPanel>
                <TabPanel>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                    <span className="card w-100">
                        <div className="card-header">
                        Transaksi User
                        </div>
                        <div className="card-body">
                        <Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>User</th>
                                        <th>Total Pembayaran</th>
                                        <th>Nomor Transaksi</th>
                                        <th>Bukti Pembayaran</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTransaksiTerima()}
                                </tbody>
                            </table>
                        </Table>
                        </div>
                    </span>
                    </div>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='row'>
                    <div className='col-12 mx-auto'>
                    <span className="card w-100">
                        <div className="card-header">
                        Transaksi User
                        </div>
                        <div className="card-body">
                        <Table>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Tanggal</th>
                                        <th>User</th>
                                        <th>Total Pembayaran</th>
                                        <th>Nomor Transaksi</th>
                                        <th>Bukti Pembayaran</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderTransaksiTolak()}
                                </tbody>
                            </table>
                        </Table>
                        </div>
                    </span>
                    </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
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
    }
}

export default Transaksi
