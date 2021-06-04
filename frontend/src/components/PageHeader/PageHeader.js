import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderActions from '../HeaderActions';

import Navigation from '../Navigation';
import PageLogo from '../PageLogo';
import QuickSearch from '../QuickSearch'

const PageHeader = () => {
    return (
        <header>
            <Container className="d-none d-lg-block">
                <Row className="d-flex align-items-center pb-3 pt-3">
                    <Col sm={3}>
                        <PageLogo/>
                    </Col>
                    <Col sm={6}>
                        <QuickSearch/>
                    </Col>
                    <Col sm={3} className="d-flex">
                        <HeaderActions/>
                    </Col>
                </Row>
            </Container>
            <Navigation/>
        </header>
    );
};


export default PageHeader;
