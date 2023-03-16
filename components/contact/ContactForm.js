import React, { useRef, useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const sendContactData = async (message) => {

    const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(message),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = res.json();

    if (!res.ok) {
        throw new Error(data.message || 'Something went wrong')
    }
}

const ContactForm = () => {

    const emailRef = useRef();
    const messageRef = useRef();
    const nameRef = useRef();
    const [reqStatus, setReqStatus] = useState();
    const [reqError, setReqError] = useState();

    useEffect(() => {

        let timer;

        if (reqStatus === 'success' || reqStatus === 'error') {
            timer = setTimeout(() => {
                setReqError(null);
                setReqStatus(null);
            }, 3000)
        }

        return () => clearTimeout(timer);


    }, [reqStatus, reqError])



    const sendMessageHandler = async (e) => {
        e.preventDefault();
        const message = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        setReqStatus('pending');

        try {
            await sendContactData(message);
            setReqStatus('success');
            nameRef.current.value = '';
            emailRef.current.value = '';
            messageRef.current.value = '';

        } catch (err) {
            setReqStatus('error');
            setReqError(err);
        }

        // Clear inputs

    }

    let notification ={}; 

    if (reqStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on the way!!!'
        }
    }

    if (reqStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success',
            message: 'Message sent successfully!!!'
        }
    }

    if (reqStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!!!',
            message: reqError
        }
    }

    const disabled = notification.status === 'pending' ? true : false

    return <>
        <section className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessageHandler}>

                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id='email' required ref={emailRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id='name' required ref={nameRef} />
                    </div>

                </div>
                <div className={classes.control}>
                    <label htmlFor="message">Your message</label>
                    <textarea name="message" id="message" cols="30" rows="10" ref={messageRef} ></textarea>
                </div>

                <div className={classes.actions}>
                    <button disabled={disabled}>Send Message</button>
                </div>
            </form>

            {
                notification.status && <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            }

        </section>
    </>
}

export default ContactForm;