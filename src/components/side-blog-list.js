import React from 'react';


export default function SideBlog (props) {
    console.log(props.blogs)

    const Archives = () => {
        return (
            <div data-aos="fade-left" className="side-box">
                <h6 className="blog-heading">Archives</h6>
                <i className="fa fa-chevron-right icon" /> January 2021
            </div>
        )
    }
    const Categories = () => {
        return (
            <div data-aos="fade-left" data-aos-delay="100" className="side-box"> 
                <h6 className="blog-heading">Categories</h6>
                <i className="fa fa-chevron-right icon" /> Adventure <br/>
                <i className="fa fa-chevron-right icon" /> Blog <br/>
                <i className="fa fa-chevron-right icon" /> Expedition  <br/>
                <i className="fa fa-chevron-right icon" /> Food <br/>
            </div>
        )
    }
    const Meta = () => {
        return (
            <div data-aos="fade-left" data-aos-delay="200" className="side-box">
                <h6 className="blog-heading">Meta</h6>
                <i className="fa fa-chevron-right icon" /> Login <br/>
                <i className="fa fa-chevron-right icon" /> Comments Feed <br/>
                <i className="fa fa-chevron-right icon" /> Entried Feed <br/>
                <i className="fa fa-chevron-right icon" /> WordPres <br/>
            </div>
        )
    }
    const RecentPosts = (props) => {
        return (
            <div data-aos="fade-left" data-aos-delay="300" className="side-box">
                <h6 className="blog-heading">Recent Posts</h6>
            {
                props.blogs.map(blog => {
                    return (<>
                        <i className="fa fa-chevron-right icon" /> {blog.Title} <br/>
                        </>
                    )
                })
            }
            </div>
        )
    }

    return (
        <div>
            <Archives />
            <Categories />
            <Meta />
            <RecentPosts blogs={props.blogs}/>

        </div>
    )
} 