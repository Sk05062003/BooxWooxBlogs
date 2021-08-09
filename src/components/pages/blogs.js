import React, {useState} from 'react'
import './blogs.css'
import icon from '../images/bookmark.svg'
import authorPic from '../images/img-2.jpg'
import pic from '../images/img-1.jpg'
import { Link } from 'react-router-dom'

import Pagination from './pagination';

const blogs = [
    { user:"silverduck204",
    authorPic:{authorPic},
    date:"July 20, 2021", 
    likes:24, 
    pic:{pic}, 
    heading:"Jammu Kashmir is the most happening state of India", 
    content:"Jammu Kashmir is the most happening state of India. Jammu Kashmir is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
    author:"Xaviers",
    tags:"Horror, timepass",
    time:"2 mins",
    bookmarked:true
    },
    { user:"silverduck204",
    authorPic:{authorPic},
    date:"July 20, 2021", 
    likes:24, 
    pic:{pic}, 
    heading:"Jammu Kashmir is the most happening state of India", 
    content:"Jammu Kashmir is the most happening state of India. Jammu Kashmir is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
    author:"Xaviers",
    tags:"Horror, timepass",
    time:"2 mins",
    bookmarked:false
    },
    { user:"silverduck204",
    authorPic:{authorPic},
    date:"July 20, 2021", 
    likes:24, 
    pic:{pic}, 
    heading:"Jammu Kashmir is the most happening state of India", 
    content:"Jammu Kashmir is the most happening state of India. Jammu Kashmir is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
    author:"Xaviers",
    tags:"Horror, timepass",
    time:"2 mins",
    bookmarked:true
    },
    { user:"silverduck204",
    authorPic:{authorPic},
    date:"July 20, 2021", 
    likes:24, 
    pic:{pic}, 
    heading:"Jammu Kashmir is the most happening state of India", 
    content:"Jammu Kashmir is the most happening state of India. Jammu Kashmir is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
    author:"Xaviers",
    tags:"Horror, timepass",
    time:"2 mins",
    bookmarked:true
    },
    { user:"catwalk804",
    authorPic:{authorPic},
    date:"July 27, 2021", 
    likes:243, 
    pic:{pic}, 
    heading:"ReactJS is the best web framework", 
    content:"React is the most happening web framework. React is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
    author:"Katherine D'souza",
    tags:"Web, timepass",
    time:"60 mins",
    bookmarked:true
    },
]

// const blog = { user:"silverduck204",
//     authorPic:{authorPic},
//     date:"July 20, 2021", 
//     likes:24, 
//     pic:{pic}, 
//     heading:"Jammu Kashmir is the most happening state of India", 
//     content:"Jammu Kashmir is the most happening state of India. Jammu Kashmir is a northern state of India. Jammu Kashmir is well-known for it's scenic destinations.",
//     author:"Xaviers",
//     tags:"Horror, timepass",
//     time:"2 mins",
//     bookmarked:true
// };




