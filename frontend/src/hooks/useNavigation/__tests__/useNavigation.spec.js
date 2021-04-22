import React from 'react';
import { render, FindBy } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import useNavigation from '../useNavigation'

jest.mock('@apollo/client');

const setupHook = () => {
    const returnVal = {}

    const TestComponent = () => {
        Object.assign(returnVal, useNavigation());

        return null
    }

    render(<TestComponent />)

    return returnVal
}


test('Should render proper shape', () => {
    useQuery.mockReturnValue(
        {
            "data": {
                "categoryList": [
                    {
                        "id": 2,
                        "name": "Default Category",
                        "children": [
                            {
                                "id": 38,
                                "include_in_menu": 1,
                                "name": "What's New",
                                "position": 10,
                                "url_path": "what-is-new",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 20,
                                "include_in_menu": 0,
                                "name": "Women",
                                "position": 2,
                                "url_path": "women",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 11,
                                "include_in_menu": 1,
                                "name": "Men",
                                "position": 3,
                                "url_path": "men",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 3,
                                "include_in_menu": 1,
                                "name": "Gear",
                                "position": 4,
                                "url_path": "gear",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 9,
                                "include_in_menu": 1,
                                "name": "Training",
                                "position": 5,
                                "url_path": "training",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 37,
                                "include_in_menu": 1,
                                "name": "Sale",
                                "position": 1,
                                "url_path": "sale",
                                "url_suffix": ".html"
                            }
                        ]
                    }
                ]
            }
        }
    );

    const hookProps = setupHook();

    expect(hookProps).toMatchSnapshot();
});


test('Should sort items', () => {
    useQuery.mockReturnValue(
        {
            "data": {
                "categoryList": [
                    {
                        "id": 2,
                        "name": "Default Category",
                        "children": [
                            {
                                "id": 38,
                                "include_in_menu": 1,
                                "name": "What's New",
                                "position": 10,
                                "url_path": "what-is-new",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 20,
                                "include_in_menu": 1,
                                "name": "Women",
                                "position": 1,
                                "url_path": "women",
                                "url_suffix": ".html"
                            }
                        ]
                    }
                ]
            }
        }
    );

    const hookProps = setupHook();

    expect(hookProps.navigationData[0].name).toEqual('Women');
});

test('Should not render items that are not included in menu', () => {
    useQuery.mockReturnValue(
        {
            "data": {
                "categoryList": [
                    {
                        "id": 2,
                        "name": "Default Category",
                        "children": [
                            {
                                "id": 38,
                                "include_in_menu": 1,
                                "name": "What's New",
                                "position": 10,
                                "url_path": "what-is-new",
                                "url_suffix": ".html"
                            },
                            {
                                "id": 20,
                                "include_in_menu": 0,
                                "name": "Women",
                                "position": 1,
                                "url_path": "women",
                                "url_suffix": ".html"
                            }
                        ]
                    }
                ]
            }
        }
    );

    const hookProps = setupHook();

    expect(hookProps.navigationData.length).toEqual(1);

});
