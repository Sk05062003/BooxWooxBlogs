import React ,{useEffect, useState} from "react";
import Carousel from 'react-material-ui-carousel'
import './carousel.css';
export default function CarouselItem (props) {
    const [loading , setLoading] = useState(true);
    const [blogs ,setBlogs] = useState(props.blogs);
    useEffect(()=> {
        setBlogs(props.blogs)
    })
    const Item = (props) => {
        
        return (
            <div className="container">
            <div className="row">
            <div className="col-md-1 left-carousel-item"></div>
            <div className="carousel-container col-md-9 col-12" style={{backgroundImage : "url(/assets/img/main.jpg)"}}>
            <div className="carouselItem">
                <h1>{props.title}</h1>
                <p>{props.author}</p>
            </div>
            </div>
            <div className="col-md-1 right-carousel-item"></div>
            </div>
            </div>
        )
    }
    const CarouselItems = () => {
        return (
        <Carousel
        animation="slide"
        timeout={1000}
        navButtonsAlwaysVisible = {true}
        interval={4000}
        stopAutoPlayOnHover={true}
        autoPlay={true}
        cycleNavigation={true}
        fullHeightHover={true}
        >
            {blogs.map((blog,index)=>{
                return <Item key={index} title={blog.Title} author={blog.Author} />
            })}
        </Carousel>
        )
    };

    return (
        
        <div  style={{marginRight :100+'px' , marginLeft : 100+'px', borderRadius : 5+'px',backgroundColor:'transparent'}}>
            { console.log(blogs)}
            <CarouselItems />
        </div>
    )
}
