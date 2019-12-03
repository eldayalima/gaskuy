import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export class PageOne extends Component {
    render() {
        return (
            <div className='page-one '>
                <div className='text-center text-justify tulisan-page-one' >
                    <h1 style={{paddingTop:200,color:'white', fontWeight:'bolder',fontSize:50,fontWeight:900, letterSpacing:'4px',fontWeight:'bolder'}}>
                        JELAJAHI EVENT DENGAN 1 SENTUHAN
                    </h1>
                    <h1 className='tulisan-page-one' style={{color:'white',fontWeight:900}}>
                        Bersama Gaskuy
                    </h1>
                    <h4 style={{color:'white',marginTop:40,fontWeight:900}}>
                        Your Event Partner and Hapiness Solutions
                    </h4>
                    <Link to='/event'>
                    <button className='btn btn-outline-success' style={{width:200, height:50,marginTop:70,color:'white',borderColor:'white'}}>
                        <h4>
                        Find Event
                        </h4>
                        </button>
                    </Link>
                </div>
                
            </div>
        )
    }
}

export default PageOne
