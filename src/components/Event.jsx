import React, { Component } from 'react'
import {
    Card,
    CardImg,
    CardTitle,
    CardText,
    CardColumns,
    CardSubtitle,
    CardBody,
    Button,
    CardGroup,
    Row,
    Col
} from 'reactstrap'

import Image from '../image/content2.jpg'

export class Event extends Component {
    render() {
        let content = [
            {
                image : `${Image}`,
                nama : 'Lorem, ipsum.',
                keterangan : 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                deskripsi : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore minima magni deserunt quidem tempora distinctio asperiores sequi quod eveniet debitis!,',
                warna : 'info'
            },
            {
                image : `${Image}`,
                nama : 'Lorem, ipsum.',
                keterangan : 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                deskripsi : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore minima magni deserunt quidem tempora distinctio asperiores sequi quod eveniet debitis!,',
                warna : 'success'

            },
            {
                image : `${Image}`,
                nama : 'Lorem, ipsum.',
                keterangan : 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                deskripsi : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore minima magni deserunt quidem tempora distinctio asperiores sequi quod eveniet debitis!,',
                warna : 'secondary'

            },
            {
                image : `${Image}`,
                nama : 'Lorem, ipsum.',
                keterangan : 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
                deskripsi : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore minima magni deserunt quidem tempora distinctio asperiores sequi quod eveniet debitis!,',
                warna : 'danger'


            },
        
        ]

        return (

            <div className='container mt-5 pt-5'>
                <div className='row'>
                    {content.map((item)=>(
                    <span className='col-4 mt-3'>
                        <CardGroup>
                            <Card body inverse color ={item.warna}>
                                <CardImg top width="100%" src={item.image} alt="Card image cap" />
                                <CardBody >
                                <CardTitle> {item.nama} </CardTitle>
                                <CardSubtitle> {item.keterangan} </CardSubtitle>
                                <CardText> {item.deskripsi} </CardText>
                                <Button href='/event-detail'>Button</Button>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    </span>
                    ))}

                </div>

            </div>
        )
    }
}

export default Event
