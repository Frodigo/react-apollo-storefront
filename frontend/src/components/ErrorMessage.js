import React from 'react';
import PropTypes from 'prop-types';

import classes from './ErrorMessage.module.css';

/**
 * Component for showing an error message.

 * @param {{
 *  message {string} - error message
 * }} props
 * @returns React.element
 */
const ErrorMessage = (props) => {
    const { error, ...rest } = props;

    const shouldDisplayError = error && error.message ?
        <div className={classes.errorMessage} {...rest}>{error.message}</div>
        :
        null
    ;

    return shouldDisplayError;
};

ErrorMessage.propTypes = {
    error: PropTypes.shape({
        message: PropTypes.string.isRequired
    })
};

export default ErrorMessage;
