import React, { Component } from 'react'
import {Rating} from 'primereact/components/rating/Rating' 
import {InputTextarea} from 'primereact/components/inputtextarea/InputTextarea'
import Image from '../image/frh.jpeg'
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
    Col,
    Table
} from 'reactstrap'





export class DetailEvent extends Component {
    state = {
        rating : 7
    }

    render() {
        return (
            <div>

            <div className='background-detail-event' >
                <span>
                    <h1 className='tulisan pt-3' style={{color:'white'}}>
                        Nama Event
                    </h1>
                    <h3>Rating : {this.state.rating}</h3>
                        <Rating value={this.state.rating} stars={10}
                        onChange={(e)=>this.setState({rating:e.value})}/>
                </span>
            </div>
            <div className='container-fluid mt-5 pt-4' >
                <div className='row'>
                    <div className='col-6 mt-2'>
                    <CardGroup>
                            <Card>
                                <CardBody>
                                <CardTitle> Lorem, ipsum. </CardTitle>
                                <CardSubtitle> Lorem, ipsum dolor. </CardSubtitle>
                                <CardText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique. Necessitatibus, sunt beatae. Id quia asperiores, suscipit nam laboriosam repellendus! </CardText>
                                </CardBody>
                                <CardBody>
                                <Button href='/cart' color='success' style={{width:'100%'}}>Pesan</Button>
                                </CardBody>
                            </Card>
                        </CardGroup>

                        <div className='mt-3 card'>
                            <Table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th className='text-center'>Review</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src={Image} className='gambar-tengah' alt=""/>
                                            <span className='text-center mx-5 pt-3'>Sibarani</span>
                                        </td>
                                        <td></td>
                                        <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dolorem fugiat obcaecati nihil deserunt consectetur voluptatum minus commodi, consequuntur non.</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>

                        <div style={{margin:'10px'}}>
                            <InputTextarea value={''} onChange={()=>{}} rows={5} cols={66} autoResize={true} placeholder={'Masukan Review Anda ..'}>

                            </InputTextarea>
                            
                        </div>
                    </div>

                    <div className='col-6 mt-2'>
                            <Card className='my-auto' style={{height:400}}>
                                <CardBody >
                                <CardTitle> Lorem, ipsum. </CardTitle>
                                <CardSubtitle> Lorem, ipsum dolor. </CardSubtitle>
                                <CardText> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, similique. Necessitatibus, sunt beatae. Id quia asperiores, suscipit nam laboriosam repellendus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem asperiores possimus odio quod dolor aliquid soluta dolore magnam officia blanditiis? Ullam, ducimus. Harum rerum maxime autem provident facere quod ratione perspiciatis hic corporis ea cumque dolor quo id aliquam modi animi libero nesciunt, quis omnis! Fuga consequatur culpa aspernatur eos!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dolorum sunt ipsum suscipit corporis excepturi, officia alias odio eius commodi saepe aut quis nulla exercitationem veritatis eligendi, soluta in minus sit pariatur laborum. Mollitia in aliquam, magni placeat a error voluptatum alias neque inventore perferendis nam repudiandae aperiam, facere accusantium?</CardText>
                                {/* <Button color='success' style={{width:'100%'}}>Pesan</Button> */}
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default DetailEvent
