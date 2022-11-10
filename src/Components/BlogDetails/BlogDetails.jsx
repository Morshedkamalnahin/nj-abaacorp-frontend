import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'


const BlogDetails = () => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/add_blog/${blogId}`).then(res => res.json()).then(data => setBlog(data))
    }, [])


    return (
        <div className="container">
            <article class="uk-article uk-article-details">

                <div class="uk-article-content">
                    <div class="uk-article-content-inner">
                        <div class="uk-width-large-5-6 uk-width-xlarge-4-6 uk-container-center uk-padding-bottom">

                            <h1 class="uk-article-title">{blog.title}</h1>
                            <p class="uk-article-introtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis malesuada turpis. In non nibh vitae mi hendrerit eleifend eu eget lorem. Sed efficitur egestas efficitur. Fusce fermentum placerat sollicitudin. Quisque sollicitudin elit sit amet tincidunt dictum.</p>
                            <p class="uk-article-dropcaps">Horem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis malesuada turpis. In non nibh vitae mi hendrerit eleifend eu eget lorem. Sed efficitur egestas efficitur. Fusce fermentum placerat sollicitudin. Quisque sollicitudin elit sit amet tincidunt dictum. Ut in lorem maximus, sodales sem eu, volutpat lorem. Maecenas volutpat laoreet orci non rhoncus. Nulla facilisi. Vestibulum laoreet porttitor metus eget consectetur.</p>
                        </div>
                        <div class="uk-text-center uk-width-xlarge-5-6 uk-container-center">
                            <img src={` data:image/jpeg;base64,${blog.img}`} alt="" />
                        </div>


                    </div>
                </div>




            </article>
        </div>

    )
}

export default BlogDetails