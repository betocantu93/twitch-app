import Component from '@ember/component';

export default Component.extend({
  didInsertElement(){
    this._super(...arguments);
    new Twitch.Embed("twitch-embed", {
        height: "100%",
        width: "100%",
        video: this.get('model.id')
    });
  }
});
