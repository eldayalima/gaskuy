import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Image from '../image/content2.jpg'
// IMPORT IMAGE 
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
    Spinner
} from 'reactstrap'
import {Link} from 'react-router-dom'




export class PageTwo extends Component {
    render() {
        return (
            <Fade >
                <div className='background-page'>
                <h1 className='text-center tulisan-page-one' style={{color:'green'}}>
                    Upcoming Event
                </h1>
                <div className='container'>
                    <div className='row'>

                <span className='col-4'>
                <CardGroup>
                            <Card body inverse>
                                <CardImg top width="100" height="200" src= {Image}alt="Card image cap" />
                                <CardBody >
                                <CardTitle> Festapora </CardTitle>
                                <CardSubtitle> event.nama </CardSubtitle>
                                <CardText>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, natus.
                                </CardText>
                                <Link >
                                    <Button>Detail</Button>
                                </Link>
                                </CardBody>
                            </Card>
                        </CardGroup>
                    
                    </span>
                    </div>
                </div>
                </div>
            </Fade>
                
        )
    }
}

export default PageTwo

{/* <div className='container col-12 mb-5'>
                    <div className='row'>

                        <div className='col-6'>
                        <Card> 
                            <CardMedia style={{height: 0, paddingTop: '35%'}} image={image1} title="Barcelona"/>
                            <CardContent> 
                                <Typography variant="headline" component="h2"> FC Barcelona 
                                </Typography> 
                                <Typography component="p"> Tim terbaik sepanjang masa. </Typography> 
                            </CardContent> 
                            <CardActions> 
                                <Button size="small" color="primary"> Learn More </Button> 
                            </CardActions>
                        </Card>  */}

//                         <Card className='mt-5'> 
//                             <CardMedia style={{height: 0, paddingTop: '35%'}} image={image1} title="Barcelona"/>
//                             <CardContent> 
//                                 <Typography variant="headline" component="h2"> FC Barcelona 
//                                 </Typography> 
//                                 <Typography component="p"> Tim terbaik sepanjang masa. </Typography> 
//                             </CardContent> 
//                             <CardActions> 
//                                 <Button size="small" color="primary"> Learn More </Button> 
//                             </CardActions>
//                         </Card> 
//                         </div>

//                         <div className='col-6'>
//                         <Card style={{height:708, width:708}}> 
//                             <CardMedia style={{height:380, paddingTop: '35%'}} image={image1} title="Barcelona"/>
//                             <CardContent> 
//                                 <Typography variant="headline" component="h2"> FC Barcelona 
//                                 </Typography> 
//                                 <Typography component="p"> Tim terbaik sepanjang masa. </Typography> 
//                             </CardContent> 
//                             <CardActions> 
//                                 <Button size="small" color="primary"> Learn More </Button> 
//                             </CardActions>
//                         </Card> 
//                         </div>

//                     </div>
//                 </div>

{/* <div className='container bgPageTwo'>
<div className='row'>
    <div className='col-3'>
        <img src={image1} className='picture-page-two' alt=""/>
    </div>

    <div  className='col-3'>
    <span className=' tulisan-page-two'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio deserunt vel cupiditate ea. Hic rerum aspernatur sed consequatur veniam explicabo.
    </span>
    </div>

    <div className='col-6'>

    </div>
</div>
</div> */}

