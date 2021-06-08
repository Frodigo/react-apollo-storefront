import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const CategoryPagination = (props) => {
    const { totalPages, currentPage, onChange } = props;

    const paginationItems = useMemo(() => {
        let items = [];
        for (let i = 1; i <= totalPages; i++) {
            items.push(
                <Pagination.Item
                    key={`pageItem-${i}`}
                    active={!!(currentPage === i)}
                    onClick={() => onChange(i)}
                >
                    {i}
                </Pagination.Item>
            )
        }

        return items;
    }, [currentPage, onChange, totalPages])

    return (
        <div className="d-flex justify-content-center mb-3 mt-3">
            <Pagination>
                <Pagination.First disabled={!!(currentPage === 1)} onClick={() => onChange(1)} />
                <Pagination.Prev disabled={!!(currentPage === 1)} onClick={() => onChange(currentPage - 1)} />
                {paginationItems}
                <Pagination.Next disabled={!!(currentPage === totalPages)} onClick={() => onChange(totalPages - 1)} />
                <Pagination.Last disabled={!!(currentPage === totalPages)} onClick={() => onChange(totalPages)} />
            </Pagination>
        </div>
    );
};

CategoryPagination.propTypes = {
    totalPages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default CategoryPagination;
