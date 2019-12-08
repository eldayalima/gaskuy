import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import axios from '../../config/axios';
import { 
    Spinner,
    Table,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker'
import * as moment from 'moment'


export class EventAdmin extends Component {
    state = {
        categories : null,
        value : '',
        event : null,
        afterEvent : false,
        afterKategories : false,
        date : new Date,
        modal : false,
        editEvent : '',
        deleteEvent : null
    }
    
    deleteEvent =(id)=>{
        axios.patch(`/admin/event/delete/${id}`)
        .then((res)=>{
            alert('Event Berhasil dihapus')
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    modalEdit = (id) =>{
        axios.get(`/event/${id}`)
        .then((res)=>{
            this.setState(prevstate =>({
                modal : !prevstate.modal,
                editEvent : res.data[0]
            }))
            console.log(this.state.editEvent)

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // renderEditModal = ()=>{
    //         return(
                
    //         )
    // }

    tanggal = date => this.setState({ date })


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
                    <td> {moment(event.tanggal).format('LLLL')} </td>
                    <td> {event.nama} </td>
                    <td> {event.lokasi_latitude} + {event.lokasi_longitude} </td>
                    <td> 
                        {event.deskripsi.length > 50 ? event.deskripsi.slice(0,50) + '.......' : event.deskripsi} 
                    </td>
                    <td>
                        <button onClick={()=> {this.modalEdit(event.id)}} className='btn btn-warning'>Edit</button>
                    </td>
                    <td>
                        <button onClick={()=>{this.deleteEvent(event.id)}} className='btn btn-danger'>Hapus</button>
                    </td>
                </tr>
            )
        })
        return events
    }

    renderDeleteEvent = () =>{
        if(this.state.deleteEvent === null){
            return(
                <div style={{marginTop:'40vh'}} className='d-flex justify-content-center'>
                    <Spinner type="grow" color="primary" />
                    <Spinner type="grow" color="secondary" />
                </div>
            )
        }
        let eventdelete = this.state.deleteEvent.map((event)=>{
            return(
                <tr>
                    <td>{event.id} </td>
                    <td> {event.nama_event} </td>
                    <td> {event.harga} </td>
                    <td> {moment(event.tanggal).format('LLLL')} </td>
                    <td> {event.nama} </td>
                    <td> {event.lokasi_latitude} + {event.lokasi_longitude} </td>
                    <td> 
                        {event.deskripsi.length > 50 ? event.deskripsi.slice(0,50) + '.......' : event.deskripsi} 
                    </td>
                    
                </tr>
            )
        })
        return eventdelete
    }


    componentDidMount(){
        axios.get(`/admin/kategori`)
        .then((res)=>{
            this.setState({categories : res.data})
            // console.log(this.state.categories)
            // console.log(this.state.value)
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/admin/event')
        .then((res)=>{
            this.setState({event : res.data})
            // console.log(this.state.event)
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get('/admin/events/deleted')
        .then((res)=>{
            this.setState({deleteEvent : res.data})
            console.log(this.state.deleteEvent)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    componentDidUpdate(){
        if(this.state.afterKategories){
            axios.get(`/admin/kategori`)
            .then((res)=>{
            this.setState({categories : res.data, afterKategories:true})
            // console.log(this.state.categories)
            })
            .catch((err)=>{
                console.log(err)
            })
        }

        if(this.state.afterEvent){
            axios.get('/admin/event')
            .then((res)=>{
            this.setState({event : res.data, afterEvent : true})
            
            })
            .catch((err)=>{
            console.log(err)
            })
        }
    }

    updateEvent =(id)=>{
        console.log(id)
        let formData = new FormData()

        let _nama = this.nama_event_edit.value
        let _harga = Number(this.harga_edit.value)
        let _longit = this.longitude_edit.value
        let _latit = this.latitude_edit.value
        let _tanggal = moment(this.state.date).format('YYYY-MM-DD HH:mm:ss')
        let _categories = this.categories_edit.value
        let _deskripsi = this.deskripsi_edit.value
        let _kota = this.kota_edit.value
        let foto_event = this.foto_event_edit.files[0]
        
        if(_nama) formData.append('nama_event' ,_nama)
        if(_harga) formData.append('harga', _harga)
        if(_longit) formData.append('lokasi_longitude', _longit)
        if(_latit) formData.append('lokasi_latitude' , _latit)
        if(_tanggal) formData.append('tanggal', _tanggal)
        if(_categories) formData.append('categories_id' , _categories)
        if(_deskripsi) formData.append('deskripsi' ,_deskripsi)
        if(_kota) formData.append('kota' , _kota)
        if(foto_event) formData.append('foto_event' ,foto_event)

        axios.patch(`/admin/edit/event/${id}`, formData)
        .then((res)=>{
            alert('Event Berhasil Diperbaharui')
        }).catch((err)=>{
            console.log(err)
        })

    }


    optionKategori =()=>{
        let option = this.state.categories.map((kategori)=>{
            return(
                <option key ={kategori.idcat} value={kategori.idcat}>
                    {kategori.nama}
                </option>
            )
        })
        return option
    }
    listKategori = () =>{
        let kategori = this.state.categories.map((kategori)=>{
            return(
            <tr>
                <td> {kategori.idcat} </td>
                <td> {kategori.nama} </td>
            </tr>
            )
        })
        return kategori
    }

    onSubmitEvent = () =>{
        let formData = new FormData()

        var data1 = {
            _nama : this.nama_event.value,
            _harga : Number(this.harga.value),
            _longit : this.longitude.value,
            _latit : this.latitude.value,
            _tanggal : moment(this.state.date).format('YYYY-MM-DD HH:mm:ss'),
            _categories : this.categories.value,
            _deskripsi : this.deskripsi.value,
            _kota : this.kota.value
            // _foto : this.foto_event.files[0]
        }
        console.log(data1._nama)
        // console.log(data._categories)
        var data = JSON.stringify(data1)
        // console.log(data)
    
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

        
        // console.log(data1._nama)
        axios.post(`/admin/add_event/${data1._nama}`,formData)
        .then((res)=>{
            if (res.data.error) return console.log(res.data.error)

            this.setState({afterEvent : true})
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

    onSubmitCategories = () =>{
        let kategori = this.kategori.value

        axios.post('/admin/kategori',
        {
            nama : kategori
        }
        ).then((res)=>{
            if(res.data.error) return console.log(res.data.error)
            alert('Berhasil Menambahkan Kategori')
            this.setState({afterKategories : true})
        }).catch((err)=>{
            console.log(err)
        })
        this.kategori.value = ''
    }


    render() {
        if(this.state.categories === null ){
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
                    <Tab>Manage Kategori</Tab>
                    <Tab>Event Kadaluarsa</Tab>
                </TabList>

                <TabPanel>
                <div>
                <div className='col-12 mx-auto card'>
                <div className='card-body'>
                    <form className='form-group' >

                        <div className='card-title'>
                            <h5>Nama Event</h5>
                        </div>
                        <input ref={ (input) => {this.nama_event = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h5>Kota</h5>
                        </div>
                        <input ref={ (input) => {this.kota = input} } className='form-control' type='text'/>
                        
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
                        <DateTimePicker
                            onChange={this.tanggal}
                            value={this.state.date}/>
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
                <TabPanel>
                    <Table>
                        <thead>
                            <tr>
                                <th>No Kategori</th>
                                <th>Nama Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.listKategori()}
                        </tbody>
                    </Table>
                    
                    <Table>
                        <thead>
                            <tr>
                                <th>Nama Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input ref={ (input) => {this.kategori = input} } className='form-control'  placeholder='Masukan Nama Kategori'/>
                                </td>
                                <td>
                                    <button onClick={this.onSubmitCategories} className='btn btn-success'>Tambahkan</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
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
                        {this.renderDeleteEvent()}
                    </tbody>             
                </Table>
                </TabPanel>
            </Tabs>
            
            <Modal isOpen={ this.state.modal}>
                <ModalHeader>
                    Edit Transaksi
                </ModalHeader>
                <ModalBody>
                {/* {()=> this.renderEditModal()} */}
                <form className='form-group' >
                    <div className='card-title'>
                        <h5>Nama Event</h5>
                    </div>
                    <input placeholder={this.state.editEvent.nama_event} ref={ (input) => {this.nama_event_edit = input} } className='form-control' type='text'/>

                    <div className='card-title'>
                        <h5>Kota</h5>
                    </div>
                    <input placeholder={this.state.editEvent.kota} ref={ (input) => {this.kota_edit = input} } className='form-control' type='text'/>

                    <div className='card-title'>
                        <h5>Harga</h5>
                    </div>
                    <input placeholder={this.state.editEvent.harga} ref={ (input) => {this.harga_edit = input} } className='form-control' type='text'/>

                    <div className='card-title'>
                        <h5>Categories</h5>
                    </div>
                    <select ref={(input)=>{this.categories_edit = input}} className='form-control' value={this.state.value} onChange={(e)=>{this.setState({value : e.target.value})}}>
                        <option value=''>--Pilih Kategori Event--</option>
                        {this.optionKategori()}

                    </select>                        
                    <div className='card-title'>
                        <h5>Latitude</h5>
                    </div>
                    <input placeholder={this.state.editEvent.lokasi_latitude} ref={ (input) => {this.latitude_edit = input} } className='form-control' type='text'/>

                    <div className='card-title'>
                        <h5>Longitude</h5>
                    </div>
                    <input placeholder={this.state.editEvent.lokasi_longitude} ref={ (input) => {this.longitude_edit = input} } className='form-control' type='text'/>

                    <div className='card-title'>
                        <h5>Tanggal Event</h5>
                    </div>
                    <DateTimePicker
                        onChange={this.tanggal}
                        value={this.state.date}/>
                    <div className='card-title'>
                        <h5>Foto Event</h5>
                    </div>
                    <input ref={ (input) => {this.foto_event_edit = input} } className='form-control' type='file'/>

                    <div className='card-title'>
                        <h5>Deskripsi</h5>
                        <textarea placeholder={this.state.editEvent.deskripsi} className='form-control' rows='5' id='comment' ref={ (input) => {this.deskripsi_edit = input} }></textarea>
                    </div>
                </form>
                </ModalBody>
                <ModalFooter>
                    <button onClick={()=>{this.updateEvent(this.state.editEvent.id)}} className='btn btn-success'>Perbaharui</button>
                    <button className='btn btn-warning' onClick={()=> this.setState({modal : false})}>Cancel</button>
                </ModalFooter>
            </Modal>

        </div>
        )
    }
}

export default EventAdmin
