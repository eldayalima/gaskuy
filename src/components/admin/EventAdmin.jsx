import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from '../../config/axios';
import { Spinner,Table } from 'reactstrap';


export class EventAdmin extends Component {
    state = {
        categories : null,
        value : '',
        event : null

    }

    eventList = () =>{
        if(this.state.event === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                </div>
            )
        }
        let events = this.state.event.map((event)=>{
            return(
                <tr>
                    <td>{event.id} </td>
                    <td> {event.nama_event} </td>
                    <td> {event.harga} </td>
                    <td> {event.tanggal} </td>
                    <td> {event.categories_id} </td>
                    <td> {event.lokasi_latitude} + {event.lokasi_longitude} </td>
                    <td> {event.deskripsi} </td>
                </tr>
            )
        })
        return events
    }
    componentDidMount(){
        axios.get(`/admin/kategori`)
        .then((res)=>{
            this.setState({categories : res.data})
            // console.log(this.state.categories)
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/admin/event')
        .then((res)=>{
            this.setState({event : res.data})
            console.log(this.state.event)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    optionKategori =()=>{
        let option = this.state.categories.map((kategori)=>{
            return(
                <option key ={kategori.id} value={kategori.id}>
                    {kategori.nama}
                </option>
            )
        })
        return option
    }

    onSubmitEvent = () =>{
        let formData = new FormData()

        var data = {
            _nama : this.nama_event.value,
            _harga : Number(this.harga.value),
            _longit : this.longitude.value,
            _latit : this.latitude.value,
            _tanggal : this.tanggal.value,
            _categories : this.categories.value,
            _deskripsi : this.deskripsi.value,
            // _foto : this.foto_event.files[0]
        }
        data = JSON.stringify(data)
        console.log(data)
    
        formData.append('data',data)
        formData.append('foto_event',this.foto_event.files[0])
        // formData.append('nama_event',data._nama)
        // formData.append('harga',data._harga)
        // formData.append('foto_event',data._foto)
        // formData.append('deskripsi',data._deskripsi)
        // formData.append('lokasi_latitude',data._latit)  
        // formData.append('lokasi_longitude',data._longit)
        // formData.append('categories_id', data._categories)
        // formData.append('tanggal', data._tanggal)

        
        axios.post(`/admin/add_event/${data._nama}`,formData)
        .then((res)=>{
            if (res.data.error) return console.log(res.data.error)
            alert('Data Berhasil Terinput')
        }).catch((err)=>{
            console.log(err)

        })
        this.nama_event.value = ''
        this.harga.value= ''
        this.longitude.value = ''
        this.latitude.value = ''
        this.tanggal.value = ''
        this.categories.value = ''
        this.deskripsi.value = ''

    }




    render() {
        if(this.state.categories === null){
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
        return (
            <div className='mt-5 pt-5 ml-3'>
            <Tabs>
                <TabList>
                    <Tab>Tambah Kategori dan Event</Tab>
                    <Tab>Manage Event</Tab>
                    <Tab>Review Pengguna</Tab>
                </TabList>

                <TabPanel>
                <div>
                <div className='col-8 mx-auto card'>
                <div className='card-body'>
                    <form className='form-group' >

                        <div className='card-title'>
                            <h5>Nama Event</h5>
                        </div>
                        <input ref={ (input) => {this.nama_event = input} } className='form-control' type='text'/>
                        
                        <div className='card-title'>
                            <h5>Harga</h5>
                        </div>
                        <input ref={ (input) => {this.harga = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h5>Categories</h5>
                        </div>
                        <select ref={(input)=>{this.categories = input}} className='form-control' value={this.state.value} onChange={(e)=>{this.setState({value : e.target.value})}}>
                            <option value=''>--Pilih Kategori Event--</option>
                            {this.optionKategori()}

                        </select>                        
                        <div className='card-title'>
                            <h5>Latitude</h5>
                        </div>
                        <input ref={ (input) => {this.latitude = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h5>Longitude</h5>
                        </div>
                        <input ref={ (input) => {this.longitude = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h5>Tanggal Event</h5>
                        </div>
                        <input ref={ (input) => {this.tanggal = input} } className='form-control' type='text' />

                        <div className='card-title'>
                            <h5>Foto Event</h5>
                        </div>
                        <input ref={ (input) => {this.foto_event = input} } className='form-control' type='file'/>

                        <div className='card-title'>
                            <h5>Deskripsi</h5>
                            <textarea className='form-control' rows='5' id='comment' ref={ (input) => {this.deskripsi = input} }></textarea>
                        </div>

                    </form>
                    <button onClick={()=>{this.onSubmitEvent()}} className='btn btn-outline-primary btn-block'>Submit</button>
                </div>
            </div>

        </div>

                </TabPanel>
                <TabPanel>
                <Table>
                    <thead>
                        <tr>
                            <th>ID Event</th>
                            <th>Nama Event</th>
                            <th>Harga Event</th>
                            <th>Tanggal</th>
                            <th>Kategori</th>
                            <th>Lokasi</th>
                            <th>Deskripsi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.eventList()}
                    </tbody>                
                </Table>

                </TabPanel>

            </Tabs>
        </div>
        )
    }
}

export default EventAdmin
