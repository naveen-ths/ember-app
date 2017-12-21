import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: false, // sorts group by timestamp
    actions: {
        publishGroup: function () {
            var newGroup = this.store.createRecord('group', {
                name: this.get('Historical Tech Pioneers'),
                members: {
                    "alovelace": true,
                    "ghopper": true,
                    "eclarke": true
                },
                timestamp: new Date().getTime()
            });
            newGroup.save();
            this.transitionToRoute('groups');
        },
        updateGroup: function () {
            this.store.findRecord('group', 1).then(function (group) {
                // ...after the record has loaded
                group.get('title'); // => "Rails is Omakase"
                group.set('title', 'A new group');
                group.save();
            });
            this.transitionToRoute('groups');
        },
        deleteGroup: function () {
//            this.store.findRecord('group', 1, {backgroundReload: false}).then(function (group) {
//                group.deleteRecord();
//                group.get('isDeleted'); // => true
//                group.save(); // => DELETE to /groups/1
//            });

            // OR
            this.store.findRecord('group', 2, {backgroundReload: false}).then(function (group) {
                group.destroyRecord(); // => DELETE to /groups/2
            });
            this.transitionToRoute('groups');
        }
    }
});
