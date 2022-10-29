import React, { useEffect, useState } from 'react'
import SingleBlog from '../SingleBlog'

const MyBlogs = () => {
    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/add_blog')
            .then(res => res.json())
            .then(data => (setIsLoading(!isLoading), setBlogs(data)))
    }, [])
    return (
        <div className="container">
            <h3 className='t-center m-2'>My Blogs</h3>{
                isLoading && <p className='p-2'> data loading.....</p>
            }
            <br />
            <div className="row">
                {blogs?.map(blog => <SingleBlog key={blog._id} blog={blog} />)}
            </div>

        </div>
    )
}

export default MyBlogs