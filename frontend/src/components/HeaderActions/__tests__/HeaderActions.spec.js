import React from 'react';
import { render } from '@testing-library/react';

import HeaderActions from '../HeaderActions';

test('HeaderActions renders correctly', () => {

    const { container } = render(<HeaderActions />);

    expect(container).toMatchSnapshot();
});

