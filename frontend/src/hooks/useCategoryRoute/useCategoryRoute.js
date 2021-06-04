import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_CATEGORY_PAGE_CONTENT } from '../../queries/category.gql'

/**
 * The useCategoryRoute hook provides data for the Category route
 *
 *
 * @return {
 *  categoryData {array} - categoryData
 *  isLoading {bool} - flag that determines is category data currently loading
 * }
 */
export const useCategoryRoute = props => {
    const { categoryUrlKey } = props;

    const urlKeyWithoutSuffix = useMemo(() => {
        const splittedURLKey = categoryUrlKey.split('.');

        return splittedURLKey[0];


    }, [categoryUrlKey])
    /**
     * Get category data from API
     */
    const { data, loading } = useQuery(GET_CATEGORY_PAGE_CONTENT, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            urlKey: urlKeyWithoutSuffix
        }
    });

    return {
        categoryData: data && data.categoryList ? data.categoryList[0] : {},
        isLoading: loading
    }
}

export default useCategoryRoute;
