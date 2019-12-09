import React, { Component } from 'react'
import Image from '../image/gaskuy.png'

export class PageNotFound extends Component {
    render() {
        return (
            <div className='mt-5 pt-4'>
                <div className='bg-page-three'>
                <img className='mx-auto d-block pt-5' src={Image} style={{width:500}} alt="Gaskuy.id"/>
                    <h1 className='tulisan-page-one text-center' style={{color: 'white'}}>
                        Error 404 
                    </h1>
                    <h1 className='tulisan text-center' style={{color: 'white'}}>
                        Sorry Page Not Found
                    </h1>
                    <h4 className='tulisan-page-one text-center' style={{color: 'white'}}>
                        Please Recheck your link addrress
                    </h4>
                </div>
            </div>
        )
    }
}

export default PageNotFound
