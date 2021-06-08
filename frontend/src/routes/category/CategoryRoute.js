import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import CategoryPagination from '../../components/CategoryPagination'
import useCategoryRoute from '../../hooks/useCategoryRoute';

const CategoryRoute = (props) => {
    const query = useMemo(() => {
        return new URLSearchParams(props.location.search);
    }, [props.location.search])
    const initialPage = query.get('page') ? query.get('page') : 1;
    const { categoryUrlKey } = useParams();
    const { categoryData, isLoading, changeCurrentPage } = useCategoryRoute({categoryUrlKey, initialPage});
    const noItemsElement = <Container className="mt-3 mb-3">No items found.</Container>;

    const {
        description,
        image,
        name: categoryName,
        product_count: productCount,
        products,
        children
    } = categoryData;

    const productsFound = useMemo(() => {
        return products ? products.total_count : productCount
    }, [productCount, products]);

    const shouldDisplayDescription = useMemo(() => {
        return description ? <div dangerouslySetInnerHTML={{ __html: description }} /> : null;
    }, [description]);

    const shouldDisplayImage = useMemo(() => {
        return image ? <figure>
            <img src={image} className="w-100" alt={categoryName}/>
        </figure> : null;
    }, [categoryName, image]);

    const totalPages = useMemo(() => {
        return products && products.page_info ? products.page_info.total_pages : null;
    }, [products]);

    const currentPage = useMemo(() => {
        return products && products.page_info ? products.page_info.current_page : initialPage;
    }, [initialPage, products])

    const shouldDisplayChildCategories = useMemo(() => {
        return children && children.length ? <>
            <Row className="mt-4 mb-4">
                {children.map(category => {
                    return <Col sm={6} md={4} key={category.id}>
                        <Card className="mb-4">
                            <a href={`/category/${category.url_key}${category.url_suffix}`}>
                                {category.image && <Card.Img variant="top" src={category.image} />}
                                <Card.Body>
                                    <Card.Title className="mb-0">{category.name}</Card.Title>
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                })}
            </Row>
        </> : null;
    }, [children])

    const shouldDisplayProducts = useMemo(() => {
        return products && products.items && products.items.length ? <>
            <Row className="mt-4 mb-4">
                {products.items.map(product => {
                    return <Col xs={6} md={4} lg={3} key={product.uid} className="mb-4">
                        <Card className="h-100">
                            <a href={`/product/${product.url_key}${product.url_suffix}`}>
                                {product.small_image && <Card.Img variant="top" src={product.small_image.url} />}
                            </a>
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    <a href={`/product/${product.url_key}${product.url_suffix}`}>
                                        {product.name}
                                    </a>
                                </Card.Title>
                                <Button href={`/product/${product.url_key}${product.url_suffix}`} className="w-100">See more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                })}
            </Row>
        </> : null;
    }, [products]);

    const shouldDisplayPagination = totalPages && totalPages > 1 ?
        <CategoryPagination totalPages={totalPages} currentPage={currentPage} onChange={changeCurrentPage}/>
        :
        null;

    if (isLoading) return <Container className="mt-3 mb-3">loading...</Container>;

    if (categoryData === null) return noItemsElement;

    if (!children.length && parseInt(productCount) === 0) return noItemsElement;

    return <Container>
        <header className="mt-3 mb-3 d-flex align-items-center justify-content-between">
            <h1>{categoryName}</h1>
            <p className="mb-0">Products found: {productsFound}</p>
        </header>
        <main>
            {shouldDisplayImage}
            {shouldDisplayDescription}
            {shouldDisplayChildCategories}
            {shouldDisplayProducts}
            {shouldDisplayPagination}
        </main>
    </Container>
}

export default CategoryRoute;
