import Ember from 'ember';

export default Ember.Component.extend({
  currentDate: null,
  hasCalledAction: false,
  actionHour: 0,
  actionMinute: 59,
  actionSecond: 59,
  actionDate: null,

  _beginInterval: function(){
    var actionDate = new Date();
    actionDate.setHours(this.get('actionHour'));
    actionDate.setMinutes(0);
    actionDate.setSeconds(0);
    this.set('actionDate', actionDate);
    this.set('currentDate', new Date());
    setInterval(function(){
      this.set('currentDate', new Date());
    }.bind(this), 1000);
  }.on('init'),

  hours: function(){
    var currentHour = this.get('currentDate').getHours();
    var actionHour = this.get('actionHour');
    var hoursleft =  (actionHour-currentHour-1).toString();
    if (hoursleft.length === 1) {
      hoursleft = '0' + hoursleft;
    }
    return hoursleft;
  }.property('currentDate'),

  minutes: function(){
    var currentMinute = this.get('currentDate').getMinutes();
    var actionMinute = this.get('actionMinute');
    var minutesleft =  (actionMinute-currentMinute).toString();
    if (minutesleft.length === 1) {
      minutesleft = '0' + minutesleft;
    }
    return minutesleft;
  }.property('currentDate'),

  seconds: function(){
    var currentSeconds = this.get('currentDate').getSeconds();
    var actionSeconds = this.get('actionSecond');
    var secondsleft =  (actionSeconds-currentSeconds).toString();
    if (secondsleft.length === 1) {
      secondsleft = '0' + secondsleft;
    }
    return secondsleft;
  }.property('currentDate'),

  _callActionOnTimeReached: function(){
    var actionDate = this.get('actionDate');
    if (actionDate <= this.get('currentDate')) {
      if (!this.get('hasCalledAction')) {
        this.sendAction();
        this.get('hasCalledAction', true);
      }
    }
  }.observes('currentDate')
});
