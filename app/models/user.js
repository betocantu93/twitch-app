import DS from 'ember-data';

export default DS.Model.extend({

  broadcaster_type: DS.attr("string"),
  description: DS.attr("string"),
  display_name: DS.attr("string"),
  login: DS.attr("string"),
  offline_image_url: DS.attr("string"),
  profile_image_url: DS.attr("string"),
  type: DS.attr("string"),
  view_count: DS.attr("string")

});
