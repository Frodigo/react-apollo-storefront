import { useMemo, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { useHistory, useLocation } from "react-router-dom";
import { GET_CATEGORY_PAGE_CONTENT } from "../../queries/category.gql";

/**
 * The useCategoryRoute hook provides data for the Category route
 *
 * @return {
 *  categoryData {array} - categoryData
 *  isLoading {bool} - flag that determines is category data currently loading
 * }
 */
export const useCategoryRoute = (props) => {
    const { categoryUrlKey, initialPage } = props;
    const history = useHistory();
    const location = useLocation();

    const urlKeyWithoutSuffix = useMemo(() => {
        const splittedURLKey = categoryUrlKey.split('.');

        return splittedURLKey[0];
    }, [categoryUrlKey]);
    /**
     * Get category data from API
     */
    const { data, loading, fetchMore } = useQuery(GET_CATEGORY_PAGE_CONTENT, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            urlKey: urlKeyWithoutSuffix,
            currentPage: initialPage,
        },
    });

    const changeCurrentPage = useCallback(
        async (newPage) => {
            await fetchMore({
                variables: {
                    urlKey: urlKeyWithoutSuffix,
                    currentPage: newPage,
                },
            });

            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

            history.push({
                pathname: location.pathname,
                search: `?page=${newPage}`,
            });
        },
        [fetchMore, history, location.pathname, urlKeyWithoutSuffix]
    );

    return {
        categoryData: data && data.categoryList ? data.categoryList[0] : {},
        isLoading: loading,
        changeCurrentPage,
    };
};

export default useCategoryRoute;
