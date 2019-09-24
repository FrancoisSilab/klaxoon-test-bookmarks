import React from 'react';

import './link-item.styles.scss';

import LinkIcon from '../list-icon/list-icon.component.jsx'

const LinkItem = () => (
    <li className='listItem'>
        <span className='listItem-title'>Titre</span>
        <span className='listItem-origins'>
            <p>Author</p>
            <p>Date</p>
        </span>
        <a className='listItem-url' href="https://www.youtube.com" target='_blank'>https://www.youtube.com/fcqizejbfcuzeqbcujebvcuersbvhfcerqvfvqerfv </a>
        <LinkIcon edit code='&#9998;'></LinkIcon>
        <LinkIcon erase code='&#10007;'></LinkIcon>
    </li>
);

export default LinkItem;    
