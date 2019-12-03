import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Table} from 'reactstrap'

export class Transaksi extends Component {
    render() {
        return (
            <div className='mt-5 pt-5 ml-3'>
            <Tabs>
                <TabList>
                    <Tab>Transaksi</Tab>
                    <Tab>Konfirmasi Pembayaran</Tab>
                </TabList>

                <TabPanel>
                <form className='form-group'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>
                        <div className='col-3'>
                        <select ref={(input)=>{this.categories = input}} className='form-control' >
                            <option value=''>--Pilih Kategori Event--</option>
                            {/* {this.optionKategori()} */}
                        </select> 
                        </div>
                        <div className='col-3'>
                        <select ref={(input)=>{this.categories = input}} className='form-control' >
                            <option value=''>--Pilih Kategori Event--</option>
                            {/* {this.optionKategori()} */}
                        </select> 
                        </div>
                    </div>
                </div>
                </form>

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
