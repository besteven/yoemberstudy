import Ember from 'ember';

export default Ember.Controller.extend({
	emailAddress: '',
	textMessages: '',
	//cach 1
	// isValid: Ember.computed('emailAddress', 'textMessages', function() {
      // return this.get('emailAddress').match(/^.+@.+\..+$/) && this.get('textMessages') !== '';
    // }),
	
	//cach 2
	isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isValidText: Ember.computed.gte('textMessages.length', 5),
	isValid: Ember.computed.and('isValidEmail','isValidText'),
	isDisabled: Ember.computed.not('isValid'),
	actions: {
      saveInvitation() {
        alert(`Sending the messages: ${this.get('emailAddress')} Message: ${this.get('textMessages')}`);
        this.set('responseMessage', `We got your message and we'll get in touch soon`);
        this.set('emailAddress', '');
		this.set('textMessages', '');
      }
    }
});
