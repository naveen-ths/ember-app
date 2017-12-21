import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('posts', function() {
    this.route('view');
    this.route('edit');
    this.route('delete');
    this.route('new');
  });
  this.route('groups', function() {
    this.route('show', { path: '/:group_id' });
  });
});

export default Router;
