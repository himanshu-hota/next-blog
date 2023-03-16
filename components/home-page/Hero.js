import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
      <section className={classes.hero}>
          <div className={classes.image}>
              <Image src="/image/site/person.jpg" alt="ziyan" width={300} height={300} />
          </div>

          <h1>Hi, I am Hero</h1>
          <p>I blog about web dev - especially frontend framework React </p>
      </section>
  )
}

export default Hero;