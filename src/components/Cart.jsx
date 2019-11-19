import React, { Component } from 'react'
import {
    Table,
    Button,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter
} from 'reactstrap'

export class Cart extends Component {
    state= {
        modal: false
    }
    modalBayar =() =>{
        this.setState( prevstate => ({
            modal : !prevstate.modal,
        }))
    }



    render() {
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
                                        <th>Total</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Manivesto 2019</td>
                                        <td>06-01-2019</td>
                                        <td>13:00 WIB</td>
                                        <td>Stadion Amongrogo</td>
                                        <td>2</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>Jumlah yang harus dibayar</td>
                                    <td>300000</td>
                                </tbody>
                            </Table>
                            <button className='btn btn-warning' onClick={()=>{this.modalBayar()}}>Bayar</button>
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
                                    Upload Bukti Pembayaran Anda<input className='form-control' placeholder='Masukan Password' type="file"/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={()=>{}}>Konfirmasi</Button>
                                    <Button color="secondary" onClick={this.modalBayar}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart
