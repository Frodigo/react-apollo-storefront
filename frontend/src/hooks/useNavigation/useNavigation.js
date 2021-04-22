import { useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NAVIGATION } from '../../queries/category'

/**
 * The useNavigation hook provides data and business logic for the Navigation component
 *
 *
 * @return {
 *  navigationData {array} - array of categories to display on a storefront
 * }
 */
export const useNavigation = () => {
    /**
     * Get category data from API
     */
    const { data } = useQuery(GET_NAVIGATION, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    /**
     * Check if category should be visible on the storefront.
     *
     * @param {NavigationItem} category
     * @returns {boolean}
     */
    const shouldRenderNavigationItem = category => {
        return !!category.include_in_menu;
    };


    /**
     * Preparing navigation data
     * Sorts by category.position
     * Filtering by category.include_in_menu flag
     * Adds categoryUrl field
     *
     * @returns {array}
     */
    const navigationData = useMemo(() => {
        const rootCategory = data && data.categoryList ? data.categoryList[0] : null;

        if (rootCategory) {
            return rootCategory.children
                .filter(category => shouldRenderNavigationItem(category))
                .sort((a, b) => (a.position > b.position ? 1 : -1))
                .map(category => {
                    const categoryUrl = `/category/${category.url_path}${category.url_suffix}`

                    return {
                        ...category,
                        categoryUrl
                    }
                })
        }

        return [];
    }, [data]);

    return {
        navigationData
    }
}

export default useNavigation;
