import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  box_art_url: DS.attr('string'),
  thumbnail: computed('box_art_url', function(){
    return this.get('box_art_url').replace('{width}', 240).replace('{height}', 240);
  }),
});
