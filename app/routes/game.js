import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model({game_id}){
      return hash({
        game: this.get('store').findRecord('game', game_id),
        streams: this.get('store').query("stream", {
          game_id: game_id
        })
      });
  }
});
