import React, { Component } from 'react'
import axios from '../config/axios'


export class Register extends Component {
    onSubmitClick = () =>{
        let _username = this.username.value
        let _email = this.email.value
        let _password = this.password.value

        // Register User
        axios.post('/register-user', 
            {
                username : _username,
                email: _email,
                password : _password
            }
        ).then(res=>{
            if (res.data.error) return alert(res.data.error)
            
            alert('Registrasi Berhasil!!! Enjoyed')

        }).catch(err=>{
            console.log(err)
        })

        this.email.value = ''
        this.username.value = ''
        this.password.value = ''

    }


    render() {
        return (
        <div>
                <div className='col-3 mx-auto mt-5 card pt-5'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1 className='tulisan'>Register</h1>
                    </div>
                    <form className='form-group' >
                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={ (input) => {this.username = input} } className='form-control' type='text'/>
                        
                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input ref={ (input) => {this.email = input} } className='form-control' type='email'/>

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={ (input) => {this.password = input} } className='form-control' type='password'/>
                    </form>
                    <button onClick={this.onSubmitClick} className='btn btn-outline-primary btn-block'>Submit</button>
                </div>
            </div>

        </div>

        )
    }
}

export default Register

// <div className='bgPageOne'>
//         <div className='container pt-5 mt-5'>
//             <div className = 'col-4 mx-auto mt-5 card'>
//                 <h3 className='tulisan'>Registrasi</h3>
//                 <FormControl>
//                     <InputLabel htmlFor='inputnama'>Email</InputLabel>
//                     <Input id='inputnama' onChange={()=>{}}/>
//                 </FormControl>
//                 <br/>
            
//                 <FormControl>
//                     <InputLabel htmlFor='inputnama'>Password</InputLabel>
//                     <Input id='inputnama' type='password' onChange={()=>{}}/>
//                 </FormControl>            

//             <button className='btn btn-info mt-4 mb-2' style={{height:30}}>Daftar Sekarang</button>
//             </div>
//         </div>
//     </div>