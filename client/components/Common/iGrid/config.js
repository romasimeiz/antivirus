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
        wrapperClass: 'ibox float-e-margins grid dataTables_wrapper',
        withoutTitleClass: 'without-title',
        headerClass: 'ibox-title',
        contentClass: 'ibox-content',
        hideClass: 'hide',
        optionsClass: 'ibox-tools',
        optionsHideBtnUpClass: 'fa fa-chevron-up',
        optionsHideBtnDownClass: 'fa fa-chevron-down',
        optionsCollapseLinkClass: 'collapse-link',
        optionsCloseLinkClass: 'close-link',
        optionsCloseBtnClass: 'fa fa-times',
        spinnerClass: 'spinner'
    }
}