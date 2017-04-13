import Ember from 'ember';

export default Ember.Controller.extend({
  currentQuestion: 0,
  isTimeForHunt:false,

  a1: null,
  a2: null,
  a3: null,
  a4: null,
  a5: null,

  isBeforeGametime: function(){
    var date = new Date();
    var hour = date.getHours();
    return hour < 11;
  }.property('isTimeForHunt'),

  allAnswersCorrect: function(){
    return this.get('a1') === 2 && this.get('a2') === 2 && this.get('a3') === 2 && this.get('a4') === 5;
  }.property('a1', 'a2', 'a3', 'a4', 'a5'),

  actions: {
    beginHunt: function(){
      this.set('isTimeForHunt', true);
    },
    GotoQ1: function(){
      this.set('a1', null);
      this.set('fjell', null);
      this.set('a2', null);
      this.set('knitting', null);
      this.set('a3', null);
      this.set('ski', null);
      this.set('a4', null);
      this.set('egg', null);
      this.set('a5', null);
      this.set('currentQuestion', 1);
    },
    fjellSelected: function(fjellSelected){
      this.set('a1', fjellSelected);
    },
    GotoQ2: function(){
        this.set('currentQuestion', 2);
    },
    knittingAnswer: function(knittingAnswer){
      this.set('a2', knittingAnswer);
    },
    GotoQ3: function(){
        this.set('currentQuestion', 3);
    },
    skiAnswer: function(skiAnswer){
      this.set('a3', skiAnswer);
    },
    eggAnswer: function(eggAnswer){
      this.set('a4', eggAnswer);
    },
    GotoQ4: function(){
        this.set('currentQuestion', 4);
    },
    GotoQ5: function(){
        this.set('currentQuestion', 5);
    },
  }
});
