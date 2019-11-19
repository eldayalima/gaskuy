import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
// IMPORT IMAGE 
import image1 from '../image/content2.jpg'
import image2 from '../image/content5.jpg'
import image3 from '../image/content3.jpg'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'


export class PageTwo extends Component {
    render() {
        return (
            <Fade>
                <div className='container'>
                    <div className='row'>

                            <div className='col-6'>
                                <div className='card mb-3'>
                                    <div className='card-horizontal'>
                                        <div >
                                            <img src={image1} style={{width:200}} alt=""/>
                                        </div>
                                        <div className='card-body'>
                                            <h4 className='card-title'>Etnic Event</h4>
                                            <p className='card-text'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo quam dolore accusamus, porro eaque doloribus ducimus saepe incidunt blanditiis.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='card mb-3'>
                                    <div className='card-horizontal'>
                                        <div className='card-body'>
                                            <h4 className='card-title'>Book Event</h4>
                                            <p className='card-text'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque illo quam dolore accusamus, porro eaque doloribus ducimus saepe incidunt blanditiis.
                                            </p>
                                        </div>
                                        <div >
                                            <img src={image3} style={{width:200}} alt=""/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='col-6'>                  
                                <Card> 
                                    <CardMedia style={{height: 0, paddingTop: '35%'}} image={image2} title="Barcelona"/>
                                    <CardContent> 
                                        <Typography variant="headline" component="h2"> 
                                            Concert Event 
                                        </Typography> 
                                        <Typography component="p"> Tim terbaik sepanjang masa. </Typography> 
                                    </CardContent> 
                                    <CardActions> 
                                        <Button href='/event' size="small" color="primary"> Learn More </Button> 
                                    </CardActions>
                                </Card> 
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

