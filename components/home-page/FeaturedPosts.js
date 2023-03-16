import React from 'react';
import classes from './featured-posts.module.css';
import PostsGrid from '../posts/PostsGrid';


const FeaturedPosts = (props) => {
  return (
    <>
        <section className={classes.latest}>
            <PostsGrid posts={props.posts} />
        </section>
    </>
  )
}

export default FeaturedPosts;