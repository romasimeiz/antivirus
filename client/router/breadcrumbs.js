export default
    [
        {regexp : /\/projects\/(\d)\/update/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Projects', url:'/projects'}, {title: '{parameter}'}, {title: 'Update'}]},
        {regexp : /\/projects\/(\d)\/files/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Projects', url:'/projects'}, {title: '{parameter}'}, {title: 'Files'}]},
        {regexp : /\/projects$/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Projects'}]},
        {regexp : /\/profile$/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Profile'}]},
        {regexp : /\/projects\/create$/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Projects', url:'/projects'}, {title: 'Create'}]},
        {regexp : /\/users$/g, breadcrumbs: [{title: 'Home', url:'/home'}, {title: 'Users'}]},
    ];