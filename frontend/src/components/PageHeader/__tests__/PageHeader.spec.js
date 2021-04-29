import React from 'react';
import { render } from '@testing-library/react';

import PageHeader from '../PageHeader';

jest.mock('../../Navigation', () => () => (<nav>Navigation</nav>));
jest.mock('../../HeaderActions', () => () => (<nav>Header actions</nav>));
jest.mock('../../QuickSearch', () => () => (<form>Quick search</form>));
jest.mock('../../PageLogo', () => () => (<a>Page logo</a>));

test('PageHeader renders correctly', () => {

    const { container } = render(<PageHeader />);

    expect(container).toMatchSnapshot();
});

