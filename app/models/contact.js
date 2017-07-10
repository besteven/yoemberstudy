import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr(),
  message: DS.attr(),
  isValidEmail: Ember.computed.match('email', /^.+@.+\..+$/),
	isValidText: Ember.computed.gte('message.length', 5),
	isValid: Ember.computed.and('isValidEmail','isValidText'),
	isDisabled: Ember.computed.not('isValid')
});
