import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

const paginate = function (props) {
    if (props.data && props.data.length) {
        let pageCount = props.dataTotal / props.dataPerPage;

        if (pageCount > 1) {
            return (
                <div className={ props.wrapperClass }>
                    <ReactPaginate
                        { ...props }
                        pageCount={ pageCount }
                        dataPerPage={ props.dataPerPage }
                        onPageChange={ props.onPageChange }
                    />
                </div>
            );
        }
    }

    return null;
};

export default paginate;