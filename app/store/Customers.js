/*
 * File: app/store/Customers.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.2.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.Customers', {
    extend: 'Ext.data.Store',

    requires: [
        'MyApp.model.Customer'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.Customer',
        storeId: 'Customers',
        proxy: {
            type: 'ajax',
            url: 'customer.php',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        grouper: {
            groupFn: function(item) {
                var grouping = item.get("Name")[0].toString();
                return grouping.toUpperCase();
            }
        },
        sorters: {
            property: 'Name'
        }
    }
});