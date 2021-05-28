import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_QUICK_SEARCH_SUGGESTIONS } from '../../queries/product.gql';

/**
 * The useQuickSearchSuggestions hook provides data and business logic for the QuickSearchSuggestions component
 *
 *
 * @return {
 *  hasSuggestions {bool} - determines are products found based on provided search query
 *  isLoading {bool} - determines is data is currently loading
 *  isOpen {bool} - determines is component is opened
 *  items {array} - array with products returned from the API based on provided search query
 * }
 */
export const useQuickSearchSuggestions = props => {
    const { isValid, searchQuery } = props;
    const [ isOpen, setIsOpen ] = useState(false);
    const [ hasSuggestions, setHasSuggestions ] = useState(false);

    const [fetchSuggestions, { loading, data }] = useLazyQuery(GET_QUICK_SEARCH_SUGGESTIONS);

    useEffect(() => {
        if (isValid) {
            fetchSuggestions({
                variables: {
                    searchQuery
                }
            });
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [fetchSuggestions, isValid, searchQuery]);

    useEffect(() => {
        data && data.products && data.products.items && data.products.items.length ?
            setHasSuggestions(true): setHasSuggestions(false);
    }, [data]);

    return {
        hasSuggestions,
        isLoading: loading,
        isOpen,
        items: data && data.products && data.products.items ? data.products.items : []
    }
}

export default useQuickSearchSuggestions;
