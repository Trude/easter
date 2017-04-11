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
    return this.get('a1') === 5 && this.get('a2') === 2;
  }.property('a1', 'a2', 'a3', 'a4', 'a5'),

  actions: {
    beginHunt: function(){
      this.set('isTimeForHunt', true);
    },
    GotoQ1: function(){
      this.set('a1', null);
      this.set('dino', null);
      this.set('a2', null);
      this.set('pokemon', null);
      this.set('a3', null);
      this.set('a4', null);
      this.set('a5', null);
      this.set('currentQuestion', 1);
    },
    dinoSelected: function(dinoSelected){
      this.set('a1', dinoSelected);
    },
    GotoQ2: function(){
        this.set('currentQuestion', 2);
    },
    pokemonAnswer: function(pokemonAnswer){
      this.set('a2', pokemonAnswer);
    },
    GotoQ3: function(){
        this.set('currentQuestion', 3);
    },
  }
});
