import React, { Component } from 'react'
import {
    Table,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter,
    Spinner
} from 'reactstrap'
import axios from '../config/axios'
import {connect} from 'react-redux'
import * as moment from 'moment'
import {Redirect} from 'react-router-dom'


export class Cart extends Component {
    state= {
        modal: false,
        cart : null,
        afterCheckOut : false
    }
    modalBayar =() =>{
        this.setState( prevstate => ({
            modal : !prevstate.modal,
        }))
    }
    checkOut = () =>{
        let formData = new FormData()
        var datainputs = {
            tanggal_pembelian : moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            grand_total : this.totalHargaCart(),
            id_users : this.props._id
        }
        // console.log(datainput)
        var data = JSON.stringify(datainputs)
        formData.append('data' ,data)
        formData.append('bukti_transaksi' , this.bukti_transfer.files[0])

        axios.post(`/user/transaksi/${this.props._username}/${this.props._id}`,formData)
        .then((res)=>{
            if(res.data.error) return console.log(res.data.error)
            alert('Berhasil Di CheckOut')
            this.setState({modal : false, afterCheckOut : true})
            // console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    componentDidUpdate(){
        if(this.state.afterCheckOut){
            axios.get(`/cart/${this.props._id}`)
        .then((res)=>{
            if (res.data.error) return console.log(res.data.error)
            this.setState({cart : res.data, afterCheckOut : false})
            console.log('update')
            // console.log(this.state.cart[0].tanggal)
        })
        .catch((err)=>{
            console.log(err)
        })
        }
    }


    componentDidMount(){
        axios.get(`/cart/${this.props._id}`)
        .then((res)=>{
            if (res.data.error) return console.log(res.data.error)
            this.setState({cart : res.data})
            // console.log(this.state.cart[0].tanggal)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    renderCart = () =>{
        let cart =  this.state.cart.map((cart)=>{
            var tanggalan   = cart.tanggal
            let tanggal = moment(tanggalan).format('dddd Do, MMMM YYYY')
            var waktu = moment(tanggalan).format('LT')
            console.log(waktu)
            
        
            // console.log(this.state.cart.length)
            // console.log()
            return(
                <tr>
                    <td> 1 </td>
                    <td> {cart.nama_event} </td>
                    <td> {tanggal} </td>
                    <td> {waktu} </td>
                    <td>Stadion Amongrogo</td>
                    <td> {cart.qty} </td>
                    <td> {cart.harga} </td> 
                    <td> {cart.qty * cart.harga} </td> 
                </tr>
            )
        })
        return cart
    }
    totalHargaCart = () => {
        let totalSemua = 0
        this.state.cart.map((cart)=>{
            let total = cart.harga * cart.qty
            totalSemua += total
        })
        // this.setState({total : e})
        // let totalSemuaRP = Intl.NumberFormat().format(totalSemua).replace(/,/g, '.')
        let totalSemuaRP = totalSemua
        return totalSemuaRP
    }

    render() {
        if(!this.props._id){
            return(
                <Redirect to='/'/>
            )
        }
        if(this.state.cart === null){
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
            <div className='container mt-5 pt-5'>
                <h1>Event</h1>
                <div className='row'>
                    <div className='col-12'>
                        <div>
                        <Table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Nama Event</th>
                                        <th>Tangal Event</th>
                                        <th>Waktu</th>
                                        <th>Lokasi</th>
                                        <th>Jumlah Tiket</th>
                                        <th>Harga</th>
                                        <th>Total</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderCart()}
                                </tbody>
                                <tbody>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Jumlah yang harus dibayar</td>
                                    <td></td>
                                    <td>{ 'Rp ' + Intl.NumberFormat().format(this.totalHargaCart()).replace(/,/g, '.')}</td>
                                </tbody>
                            </Table>
                            <button className='btn btn-warning' onClick={this.modalBayar}>Bayar</button>
                            <button className='btn btn-danger ml-3'>Hapus</button>
                            <Modal isOpen={this.state.modal}>
                                <ModalHeader>
                                    Pilih Metode Pembayaran 
                                </ModalHeader>
                                <ModalBody>
                                    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt voluptatibus quibusdam pariatur sit nesciunt. Rerum a qui facere voluptatem!
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa minus labore odit non commodi. Debitis nam quos nihil? Ut voluptatem fuga suscipit repellat quas repudiandae, quod commodi quam molestiae eum repellendus in explicabo excepturi labore veniam dolorum similique, obcaecati nesciunt ipsam libero sint, optio id pariatur. Ea officiis veniam corrupti?
                                    </h5>
                                </ModalBody>
                                <ModalBody>
                                    Upload Bukti Pembayaran Anda<input className='form-control' placeholder='Masukan Bukti Transfer'
                                    ref={(input)=>{this.bukti_transfer = input}} type="file"/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={this.checkOut}>Konfirmasi</Button>
                                    <Button color="secondary" onClick={()=>this.setState({modal : false})}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        _id : state.auth.id,
        _username : state.auth.username
    }
}

export default connect (mapStateToProps) (Cart)
