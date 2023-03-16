import React from 'react';
import AllPosts from '../../components/posts/AllPosts';
import { getAllPosts } from '../../lib/posts-util';
import Head from 'next/head'; 

// const DUMMY_POSTS = [
//   {
//     title: 'Getting started with NextJS!!!',
//     image: 'getting-started-nextjs.png',
//     date: '2023-03-13',
//     excerpt: 'Next Js is for production level react',
//     slug: 'getting-started-with-nextjs'
//   },
//   {
//     title: 'Getting started with NextJS!!!',
//     image: 'getting-started-nextjs.png',
//     date: '2023-03-13',
//     excerpt: 'Next Js is for production level react',
//     slug: 'getting-started-with-nextjs2'
//   },
//   {
//     title: 'Getting started with NextJS!!!',
//     image: 'getting-started-nextjs.png',
//     date: '2023-03-13',
//     excerpt: 'Next Js is for production level react',
//     slug: 'getting-started-with-nextjs3'
//   },
//   {
//     title: 'Getting started with NextJS!!!',
//     image: 'getting-started-nextjs.png',
//     date: '2023-03-13',
//     excerpt: 'Next Js is for production level react',
//     slug: 'getting-started-with-nextjs4'
//   },

// ];

const Allposts = (props) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta name='description' content='A list of all programming tutorial' />
      </Head>
        <AllPosts posts={props.posts} />
    </>
  )
}

export const getStaticProps = () => {
  const allPosts = getAllPosts();

  return {
    props:{
      posts:allPosts
    }
  }
}

export default Allposts;