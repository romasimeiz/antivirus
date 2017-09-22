import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

const paginate = function (props) {
    let pageCount = props.dataTotal / props.dataPerPage;

    if (pageCount > 1) {
        return (
            <div className={ props.wrapperClass }>
                <ReactPaginate
                    { ...props }
                    pageCount={ pageCount }
                    onPageChange={ props.onPageChange }
                />
            </div>
        );
    } else {
        return null;
    }
};

export default paginate;