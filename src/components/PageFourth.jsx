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
        <div className='container mb-5'>
            <div className='bg-page-fourth1 mt-5'>
                <div className='bg-fourth'></div>
                    <div className='bg-fourth-container'>
                        <div className='row'>
                            <div className='col-md-3'>
                                
                            </div>
                            <Slider autoplay={2000}>
                                {content.map((item)=>(
                                    <div>
                                    <img src={item.gambar} className='gambar-tengah mt-5'  alt=""/>
                                    <blockquote className="blockquote text-center mx-auto" >
                                <h3>{item.komentar}</h3>
                                    <footer className="blockquote-footer">
                                    {item.nama} <cite>{item.umur}</cite>
                                    </footer>
                                </blockquote>
                                    </div>

                                ))}

                            </Slider>
                            
                            <div className='col-md-9'>
                                
                            </div>
                        </div>
                    </div> 
            </div>
        </div>

        )
    }
}

export default PageFourth
