import React from 'react'
import BlogInfo from './BlogInfo'
import BlogPostMain from './BlogPost/BlogPostMain'

const BlogMain = () => {
  return (
    <section>
        <div className="container">
            <div className="blog">
                <BlogInfo />
                <BlogPostMain />
            </div>
        </div>
    </section>
  )
}

export default BlogMain