import Ember from 'ember';

export default Ember.Controller.extend({
    sortProperties: ['timestamp'],
    sortAscending: false, // sorts post by timestamp
    actions: {
        publishPost: function () {
            var newPost = this.store.createRecord('post', {
                title: this.get('title'),
                body: this.get('body'),
                timestamp: new Date().getTime()
            });
            newPost.save();
            this.transitionToRoute('posts');
        },
        updatePost: function () {
            this.store.findRecord('post', 1).then(function (post) {
                // ...after the record has loaded
                post.get('title'); // => "Rails is Omakase"
                post.set('title', 'A new post');
                post.save();
            });
            this.transitionToRoute('posts');
        },
        deletePost: function () {
//            this.store.findRecord('post', 1, {backgroundReload: false}).then(function (post) {
//                post.deleteRecord();
//                post.get('isDeleted'); // => true
//                post.save(); // => DELETE to /posts/1
//            });

            // OR
            this.store.findRecord('post', 2, {backgroundReload: false}).then(function (post) {
                post.destroyRecord(); // => DELETE to /posts/2
            });
            this.transitionToRoute('posts');
        }
    }
});