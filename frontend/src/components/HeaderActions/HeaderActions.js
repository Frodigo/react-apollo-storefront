import React from 'react';
import { Nav } from 'react-bootstrap';

const HeaderActions = () => {
    return (
        <Nav style={{marginLeft: 'auto'}}>
            <Nav.Item>
                <Nav.Link href="#">
                    <i className="bi bi-heart-fill"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">
                    <i className="bi bi-person-fill"></i>
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">
                    <i className="bi bi-cart-fill"></i>
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};


export default HeaderActions;
