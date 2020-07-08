/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'EmbryoTest2.Application',

    name: 'EmbryoTest2',

    requires: [
        // This will automatically load all classes in the EmbryoTest2 namespace
        // so that application classes do not need to require each other.
        'EmbryoTest2.*'
    ],

    // The name of the initial view to create.
    mainView: 'EmbryoTest2.view.main.Main'
});
