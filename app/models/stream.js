import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  game: DS.belongsTo("game"),
  started_at: DS.attr("string"),
  thumbnail_url: DS.attr("string"),
  title: DS.attr("string"),
  user: DS.belongsTo("user"),
  viewer_count: DS.attr("string"),

  thumbnail: computed('thumbnail_url', function(){
    return this.get('thumbnail_url').replace('{width}', 600).replace('{height}', 338);
  }),
});
