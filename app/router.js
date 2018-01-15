import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('game', { path: '/games/:game_id' });
  this.route('user', { path: '/users/:user_id' });
  this.route('video', {path: '/videos/:video_id'});
});

export default Router;
