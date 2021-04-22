import React from 'react';
import { render } from '@testing-library/react';

import Navigation from '../Navigation';
import useNavigation from '../../../hooks/useNavigation';

jest.mock('../../../hooks/useNavigation');

test('Navigation renders correctly', () => {
    useNavigation.mockReturnValueOnce({
        navigationData:  [
            {
                "__typename": "CategoryTree",
                "id": 38,
                "include_in_menu": 1,
                "name": "What's New",
                "position": 1,
                "url_path": "what-is-new",
                "url_suffix": ".html",
                "categoryUrl": "/category/what-is-new.html"
            },
            {
                "__typename": "CategoryTree",
                "id": 20,
                "include_in_menu": 1,
                "name": "Women",
                "position": 2,
                "url_path": "women",
                "url_suffix": ".html",
                "categoryUrl": "/category/women.html"
            },
            {
                "__typename": "CategoryTree",
                "id": 11,
                "include_in_menu": 1,
                "name": "Men",
                "position": 3,
                "url_path": "men",
                "url_suffix": ".html",
                "categoryUrl": "/category/men.html"
            },
            {
                "__typename": "CategoryTree",
                "id": 3,
                "include_in_menu": 1,
                "name": "Gear",
                "position": 4,
                "url_path": "gear",
                "url_suffix": ".html",
                "categoryUrl": "/category/gear.html"
            },
            {
                "__typename": "CategoryTree",
                "id": 9,
                "include_in_menu": 1,
                "name": "Training",
                "position": 5,
                "url_path": "training",
                "url_suffix": ".html",
                "categoryUrl": "/category/training.html"
            },
            {
                "__typename": "CategoryTree",
                "id": 37,
                "include_in_menu": 1,
                "name": "Sale",
                "position": 6,
                "url_path": "sale",
                "url_suffix": ".html",
                "categoryUrl": "/category/sale.html"
            }
        ]
    })
    const { container } = render(<Navigation />);

    expect(container).toMatchSnapshot();
});

test('Navigation not renders if there is no items', () => {
    useNavigation.mockReturnValueOnce({
        navigationData: []
    })
    const { container } = render(<Navigation />);

    expect(container.firstChild).toBeNull();
});
