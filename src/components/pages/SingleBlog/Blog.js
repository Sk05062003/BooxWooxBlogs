import React, { useState, useEffect } from 'react';
import "./Blog.css";
import authorPic from "../../images/img-2.jpg";
import pic from "../../images/img-1.jpg";
import Pagination from './pagination';

function Blog(blog) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }, [])

    const [repliesOpen,setRepliesOpen] = useState(true);
    const [heart,setHeart] = useState(false);
    const [commenttxt, setCommentTxt] = useState("");

    return(
        <div id="page">
            <div id="authorInfo">
                <img src={authorPic} id="authorpicture" height="90px" width="90px" ></img>
                <div>
                    <p id="authorname">{blog.authorName==null?"Silver Duck":blog.authorName}</p>
                    <p id="authortitle">{blog.authorTitle==null?"Silver Badge Owner":blog.authorTitle}</p>
                </div>
            </div>
            <div id="contentBody">
                <div id="blogshare">
                    <p id="authortxt">Author</p>
                    <div className="line1"></div>
                    <p id="authornamea">{blog.authorName==null?"Silver Duck":blog.authorName}</p>
                    <div id="authortitlebox">
                        <p id="authortitlea">{blog.authorTitle==null?"He is a Silver Badge Owner":blog.authorTitle}</p>
                    </div>
                    <div className="line2"></div>
                    <div id="icons">
                        <div className="heart" onClick={()=>{setHeart(!heart)}}>
                            <i id={heart?"heartActive":"heartInactive"} className={heart?"fas fa-heart":"far fa-heart"}></i>
                        </div>
                        <div className="share">
                            <i id="shareicon" className="fas fa-share-alt"></i>
                        </div>
                    </div>
                    
                </div>
                <div id="content">
                <div>
                    <h1 id="blogtitle">{blog.title==null?"Jammu Kashmir is the most Happening State":blog.title}</h1>
                    <img src={pic}></img>
                    <p>{blog.content==null?"This is content of blog":blog.content}</p>
                </div>
                <div className="commentSection">
                    <form onSubmit={()=>setCommentTxt("")}>
                        <textarea id="comment" name="comment" rows="4" cols="50" placeholder="Comment" onChange={
                            (evt)=>setCommentTxt(evt.target.value)
                        }>{commenttxt}</textarea>
                        <button>Post</button>
                    </form>
                    <div className="readComment">
                        <p>My first commment</p>
                        <p>replies</p>
                        <div onClick={()=>{setRepliesOpen(!repliesOpen)}}>
                            <i id={repliesOpen?"dropdown":"shrinkup" } className={repliesOpen?"fas fa-angle-down":"fas fa-angle-up"}></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                
            <Pagination/>
        </div>
    );

}

export default Blog;