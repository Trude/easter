import Ember from 'ember';

export default Ember.Controller.extend({
  currentQuestion: 0,
  isTimeForHunt:false,

  a1: null,
  a2: null,
  a3: null,
  a4: null,

  isBeforeGametime: function(){
    var date = new Date();
    var hour = date.getHours();
    return hour < 11;
  }.property('isTimeForHunt'),

  allAnswersCorrect: function(){
    return this.get('a1') === 5 && this.get('a2') === 3 && this.get('a3') === 2 && this.get('a4') === 5;
  }.property('a1', 'a2', 'a3', 'a4'),

  actions: {
    beginHunt: function(){
      this.set('isTimeForHunt', true);
    },
    vampireAnswered: function(answer){
      this.set('a1', answer);
    },
    skamsvar: function(answer){
      this.set('a2', answer);
    },
    gagasvar: function(answer){
      this.set('a3', answer);
    },
    rihannasvar: function(answer){
      this.set('a4', answer);
    },
    GotoQ1: function(){
      this.set('vampire', null);
      this.set('skam', null);
      this.set('a1', null);
      this.set('a2', null);
      this.set('a3', null);
      this.set('a4', null);
      this.set('a5', null);
      this.set('currentQuestion', 1);
    },
    GotoQ2: function(){
        this.set('currentQuestion', 2);
    },
    GotoQ3: function(){
        this.set('currentQuestion', 3);
    },
    GotoQ4: function(){
      this.set('currentQuestion', 4);
    },
    GotoQ5: function(){
      this.set('currentQuestion', 5);

    }
  }
});
