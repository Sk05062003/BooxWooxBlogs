import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import './blogs.css'
import { hexToRgb } from '@material-ui/core';
import icon from '../images/bookmark.svg'
import pic from '../images/img-1.jpg'

function Blog(blog) {

    return (
        <div className="blog-box">
            
            <div id="bmi"><img src={icon} alt="bookmark-icon" className={blog.bookmarked ? "icon" : "icon-inactive"} /></div>
            <div className="heading">
                <img src={pic} className="author-pic" />
                <div className="info">
                    <d id="username">{blog.user}</d>
                    <d id="date">{blog.date}</d>
                </div>
                <i id="likes-icon" className="fa fa-heart" />
                <div id="likes">{blog.likes}</div>
            </div>

            <div className="body">
                <img src={pic} className="image"/>

                <div className="content">
                    <h1>{blog.heading}</h1>
                    <p>{blog.content}</p>
                </div>

                <div class="footing">
                    <a href="#" className="author"><i class="fa fa-user"></i> {blog.author}</a>
                    <a href="#" className="tags"><i class="fa fa-tag fa-flip-horizontal"></i> {blog.tags}</a>
                    <a href="#" className="time"><i class="fa fa-clock-o"></i> {blog.time}</a>
                </div>
            </div>
        </div>
    )
}

const postsPerPage = 10;
let arrayForHoldingPosts = [];

const Blogs = ( {blogs, loading} ) => {
    if(loading) {
        return(
            <Loader id="load-ani" type="Rings" color="#FFBD06" height={70} width={70} timeout={5000} />
        );
    }
    
    var blogHolder = [];
    blogs.map( (blog, index) => (
            blogHolder.push( <Blog user = "silverduck204"
                authorPic = "{blogs[i].authorPic}"
                date = "{blogs[i].date}"
                likes = "{blogs[i].likes} "
                pic = "{blogs[i].pic}" 
                heading = {blog.title}
                content = {blog.body}
                author = "{blogs[i].author}"
                tags = "{blogs[i].tags}"
                time = "{blogs[i].time}"
                bookmarked = {true}
            />)
    ))

    return (
        <div>
            {blogHolder}
        </div>
    )
}

function Pagination() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setBlogs(resp.data);
            setLoading(false);
        }
        
        fetchBlogs();
    }, [])

    const [postsToShow, setPostsToShow] = useState([{title:"Lorem ipsum dolor sit amet", body:"He is a very good boy"}]);
    const [next, setNext] = useState(0);

    const loopWithSlice = (start, end) => {
        const slicedPosts = blogs.slice(start, end);
        arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
        setPostsToShow(arrayForHoldingPosts);
    };

    useEffect(() => {
        loopWithSlice(0, postsPerPage);
        console.log(blogs);
    }, []);

    const handleShowMorePosts = () => {
        loopWithSlice(next, next + postsPerPage);
        setNext(next + postsPerPage);
    };

    // console.log(blogs);

    return (
        <div>
            <Blogs blogs={postsToShow} loading={loading} />
            <div id = {(next >= 100 || loading) ? "load-inactive" : "load-up"} onClick={handleShowMorePosts}><a id="load">Load more</a></div>
        </div>
    )
}

export default Pagination