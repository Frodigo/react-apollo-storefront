import { gql } from '@apollo/client';

export const GET_NAVIGATION = gql`
    query getMegaMenu {
        categoryList {
            id
            name
            children {
                id
                include_in_menu
                name
                position
                url_path
                url_suffix
            }
        }
    }
`;

export const GET_CATEGORY_PAGE_CONTENT = gql`
    query getCategoryPageContent($urlKey: String!, $currentPage: Int = 1 ) {
        categoryList(filters: { url_key: { eq: $urlKey}}) {
            id
            description
            image
            name
            url_key
            url_suffix
            product_count
            children {
                id
                name
                url_key
                url_suffix
                image
                description
                product_count
            }
            products(currentPage: $currentPage) {
                items {
                    name
                    uid
                    sku
                    url_key
                    url_suffix
                    small_image {
                        url
                    }
                    price_range {
                        maximum_price {
                            final_price {
                                currency
                                value
                            }
                            regular_price {
                                currency
                                value
                            }
                        }
                        minimum_price {
                            final_price {
                                currency
                                value
                            }
                            regular_price {
                                currency
                                value
                            }
                        }
                    }
                }
                total_count
                page_info {
                    current_page
                    page_size
                    total_pages
                  }
            }
        }
    }
`;
