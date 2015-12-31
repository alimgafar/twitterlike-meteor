Template.posts.helpers ({
	'posts' : function() {
		return Posts.find({}, {sort : {'createdAt' : -1}});
	}
});


Meteor.subscribe('posts');