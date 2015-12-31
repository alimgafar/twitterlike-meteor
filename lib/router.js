Router.configure ({
	'layoutTemplate' : 'layout'
});

Router.map(function(){
	//posts route
	this.route('posts', {
		path: '/',
		template: 'posts'
	});
	this.route('about', {
		path: '/about',
		template: 'about'
	});
	this.route('profile', {
		path: '/profile',
		template: 'profile'
	});

});