import React, { Component } from 'react'


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
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-music fa-3x" ></i>
                                </div>
                                <h4 className='pt-3'>
                                    Music
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-book-open fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Book
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                            <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-university fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Student
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-globe fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Etnic
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-users fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Seminar
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-utensils fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Food And Drink
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-palette fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Arts
                                </h4>
                                </button>
                        </div>
                        <div className='col-3 mt-5'>
                                <button className='btn' style={{borderRadius:5,borderColor:'grey',width:150,height:150}}>
                                <div style={{color:'orange'}}>
                                <i class="fas fa-smile-wink fa-3x"></i>
                                </div>
                                <h4 className='pt-3'>
                                    Others
                                </h4>
                                </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default PageThree
