import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('daniel');
  this.route('tiril');
  this.route('hilde');
  this.route('svein');
});

export default Router;
