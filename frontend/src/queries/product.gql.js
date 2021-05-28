import { gql } from '@apollo/client';

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
