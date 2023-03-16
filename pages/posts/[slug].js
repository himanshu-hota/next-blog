import React from 'react';
import PostContent from '../../components/posts/post-details/PostContent';
import { getPostData, getPostsFiles } from '../../lib/posts-util';
import Head from 'next/head';
const PostDetails = (props) => {



  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
        <PostContent post={props.post} />
    </>
  )
}

export const getStaticPaths = () => {
  const postFilesName = getPostsFiles();

  const slugs = postFilesName.map(file => file.replace(/\.md$/, ''));

  return {
    paths:slugs.map(slug => ({params:{slug:slug}})),
    fallback:false
  }

}

export const getStaticProps = (context) => {
  const {params} = context;
  const {slug} = params;
  const postData = getPostData(slug);

  return {
    props:{
      post:postData
    },
  }

}

export default PostDetails;