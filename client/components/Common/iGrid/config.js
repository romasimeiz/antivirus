import React from 'react';

export default {
    pagination: {
        wrapperClass: 'dataTables_paginate paging_simple_numbers',
        previousLabel: 'Previous',
        nextLabel: 'Next',
        breakLabel: <a href="">...</a>,
        breakClassName: 'break-me',
        marginPagesDisplayed: 2,
        pageRangeDisplayed: 5,
        containerClassName: 'pagination',
        subContainerClassName: 'pages pagination',
        activeClassName: 'active'
    },
    table: {
        defaultClass: 'table',
        withoutRowNamesClass: 'table',
        sortFunctionClass: 'dataTable',
        sortingRowNameClass: 'sorting',
        actionsClassName: 'actions'
    },
    wrapper: {
        className: 'grid'
    }
}