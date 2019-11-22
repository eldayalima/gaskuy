import React, { Component } from 'react'
import axios from '../config/axios'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



export class Register2 extends Component {
    state ={
        id : 0,
        gender : '',
        afterRegister : false
    }
    componentDidMount(){
        // ngambil username di link
        var path = this.props.location.pathname
        path = path.split('/')
        var username = path[2]
        // console.log(username)

        axios.get('get-id-by/'+ username)
        .then((res)=>{
            if (res.data.error) console.log(res.data.error)
            
            this.setState({id : res.data})
            console.log(Number(this.state.id[0].id))
        }).catch((err)=>{
            console.log(err)

        })

    }
    onSubmitClick2 = () => {
        let _firstname = this.first_name.value
        let _lastname = this.last_name.value
        let _phonenumber = this.phonenum.value
        let _gender = this.state.gender
        let _tanggallahir = this.datebirth.value
        let _alamat = this.address.value
        let _idUser = this.state.id[0].id


        // INSERT INTO DB
        axios.post('/userdetails/:id',
        {
            first_name :_firstname,
            last_name  :_lastname, 
            phone_number :_phonenumber, 
            gender :_gender,
            tanggal_lahir :_tanggallahir,
            alamat : _alamat,
            user_id : _idUser
        }
        ).then(res=>{
            if (res.data.error) return console.log(res.data.error)
            
            alert('Selamat bergabung di Gaskuy.id :)')
            this.setState({afterRegister : true})

        }).catch(err=>{
            console.log(err)
        })
    }



    setGender(event){
        this.setState({gender : event.target.value})
    }

    render() {
        if(this.state.afterRegister === true){
            return(
                <Redirect to='/' />
            )
        }
        return (
            <div className='mt-5 pt-5 container'>
                <h2 className='tulisan'>Satu langkah lagi untuk menjadi bagian dari kami</h2>
                <div className='col-8 mx-auto mt-5 card pt-5'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1 className='tulisan'>Register</h1>
                    </div>
                    <form className='form-group' >

                        <div className='card-title'>
                            <h4>Nama Depan</h4>
                        </div>
                        <input ref={ (input) => {this.first_name = input} } className='form-control' type='text'/>
                        
                        <div className='card-title'>
                            <h4>Nama Belakang</h4>
                        </div>
                        <input ref={ (input) => {this.last_name = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Phone Number</h4>
                        </div>
                        <input ref={ (input) => {this.phonenum = input} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Jenis Kelamin</h4>
                        </div>
                        <div onChange={this.setGender.bind(this)}>
                            <input   name='Gender' type='radio' value='Male' className='mr-2 mb-3' />Pria
                                <div>
                                    <input   name='Gender' type='radio' value='Female' className='mr-2'/>Wanita
                                </div>
                            
                        </div>

                        <div className='card-title'>
                            <h4>Tanggal Lahir</h4>
                        </div>
                        <input ref={ (input) => {this.datebirth = input} } className='form-control' type='date'/>

                        <div className='card-title'>
                            <h4>Alamat</h4>
                            <textarea className='form-control' rows='5' id='comment' ref={ (input) => {this.address = input} }></textarea>
                        </div>

                    </form>
                    <button onClick={this.onSubmitClick2} className='btn btn-outline-primary btn-block'>Submit</button>
                </div>
            </div>

        </div>

        )
    }
}
const mapStateToProps = (state) => {
    return{
        _id : state.auth.id
    }
}

export default connect  (mapStateToProps) (Register2)
