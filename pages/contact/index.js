import React from 'react';
import ContactForm from '../../components/contact/ContactForm';
import Head from 'next/head'; 

const Contact = () => {
  return (
    <>
      <Head>
        <title>Hero's Contact</title>
        <meta name='description' content='Send me your messages' />
      </Head>
      <ContactForm />
    </>
  )
}

export default Contact;