import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'
import image from '../image/frh.jpeg'

export class PageFourth extends Component {
    render() {
        var content = [
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Farah Ramadhani',
                foto : '',
                umur : 19,
                gambar : `${image}`
            },
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Dleh ',
                foto : '',
                umur : 19,
                gambar : `${image}`

            },
            {
                komentar: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cumque, quisquam asperiores suscipit sed soluta illo corporis delectus vitae atque.',
                nama : 'Farah',
                foto : '',
                umur : 19,
                gambar : `${image}`

            }
        ]

        return (
    <div>
        <div className='container'>
                <h1 className='tulisan-page-one text-center'>
                    Our Testimonies
                </h1>
                        <div className='row'>
                            <div className='col-12'>
                                
                            </div>
                            <Slider autoplay={2000}>
                                {content.map((item)=>(
                                    <div>
                                            <img src={item.gambar} className='gambar-tengah'  alt=""/>
                                            <blockquote className="blockquote text-center mx-auto" >
                                        <h3>{item.komentar}</h3>
                                            <footer className="blockquote-footer">
                                            {item.nama} <cite>{item.umur}</cite>
                                            </footer>
                                        </blockquote>
                                    </div>
                                ))}
                            </Slider>
                        
                        </div>
                    </div> 
                    <div className='col-12 full-width' style={{backgroundColor:'black',height:35}}>
                            <h5 className='text-center' style={{color:'grey'}}>
                                Powered by Dlehnisme 2019
                            </h5>
                    </div>
        </div>


        )
    }
}

export default PageFourth
