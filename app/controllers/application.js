import Ember from 'ember';

export default Ember.Controller.extend({
  let1: '',
  let2: '',
  let3: '',
  let4: '',
  let5: '',
  let6: '',
  let7: '',
  let8: '',
  let9: '',
  let10: '',
  let11: '',
  let12: '',
  wronganswer: null,
  actions: {
    mainSolutionCheck: function(){
      if(
        this.get('let1').toLowerCase() === 'p' &&
        this.get('let2').toLowerCase() === 'å' &&
        this.get('let3').toLowerCase() === 's' &&
        this.get('let4').toLowerCase() === 'k' &&
        this.get('let5').toLowerCase() === 'e' &&
        this.get('let6').toLowerCase() === 'n' &&
        this.get('let7').toLowerCase() === 'e' &&
        this.get('let8').toLowerCase() === 'r' &&
        this.get('let9').toLowerCase() === 'd' &&
        this.get('let10').toLowerCase() === 'i' &&
        this.get('let11').toLowerCase() === 'g' &&
        this.get('let12').toLowerCase() === 'g'){
          this.transitionToRoute('finish')
          this.set('wronganswer', false);
        } else {
          this.set('wronganswer', true);

        }
    }
  }
});
