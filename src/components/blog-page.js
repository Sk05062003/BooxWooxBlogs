import React,{useEffect, useState} from "react";
import CarouselItem from "./CarouselItem"
import Nav from "./nav";
import BlogList from "./blogs-list";
import Footer from "./footer"
import SideBlog from './side-blog-list';
export default function BlogPage () {
    const [blogs,setBlogs] =useState([]);
    // useEffect(()=>{
    //     const address = 'https://og4xo5agm5.execute-api.ap-south-1.amazonaws.com/Prod/readBlog';
    //     fetch(address , {
    //         method : 'get',
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         var blogs = data.data.filter((item,index)=> {
    //            return(index+1<=5);
    //         })
    //         console.log(blogs);
    //         setBlogs(blogs);
    //         setLoading(false);
    //     })
    // }, []);
    useEffect(()=> {
        setBlogs([
            {
                "Author": "Shivam Kushwah",
                "Content": "this one is from postman",
                "Title": "Lets do suicide"
            },
            {
                "Author": "Shivam Kushwah",
                "Content": "this one is from postman",
                "Title": "Lets do suicide"
            },
            {
                "Author": "Shivam Kushwah",
                "Content": "this one is from postman",
                "Title": "Lets do suicide"
            }   
            ])
    } , [])
    
    return (
        <>
            <Nav />
            <CarouselItem blogs={blogs}/>
            <div className="container" >
                <div className="row">
                    <div className=" col-8">
                        <BlogList blogs={blogs} />
                    </div>
                    <div className="col-4" style={{padding:20+'px'}}>
                        <SideBlog  blogs={blogs} />
                    </div>
                </div>
                
            </div>
            <div style={{height:100+'px',overflow:'hidden'}}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{height:100+'%', width:100+'%'}}><path d="M-64.41,-9.67 C291.11,236.13 359.39,-124.79 507.81,94.68 L500.00,149.25 L-0.00,149.25 Z" style={{stroke:'none' , fill : 'white'}}></path></svg></div>
            <div className="footer">
               <Footer /> 
            </div>
            
        </>
    )
}