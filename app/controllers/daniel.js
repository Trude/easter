import Ember from 'ember';

export default Ember.Controller.extend({
  currentMission: 1,
  actions: {
    continueHunt: function(){
      this.set('currentMission', 2);
    },
    mission2: function(value){
      if(value==="9"){
        this.set('headerText', "Bra du hadde helt rett! Det er nøyaktig 9 hytter i veien!")
        this.set('currentMission', 3);
      } else {
        this.set('headerText', "NEEEEEEEEEI! FEIL")
      }
    },
  }
});
