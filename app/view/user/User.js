
Ext.define('MyApp.view.user.User',{
    extend: 'Ext.panel.Panel',
    xtype: 'userList',
    requires: [
        'MyApp.view.user.UserController',
        'MyApp.view.user.UserModel'
    ],

    controller: 'user-user',
    viewModel: {
        type: 'user-user'
    },

    html: 'Hello, World!!'
});
