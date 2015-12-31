if (Meteor.isClient) {
  // accounts-entry
  Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/',                    // mandatory - path to redirect to after sign-out
      dashboardRoute: '/',      // mandatory - path to redirect to after successful sign-in
      passwordSignupFields : 'USERNAME_AND_EMAIL',
    });
    Accounts.ui.config({
      passwordSignupFields : 'USERNAME_AND_EMAIL',      
    });
  });
}


// Custom template helper
Template.registerHelper('getProfileImg', function(userId){
  var imgUrl = UserImages.findOne({userId : userId}).image;
  return imgUrl;

});


Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');



if (Meteor.isServer) {
  // accounts-entry
  Meteor.startup(function () {
  });
}
