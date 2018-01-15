import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  embeded_url: DS.attr("string"),
  language: DS.attr("string"),
  view_count: DS.attr("string"),
  created_at: DS.attr("string"),
  thumbnail_url: DS.attr("string"),


  broadcaster: DS.belongsTo("user"),
  creator: DS.belongsTo("user"),
  video: DS.belongsTo("video"),
  game: DS.belongsTo("game")
});
