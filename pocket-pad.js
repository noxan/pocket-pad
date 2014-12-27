Router.route('/', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'PocketPad'
    }
  });
  this.render('overview');
});
Router.route('/transactions', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'Transactions'
    }
  });
  this.render('transactions');
});
Router.route('/categories', function() {
  this.layout('ApplicationLayout', {
    data: {
      title: 'Categories'
    }
  });
  this.render('categories');
});


if (Meteor.isClient) {
  var expense = -318.61;
  var income = 419.15;

  Template.ApplicationLayout.rendered = function() {
    jQuery(".button-collapse").sideNav();
  };

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

  Template.categories.helpers({
    categoryList: function() {
      var categories = [];
      for(var i=0; i<10; i++) {
        categories.push({id: i, name: 'Category #' + i});
      }
      return categories;
    }
  });

  Template.transactions.helpers({
    formatPrice: function(price) {
      var textColor = price < 0 ? 'red' : 'green';
      return new Handlebars.SafeString('<span class="' + textColor + '-text">' + accounting.formatMoney(price) + '</span>');
    },
    transactionList: function() {
      var transactions = [];
      for(var i=0; i<10; i++) {
        transactions.push({id: i, name: 'Transaction #'+i, price: Math.random() * 20});
      }
      return transactions;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
