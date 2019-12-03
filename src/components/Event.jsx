import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody,
    Button,
    CardGroup,
    Row,
    Col,
    Spinner,
    CardDeck
} from 'reactstrap'
import {Link} from 'react-router-dom'
import MultiSearchBar from 'multi-search-bar'
import Image from '../image/content2.jpg'
import axios from '../config/axios'
import * as moment from 'moment'


export class Event extends Component {
    state = {
        event : null,
        categories : null,
        value : '',
        searchEvent : null
    }
    componentDidMount(){
        axios.get('/admin/event')
        .then((res)=>{
            this.setState({event : res.data})
                let filterEvent = this.state.event.filter((event)=>{
                    console.log(event)
                })
                return filterEvent
        })
        .catch((err)=>{
            console.log(err)
        })
        axios.get(`/admin/kategori`)
        .then((res)=>{
            this.setState({categories : res.data})
            // console.log(this.state.categories)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    // onSearch = () =>{
    //     let _nama_event = this.nama_event.value.toLowerCase()
    //     let _categories = this.categories.value  
    //     // console.log(this.categories.value)

    //     let hasilFilter =  'hai'

    //     console.log(hasilFilter)
    //     this.setState({searchEvent : hasilFilter})
    //     return hasilFilter
    // }


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

    listEvent = () =>{
        if(this.state.event === null){
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
        let event = this.state.event.map((event)=>{
            
            return(
                <div className='col-3 mx-auto'>
                    <Card body inverse style={{border:0}}>
                        <Link to={`/event-detail/${event.id}`}>
                        <CardImg top width="300" height="200" src={'http://localhost:1996/public/uploads/adminEvent/' + event.foto_event} alt="Card image cap" />
                        </Link>
                        <CardBody >
                        <CardText style={{color:'grey',fontSize:12,marginBottom:0}}> {moment(event.tanggal).format('dddd, DD MMMM YYYY')} </CardText>
                        <CardText style={{color:'grey',fontSize:12,marginBottom:0}}> {moment(event.tanggal).format('LT')} </CardText>
                        <CardTitle style={{color:'black'}}> {event.nama_event} </CardTitle>
                        <CardSubtitle> {event.nama} </CardSubtitle>
                        {/* <CardText>
                            {eve2t.deskripsi.length > 50 
                                ? event.deskripsi.slice(0,150)  + '......'
                                : event.deskripsi
                            }
                        </CardText> */}
                        </CardBody>
                    </Card>
                </div>
                    
            )
        })
        return event
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
        <div className='mt-5 pt-4'>
            {/* <div className='row'> */}
            <div className='bg-search-bar'>
                <h1 className='text-center tulisan-page-one' style={{paddingTop:200, color:'white',fontWeight:'bolder',letterSpacing:10}}>
                    Temukan Berbagai Event Terbaik 
                </h1>
            <form className='form-group mx-auto'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <input ref={ (input) => {this.nama_event = input} } type="text" className="form-control" placeholder="Nama Event" />
                        </div>
                        <div className='col-3'>
                        <select ref={(input)=>{this.categories = input}} className='form-control' value={this.state.value} onChange={(e)=>{this.setState({value : e.target.value})}}>
                            <option value=''>--Pilih Kategori Event--</option>
                            {this.optionKategori()}
                        </select>    
                        </div>
                        <div className='col-3'>
                        <select ref={(input)=>{this.jadwal = input}} className='form-control' >
                            <option value=''>--Pilih Jadwal--</option>
                            {/* {this.optionKategori()} */}
                        </select> 
                        </div>
                        <div className='col-2'>
                            <button onClick={this.onSearch} className='btn btn-success'>
                                    Cari
                            </button>
                        </div>
                    </div>
                </div>
                </form>
            </div>

            <div className='mt-5'>
                    {/* <CardDeck> */}
                        {/* <CardColumns> */}
                            <CardGroup>
                        {this.listEvent()}
                            </CardGroup>
                        {/* </CardColumns> */}
                    {/* </CardDeck> */}

            </div>
            </div>
        // </div>
        )
    }
}

export default Event
