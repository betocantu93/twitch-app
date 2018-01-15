import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  created_at: DS.attr("string"),
  description: DS.attr("string"),
  duration: DS.attr("string"),
  language: DS.attr("string"),
  published_at: DS.attr("string"),
  thumbnail_url: DS.attr("string"),
  title: DS.attr("string"),
  url: DS.attr("string"),
  user: DS.belongsTo("user"),
  view_count: DS.attr("string"),
  viewable: DS.attr("string"),
  thumbnail: computed('thumbnail_url', function(){
    return this.get('thumbnail_url').replace('{width}', 240).replace('{height}', 240);
  }),

});
