import React from 'react';

import './homepage.styles.scss';

import LinkList from '../../components/link-list/link-list.component.jsx'

const HomePage = () => (
    <div>
        <h1>List Page</h1>
        <LinkList></LinkList>
    </div>
);

export default HomePage;