import React from 'react';
import { ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import useQuickSearchSuggestions from '../../hooks/useQuickSearchSuggestions';

import classes from './QuickSearchSuggestions.module.css'

const QuickSearchSuggestions = (props) => {
    const { isValid, searchQuery } = props;

    const {
        hasSuggestions,
        isLoading,
        isOpen,
        items
    } = useQuickSearchSuggestions({ isValid, searchQuery });

    const suggestions = items.map(product => {
        return <ListGroup.Item key={product.id}>
            {product.name}
        </ListGroup.Item>
    });

    const shouldDisplaySuggestions = suggestions ? <div className={classes.suggestions}>
        <ListGroup>
            {suggestions}
        </ListGroup>
    </div> : null;

    if (isOpen && hasSuggestions) {
        return shouldDisplaySuggestions;
    } else if (isLoading) {
        return <div className={classes.suggestions}>
            <ListGroup.Item>Loading...</ListGroup.Item>
        </div>;
    } else if (isOpen && !hasSuggestions) {
        return <div className={classes.suggestions}>
            <ListGroup>
                <ListGroup.Item>No products found</ListGroup.Item>
            </ListGroup>
        </div>
    } else {
        return null;
    }
};

QuickSearchSuggestions.propTypes = {
    isValid: PropTypes.bool.isRequired,
    searchQuery: PropTypes.string.isRequired
};

export default QuickSearchSuggestions;