function Blog(blog) {

    return (
        <div className="blog-box">
            
            <div id="bmi"><img src={icon} alt="bookmark-icon" className={blog.bookmarked ? "icon" : "icon-inactive"} /></div>
            <div className="heading">
                <img src={authorPic} className="author-pic" />
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

class Blogs extends React.Component {
    render() {
        var blogHolder = [];
        for(let i = 0; i < blogs.length; i ++) {
            blogHolder.push( <Blog user = {blogs[i].user}
                authorPic = {blogs[i].authorPic}
                date = {blogs[i].date}
                likes = {blogs[i].likes} 
                pic = {blogs[i].pic} 
                heading = {blogs[i].heading}
                content = {blogs[i].content}
                author = {blogs[i].author}
                tags = {blogs[i].tags}
                time = {blogs[i].time}
                bookmarked = {blogs[i].bookmarked}
            />)
        }

        return (
            <div id = "blogs-list">
            {blogHolder}
            </div>
        )
    }
}

function BlogsPage() {
    const [sortAttribute, setSortAttribute] = useState("recommended");
    const [sortAscending, setSortAscending] = useState(true);
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const [categoryMenu, setCategoryMenu] = useState(false);

    const showDropdownMenu = () => setDropdownMenu((prevState) => !prevState);
    const showCategoryMenu = () => setCategoryMenu((prevState) => !prevState);

    return (
        <div>
        <div id="access-bar">
        <div id="acess-drop-title"><div id="access-drop-down" onClick={() => {showCategoryMenu()}}>Category<i id="access-down-arrow" className={dropdownMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"} /></div></div>

        <div id={categoryMenu ? "access-sort-orders" : "access-sort-orders-inactive"}>
            <Link to="/" id="access-sort-order">Adventure</Link>
            <Link to="/" id="access-sort-order">Horror</Link>
            <Link to="/" id="access-sort-order">Filmy</Link>
            <Link to="/" id="access-sort-order">Politics</Link>
            <Link to="/" id="access-sort-order">Bollywood</Link>
            <Link to="/" id="access-sort-order">Hollywood</Link>
        </div>


        <div id="acess-drop-title"><div id="access-drop-down" onClick={() => {showDropdownMenu()}}>Sort by {sortAttribute} <i id="access-down-arrow" className={dropdownMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"} /></div><i id="access-sort-direction" className={sortAscending ? "fa fa-sort-amount-asc" : "fa fa-sort-amount-desc"} onClick={() => setSortAscending(!sortAscending)}/></div>

        <div id={dropdownMenu ? "access-sort-orders" : "access-sort-orders-inactive"}>
            <div id="access-sort-order" onClick={() => {setSortAttribute("recommended"); showDropdownMenu()}}>Sort by recommended</div>
            <div id="access-sort-order" onClick={() => {setSortAttribute("popularity"); showDropdownMenu()}}>Sort by popularity</div>
            <div id="access-sort-order" onClick={() => {setSortAttribute("rating"); showDropdownMenu()}}>Sort by rating</div>
            <div id="access-sort-order" onClick={() => {setSortAttribute("date posted"); showDropdownMenu()}}>Sort by date posted</div>
            <div id="access-sort-order" onClick={() => {setSortAttribute("duration"); showDropdownMenu()}}>Sort by duration</div>
        </div>
        </div>

            <div id = "whole">
                <div id = "core">
                    <div id = "nav"><Link to = "/"><i id="arrow" className="fa fa-arrow-left"></i></Link>Blogs</div>
                    {/* <Blogs />     */}
                    <Pagination />
                </div>
                <div id = "side">
                <div id="drop-title"><div id="drop-down" onClick={() => {showDropdownMenu()}}>Sort by {sortAttribute} <i id="down-arrow" className={dropdownMenu ? "fa fa-chevron-up" : "fa fa-chevron-down"} /></div><i id="sort-direction" className={sortAscending ? "fa fa-sort-amount-asc" : "fa fa-sort-amount-desc"} onClick={() => setSortAscending(!sortAscending)}/></div>

                <div id={dropdownMenu ? "sort-orders" : "sort-orders-inactive"}>
                    <div id="sort-order" onClick={() => {setSortAttribute("recommended"); showDropdownMenu()}}>Sort by recommended</div>
                    <div id="sort-order" onClick={() => {setSortAttribute("popularity"); showDropdownMenu()}}>Sort by popularity</div>
                    <div id="sort-order" onClick={() => {setSortAttribute("rating"); showDropdownMenu()}}>Sort by rating</div>
                    <div id="sort-order" onClick={() => {setSortAttribute("date posted"); showDropdownMenu()}}>Sort by date posted</div>
                    <div id="sort-order" onClick={() => {setSortAttribute("duration"); showDropdownMenu()}}>Sort by duration</div>
                </div>

                <div id="side-menu">
                <div>Category</div>
                    <hr/>
                    <ul>
                    <Link to="/" id="link"><li>Adventure</li></Link>
                    <Link to="/" id="link"><li>Horror</li></Link>
                    <Link to="/" id="link"><li>Filmy</li></Link>
                    <Link to="/" id="link"><li>Politics</li></Link>
                    <Link to="/" id="link"><li>Bollywood</li></Link>
                    <Link to="/" id="link"><li>Hollywood</li></Link>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsPage