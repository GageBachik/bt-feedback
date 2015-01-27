Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
});

Router.route('/', function() 	{
	this.render('home');
});

var requireLogin = function() {
	if (! Meteor.user()) {
		if (Meteor.loggingIn()) {
			this.render(this.loadingTemplate);
		} else {
			this.render('home');
		}
	} else {
		this.next();
	}
}

Router.onBeforeAction(requireLogin, {except: ['home']});
