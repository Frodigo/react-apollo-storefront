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
