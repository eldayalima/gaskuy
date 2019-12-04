import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export class PageThree extends Component {
    render() {
        return (
            <div className='background-page'>
            <div className='container'>
                <h1 className='tulisan-page-one text-center'>
                    Event Categories
                </h1>
                <div className='row'>
                    <div className='col-11 row ml-auto'>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Music'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-music fa-3x" ></i>
                                </div>
                                <h4 className='pt-3'>
                                    Music
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Book'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-book-open fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Book
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Student'>
                            <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-university fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Student
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Culture / Etnic'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-globe fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Etnic
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Seminar'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-users fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Seminar
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Food And Drink'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-utensils fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Food And Drink
                                </h4>
                                </button>
                                </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Arts'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-palette fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Arts
                                </h4>
                                </button>
                        </Link>
                        </div>
                        <div className='col-3 mt-5'>
                        <Link to='/event?category=Others'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-smile-wink fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Others
                                </h4>
                                </button>
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default PageThree
