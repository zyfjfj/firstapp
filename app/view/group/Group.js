
Ext.define('MyApp.view.group.Group',{
    extend: 'Ext.grid.Panel',
    xtype: 'groupList',

    requires: [
        'MyApp.view.group.GroupController',
        'MyApp.view.group.GroupModel'
    ],

    controller: 'group-group',
    viewModel: {
        type: 'group-group'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Group', dataIndex: 'email', flex: 1 },
    ],
});
