import React from 'react';
import classes from './post-header.module.css';
import Image from 'next/image';

const PostHeader = (props) => {

    const { title,image} = props
    console.log(image);
    
  return (
    <header className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width={200} height={150} />
    </header>
  )
}

export default PostHeader;