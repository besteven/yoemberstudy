import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
      saveContact(newContact) {
		newContact.save().then((response) => {
        this.set('responseMessage', `We got your message and we'll get in touch soon`);
        this.set('model.email', '');
		this.set('model.message', '');
      })
	  }
    }
});
