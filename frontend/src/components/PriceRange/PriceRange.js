import React from "react";
import PropTypes from "prop-types";

const PriceRange = (props) => {
    const { minimumPrice } = props;

    const shouldDisplayFinalPrice = (
        <>
            <strong>
                {minimumPrice.final_price.value}{" "}
                {minimumPrice.final_price.currency}
            </strong>
        </>
    );

    const shouldDisplayRegularPrice =
        minimumPrice.discount.percent_off > 0 ? (
            <>
                <strong style={{ textDecoration: "line-through" }}>
                    {minimumPrice.currency.value}{" "}
                    {minimumPrice.regular_price.currency}
                </strong>
            </>
        ) : null;

    return (
        <h3 className="m-0">
            {shouldDisplayFinalPrice}
            {shouldDisplayRegularPrice}
        </h3>
    );
};

PriceRange.propTypes = {
    minimumPrice: PropTypes.shape({
        discount: PropTypes.shape({
            percent_off: PropTypes.number.isRequired,
        }).isRequired,
        final_price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        }).isRequired,
        regular_price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PriceRange;
