import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import QuickSearchSuggestions from '../QuickSearchSuggestions';

const QuickSearch = () => {
    const [ isValid, setIsValid] = useState(false);
    const [ searchQuery, setSearchQuery ] = useState('');

    const handleChange = value => {
        const valueEntered = !!value;
        const isValid = valueEntered && value.length > 3;

        setIsValid(isValid);
        setSearchQuery(value);
    }

    return (
        <div className="justify-content-center d-flex position-relative">
            <Form inline className="w-100">
                <FormControl type="text" placeholder="Search entire shop" className="w-100" onChange={e => handleChange(e.target.value)}/>
            </Form>
            <QuickSearchSuggestions isValid={isValid} searchQuery={searchQuery}/>
        </div>
    );
};

export default QuickSearch;
