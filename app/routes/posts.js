import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        console.log(this.store.findAll('post'));
        return this.store.findAll('post');
    }
});
