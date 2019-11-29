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
