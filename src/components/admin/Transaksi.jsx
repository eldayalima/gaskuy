import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Table, Spinner} from 'reactstrap'
import axios from '../../config/axios';
import * as moment from 'moment'


export class Transaksi extends Component {
    state ={
        transaksi : null
    }
    componentDidMount() {
        axios.get('/admin/history-transaksi')
        .then((res)=>{
            this.setState({transaksi : res.data})
            console.log(this.state.transaksi)

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
                <td>{val.id}</td>
                <td> </td>
                <td>{val.status === 0 ? <mark>Pending</mark> : <mark>Terkonfirmasi</mark>} </td>
                <td>
                    <button className='btn btn-outline-success'>Detail</button>
                </td>
                <td>
                    <button className='btn btn-primary'>Konfirmasi</button>
                    <button className='btn btn-warning'>Tolak</button>
                </td>
            </tr>
        )
        })
        return transaksi
    }

    render() {
        if(this.state.transaksi === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                </div>
            )
        }
        return (
            <div className='mt-5 pt-5 ml-3 col-12'>
            <Tabs>
                <TabList>
                    <Tab>Transaksi</Tab>
                    <Tab>Konfirmasi Pembayaran</Tab>
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
                    as
                </TabPanel>

            </Tabs>
        </div>
        )
    }
}

export default Transaksi
