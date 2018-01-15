import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({

  store: service(),

  model({user_id}) {

    return hash({
      user: this.get('store').findRecord('user', user_id),
      videos: this.get('store').query('video', {
        user_id: user_id
      })
    })
  }
});
