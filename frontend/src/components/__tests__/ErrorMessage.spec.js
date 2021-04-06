import React from 'react';
import { render, getByText } from '@testing-library/react';

import ErrorMessage from '../ErrorMessage';

test('ErrorMessage renders correctly', () => {
    const { container } = render(
        <ErrorMessage error={{message: 'Something went wrong.'}}/>
    );

    expect(getByText(container, 'Something went wrong.')).toBeDefined();
    expect(container).toMatchSnapshot();
});


test('ErrorMessage does not render if error message is empty', () => {
    const { container } = render(
        <ErrorMessage error={{message: ''}}/>
    );

    expect(container.firstChild).toBeNull();
});
