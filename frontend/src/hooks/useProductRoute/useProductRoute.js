import { useMemo } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DATA_BY_URL_KEY } from "../../queries/product.gql";

/**
 * The useProductRoute hook provides data for the Product route
 *
 * @return {
 *  productData {object} - productData
 *  isLoading {bool} - flag that determines is product data currently loading
 * }
 */
export const useProductRoute = (props) => {
    const { productUrlKey } = props;


    const urlKeyWithoutSuffix = useMemo(() => {
        const splittedURLKey = productUrlKey.split('.');

        return splittedURLKey[0];
    }, [productUrlKey]);

    /**
     * Get product data from API
     */
    const { data, loading } = useQuery(GET_PRODUCT_DATA_BY_URL_KEY, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        variables: {
            urlKey: urlKeyWithoutSuffix
        },
    });

    return {
        productData: data && data.products && data.products.items ? data.products.items[0] : {},
        isLoading: loading
    };
};

export default useProductRoute;
