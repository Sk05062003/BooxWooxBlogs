import React from 'react'
import './createBlogBox.css'
import { Link } from 'react-router-dom';

function CreateBlogBox() {
    return (
        <div className = "create-blog-box">
            <div className = "lines" id = "line-1">Publish your thoughts</div>
            <div className = "lines" id = "line-2">Create blogs for free</div>
            <div className = "lines" id = "line-3"><Link to = "/" id = "link">Create Blog</Link></div>
        </div>
    )
}

export default CreateBlogBox