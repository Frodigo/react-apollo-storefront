import { gql } from "@apollo/client";

export const GET_QUICK_SEARCH_SUGGESTIONS = gql`
    query getQuickSearchSuggestions($searchQuery: String!) {
        products(search: $searchQuery) {
            items {
                id
                name
                small_image {
                    url
                }
                url_key
                url_suffix
                price {
                    regularPrice {
                        amount {
                            value
                            currency
                        }
                    }
                }
            }
        }
    }
`;

export const GET_PRODUCT_DATA_BY_URL_KEY = gql`
    query getProductDataByURLKey($urlKey: String!) {
        products(filter: { url_key: { eq: $urlKey } }) {
            items {
                uid
                name
                image {
                    url
                    label
                }
                description {
                    html
                }
                url_key
                url_suffix
                sku
                stock_status
                price_range {
                    minimum_price {
                        regular_price {
                            currency
                            value
                        }
                        final_price {
                            currency
                            value
                        }
                        discount {
                            percent_off
                        }
                    }
                }
            }
        }
    }
`;
