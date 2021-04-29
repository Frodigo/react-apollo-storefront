import React from 'react';
import { render } from '@testing-library/react';

import PageLogo from '../PageLogo';

test('PageLogo renders correctly', () => {

    const { container } = render(<PageLogo />);

    expect(container).toMatchSnapshot();
});

