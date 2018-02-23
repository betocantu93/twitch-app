import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { get, set, getProperties, setProperties } from '@ember/object';
import { isBlank } from '@ember/utils';

export default Component.extend({

  tagName: '',

  store: service(),

  actions: {

    add(){

      let { name, url } = getProperties(this, 'name', 'url');

      if(!isBlank(name) && !isBlank(url)){
        get(this, 'store').createRecord('game', {
          name: name,
          box_art_url: url
        });

        setProperties(this, {
          name: null,
          url: null
        });
      }

    }
  }
});
