// router
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

// collections
Category = new Mongo.Collection('categories');

Transaction = new Mongo.Collection('transactions');


// generic money format helper with colored text
var formatMoney = function(money) {
  var textColor = money < 0 ? 'red' : 'green';
  return new Handlebars.SafeString('<span class="' + textColor + '-text">' + accounting.formatMoney(money) + '</span>');
};

// client
if (Meteor.isClient) {
  var expense = -318.61;
  var income = 419.15;

  Template.ApplicationLayout.rendered = function() {
    jQuery(".button-collapse").sideNav();
  };

  Template.overview.helpers({
    formatMoney: formatMoney,
    categoriesList: function() {
      return Category.find({}, {transform: function(doc) {
        doc.amount = 0;
        return doc;
      }});
    },
    balance: function() {
      return income + expense;
    },
    income: function() {
      return income;
    },
    expense: function() {
      return expense;
    }
  });

  Template.categories.helpers({
    categoryList: function() {
      return Category.find({});
    }
  });

  Template.transactions.helpers({
    formatMoney: formatMoney,
    transactionList: function() {
      return Transaction.find({}, {transform: function(doc) {
        doc.category = Category.findOne({_id: doc.category});
        return doc;
      }});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
