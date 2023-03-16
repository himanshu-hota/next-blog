import React from 'react';
import Link from 'next/link';
import classes from './main-navigation.module.css';
import Logo from './Logo';

const MainNavigation = () => {
    return (
        <>
            <header className={classes.header}>
                <Link href='/' >
                    <Logo />
                </Link>

                <ul>
                    <li>
                        <Link href='/posts' >Posts</Link>
                    </li>
                    <li>
                        <Link href='/contact' >Contacts</Link>
                    </li>

                </ul>
            </header>
        </>
    )
}

export default MainNavigation;