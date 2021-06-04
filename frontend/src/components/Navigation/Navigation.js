import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import useNavigation from '../../hooks/useNavigation';

const Navigation = () => {
    const { navigationData } = useNavigation();
    const navigationItems = navigationData.map(navItem =>
        <Nav.Item key={navItem.id}>
            <Nav.Link href={navItem.categoryUrl}>{navItem.name}</Nav.Link>
        </Nav.Item>
    );


    const shouldDisplayNavigation = navigationItems && navigationItems.length ? <Navbar.Collapse id="primary-nav">
        <Nav className="mr-auto" activeKey="/">
            {navigationItems}
        </Nav>
    </Navbar.Collapse> : null;

    return <Navbar bg="light" expand="lg" style={{minHeight: '56px'}}>
        <Container>
            <a href="/" className="d-lg-none">React Apollo</a>
            <Navbar.Toggle aria-controls="primary-nav" />
            {shouldDisplayNavigation}
        </Container>
    </Navbar>
};

export default Navigation;
