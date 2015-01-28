Template.home.rendered = function () {
	Session.set('pending', true);
	Session.set('clicked', false);

};

Template.home.events({
	'click .form-type': function(event){
		if ($(event.target).text().trim() === 'Pending') {
			Session.set('pending', true);
		}else{
			Session.set('pending', false);
		}
		if (!($(event.target).closest('.form-type').hasClass('active'))) {
			var types = $('.form-type');
			types.map(function (index, type) {
				if ($(type).hasClass('active')) {
					$(type).removeClass('active');
				}else{
					$(type).addClass('active');
				}
			});
		}
	},
	'click .survey': function(event){
		$('.button-bar').toggle();
		Session.set('clicked', true);
	}
});

Template.home.helpers({
	pending: function(){
		return Session.get('pending');
	},
	clicked: function(){
		return Session.get('clicked');
	}
});