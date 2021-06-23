import React from 'react';
import s from './Header.module.css';

type HeaderProps = {
    title: string
}

const Header = ({ title }: HeaderProps ) => {
    return <h1 className={ s.header }>{ title }</h1>
}

export default Header;