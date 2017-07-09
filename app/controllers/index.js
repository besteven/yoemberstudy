import Ember from 'ember';

export default Ember.Controller.extend({
	
	emailAddress: '',
	//cach viet day du
	// isDisabled: Ember.computed('emailAddress', function() {
	  // return this.get('emailAddress') === '';
    // })
	
	//cach viet rut gon
	//isDisabled: Ember.computed.empty('emailAddress')
	
	isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: Ember.computed.not('isValid'),
	actions: {
      saveInvitation() {
        alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
        this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`);
        this.set('emailAddress', '');
      }
    }
});
