import React from "react";
import './blog.css';
export default function BlogList (props) {

    const SingleBlog = (props) => {
        return(
            <div data-aos='fade-right' className="single-blog aos-init aos-animate row">
                <div className="col-12 col-md-4">
                    <div data-aos="flip-left" className="blog-image aos-init" >
                        <img className='img img-fluid' src ="/assets/img/person_2.jpg"/>
                    </div>
                </div>
                <div className="col-12 col-md-8">
                    <h6 className="time">Time</h6>
                    <h2 data-aos='fade-right' className="blog-heading aos-init">
                        Name of the blog
                    </h2>
                    
                    <p data-aos='fade-right' className="blog-content aos-init">
                        This will be the content of the blog
                    </p>
                    <br />
                    <div>
                        {/* all the icons */}
                        <i className="fa fa-user icon" /> users {' '} <i className="fa fa-folder icon" /> category {' '} <i className="fa fa-comments icon" /> comment{' '} <i className="fa fa-clock icon"/> 2 min read
                    </div>
                </div>
            </div>
        )
    }

    

    return (
        <div>
            {/* blog list */}
            {/* max three blogs for a button*/}
            {/* navigation buttons */}
            <SingleBlog />
            <SingleBlog />
            <SingleBlog />
        </div>
    )
}