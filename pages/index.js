import React from 'react';
import Hero from '../components/home-page/Hero';
import FeaturedPosts from '../components/home-page/FeaturedPosts';
import { getFeaturedPosts } from '../lib/posts-util';
import Head  from 'next/head'; 

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



const HomePage = (props) => {


  return (
    <>
      <Head>
        <title>Hero's blog</title>
        <meta name='description' content='I post about programming ans web-development' />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  )
}

export const getStaticProps = () => {
  const featuredPosts = getFeaturedPosts();

  return {
    props:{
      posts:featuredPosts
    }
  }
}

export default HomePage;
