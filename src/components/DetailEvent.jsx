import React, { Component } from 'react'
import {Rating} from 'primereact/components/rating/Rating' 
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea'
import Image from '../image/frh.jpeg'
import StarsRating from 'stars-rating'
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
    Table,
    Jumbotron
} from 'reactstrap'
import axios from '../config/axios'
import {connect} from 'react-redux'
import * as moment from 'moment'



export class DetailEvent extends Component {
    state = {
        rating : 3,
        event : null,
        order : 0
    }
    onClickPlus =()=>{
        this.setState({
            order : this.state.order + 1
        })
    }
    onClickMinus = () =>{
        if (this.state.order > 0){
            this.setState ({
                order : this.state.order -1
            })
    
        }
    }

    addToCart = () =>{
        var path = this.props.location.pathname
        path = path.split('/')
        var id = path[2]

        let tanggal = new Date()
        tanggal = moment(tanggal).format('YYYY-MM-DD HH:mm:ss')
        // console.log(tanggal)
        
        axios.post(`/cart`,
        {
            id_user : this.props._id ,
            id_event : id,
            tanggal_pembelian : tanggal,
            qty : this.state.order,
        }
        ).then((res)=>{
            if (res.data.error) return console.log(res.data.error)
            alert('Berhasil ditambahkan ke Cart Anda')
        }).catch((err)=>{
            console.log(err)
        })

    }


    getData = () =>{
        var path = this.props.location.pathname
        path = path.split('/')
        var id = path[2]
        // console.log(id)

        axios.get(`/event/${id}`)
        .then((res)=>{
            this.setState({event : res.data})
            // console.log(this.state.event)
            // console.log(this.state.event[0].foto_event)
            // console.log(this.props._id)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    componentDidMount(){
        this.getData()
    }

    rating = (value) =>{
        console.log(value)
    }

    render() {
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
        return (
            <div>
                {/* <div className='mt-5'>
                    <Jumbotron style={{backgroundColor:'black'}}>
                        <CardImg top width="100%" height="350" src={'http://localhost:1996/public/uploads/adminEvent/' + this.state.event[0].foto_event} alt="Card image cap" /> 
                            <span>
                                <h1 className='tulisan mt-3' style={{color:'white'}}>
                                    {this.state.event[0].nama_event}
                                </h1>
                                    <StarsRating
                                        count = {5}
                                        size = {40}
                                        color2={'#ffd700'}
                                        value ={this.state.rating}
                                        onChange={this.rating}
                                        />
                            </span>
                    </Jumbotron>
                </div> */}
            <div className='container-fluid mt-5 pt-5' >
                <div className='row'>
                    <div className='col-6 mt-2'>
                            <Card className='my-auto' style={{height:1000}}>
                                <CardImg top width="400" height="500" src={'http://localhost:1996/public/uploads/adminEvent/' + this.state.event[0].foto_event} alt="Card image cap" /> 
                                
                                <CardBody >
                                <CardTitle> Deskripsi Event </CardTitle>
                                <CardText> {this.state.event[0].deskripsi} </CardText>
                                {/* <Button color='success' style={{width:'100%'}}>Pesan</Button> */}
                                </CardBody>
                            </Card>
                    </div>

                    <div className='col-6 mt-2'>
                    <CardGroup>
                            <Card>
                                <CardBody>
                                <CardTitle> 
                                    <h1 className='tulisan-page-one'>
                                    {this.state.event[0].nama_event}
                                    </h1>
                                    <StarsRating
                                        count = {5}
                                        size = {40}
                                        color2={'#ffd700'}
                                        value ={this.state.rating}
                                        onChange={this.rating}
                                        />
                                    </CardTitle>
                                <CardSubtitle> {this.state.event[0].nama} </CardSubtitle>
                                <CardText>
                                <i class="fas fa-money-bill-wave fa-1x" style={{marginRight:10}}></i>
                                    {this.state.event[0].harga === 0 ? 'Gratis' : this.state.event[0].harga } 
                                </CardText>
                                <CardText>
                                <i class="far fa-calendar-alt fa-1x" style={{marginRight:10}}></i>
                                    {moment(this.state.event[0].tanggal).format('dddd, DD MMMM YYYY')}
                                </CardText>
                                <CardText>
                                <i class="far fa-clock fa-1x" style={{marginRight:10}}></i>
                                    {moment(this.state.event[0].tanggal).format('LT')}
                                </CardText>
                                </CardBody>
                                <CardBody>
                                <div className='row mb-2'>
                                    <div className='col-2'>
                                        <button onClick={this.onClickPlus} className='plus btn-success'>(+)</button>
                                    </div>
                                    <div className='col-8'>
                                        <input ref={input=> {this.qty = input}} placeholder='Masukan Jumlah' value={this.state.order} type="text" className='form-control mx-auto'/>
                                    </div>
                                    <div className='col-2'>
                                        <button onClick={this.onClickMinus} className='minus btn-dark'>(-)</button>
                                    </div>
                                </div>
                                <Button onClick={this.addToCart} color='success' style={{width:'100%'}}>Pesan</Button>
                                </CardBody>
                            </Card>
                        </CardGroup>

                        <div className='mt-3 card'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='text-center'>Review</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={Image} className='gambar-tengah' alt=""/>
                                            <span className='text-center mx-5 pt-3'>Sibarani</span>
                                        </td>
                                        <td></td>
                                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolorem fugiat obcaecati nihil deserunt consectetur voluptatum minus commodi, consequuntur non.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className='card-title'>
                            <textarea className='form-control' rows='5' placeholder='Ketikan Komentar ' id='comment' ref={ (input) => {this.address = input} }></textarea>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        _id : state.auth.id
    
}
}

export default connect(mapStateToProps)(DetailEvent)
