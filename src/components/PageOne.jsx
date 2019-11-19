import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import {Link} from 'react-router-dom'


import Image1 from '../image/pageOne.jpg'
import Image2 from '../image/content2.jpg'
import Image3 from '../image/content3.jpg'


export class PageOne extends Component {
    


    render() {
        var content =[
            {
                image :`${Image1}`,
                title : 'Your Happiness Solutions' ,

            },

            {
                image :`${Image2}`,
                title :'Yakali ga Kuy..',
            },

            {
                image :`${Image3}`,
                title :'Hai',
            },
        ]


        return (
            <div className='background-page my-5 col-12'>
                <Slider autoplay={1000} >
                    {content.map((item) => (
                    <div style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize:'cover'}}>
                        <div className='text-center mx-auto mt-5 d-block mb-5'>
                            <span className='tulisan' style={{fontSize:50, color:'white'}}>{item.title}</span>
                            <button className='btn btn-success mt-5 d-block mx-auto' style={{width:250,height:50}}>
                                Click Here 
                            </button>
                        </div>
                    </div>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default PageOne
