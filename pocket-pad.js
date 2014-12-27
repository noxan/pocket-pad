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

  Template.transactions.helpers({
    formatPrice: function(price) {
      return accounting.formatMoney(price);
    },
    transactionList: function() {
      var transactions = [];
      for(var i=0; i<10; i++) {
        transactions.push({id: i, name: 'Transaction #'+i, price: Math.random() * 20});
      }
      return transactions;
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
