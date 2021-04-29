import React from 'react';
import { render } from '@testing-library/react';

import QuickSearch from '../QuickSearch';

test('QuickSearch renders correctly', () => {

    const { container } = render(<QuickSearch />);

    expect(container).toMatchSnapshot();
});

