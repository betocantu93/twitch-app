import DS from 'ember-data';
import { computed } from '@ember/object';

//app/models/video.js

export default DS.Model.extend({
  created_at: DS.attr("string"),
  published_at: DS.attr("string"),
  thumbnail_url: DS.attr("string"),
  title: DS.attr("string"),
  url: DS.attr("string"),
  user: DS.belongsTo("user"),
  view_count: DS.attr("number"),
  thumbnail: computed('thumbnail_url', function(){
    return this.get('thumbnail_url').replace('%{width}', 600).replace('%{height}', 338);
  }),
});
