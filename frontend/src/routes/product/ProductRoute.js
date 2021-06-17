import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PriceRange from "../../components/PriceRange";
import useProductRoute from "../../hooks/useProductRoute";

const ProductRoute = () => {
    const { productUrlKey } = useParams();
    const { productData, isLoading } = useProductRoute({ productUrlKey });

    console.log(productData);

    const shouldRenderImage =
        productData && productData.image ? (
            <img
                src={productData.image.url}
                alt={productData.image.label}
                width="80%"
            />
        ) : null;

    const shouldDisplayStockStatus =
        productData.stock_status === "IN_STOCK" ? (
            <strong>IN STOCK</strong>
        ) : (
            <strong>OUT OF STOCK</strong>
        );

    const shouldDisplaySKU = (
        <span>
            <strong>SKU #:</strong> {productData.sku}
        </span>
    );

    if (isLoading)
        return <Container className="mt-3 mb-3">loading...</Container>;

    if (!productData) return null;

    return (
        <Container className="mt-3 mb-3">
            <Row>
                <Col md={6}>
                    <figure>{shouldRenderImage}</figure>
                </Col>
                <Col md={6}>
                    <section className="mt-5">
                        <h1>{productData.name}</h1>

                        <div className="d-flex justify-content-between align-items-center">
                            <PriceRange
                                minimumPrice={
                                    productData.price_range.minimum_price
                                }
                            />
                            <div className="text-right">
                                {shouldDisplayStockStatus}
                                <br />
                                {shouldDisplaySKU}
                            </div>
                        </div>

                        <div className="mt-3 mb-3">
                            <Button size="lg">Add to cart</Button>
                        </div>
                    </section>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductRoute;
