if (Meteor.isClient) {
  var expense = -318.61;
  var income = 419.15;

  Template.overview.helpers({
    formatBalance: function() {
      return accounting.formatMoney(income + expense);
    },
    formatIncome: function() {
      return accounting.formatMoney(income);
    },
    formatExpense: function() {
      return accounting.formatMoney(expense);
    }
  });

  jQuery(document).ready(function() {
    $(".button-collapse").sideNav();
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
