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

    const shouldDisplayNavigation = navigationItems && navigationItems.length ? <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="primary-nav" />
            <Navbar.Collapse id="primary-nav">
                <Nav className="mr-auto" activeKey="/">
                    {navigationItems}
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar> : null;

    return shouldDisplayNavigation;
};

export default Navigation;
