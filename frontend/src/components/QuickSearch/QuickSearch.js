import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const QuickSearch = () => {
    return (
        <Form inline className="w-100 justify-content-center">
            <FormControl type="text" placeholder="Search entire shop" className="mr-2 w-75"/>
            <Button variant="outline-success">
                <i className="bi bi-search"></i>
            </Button>
        </Form>
    );
};


export default QuickSearch;
