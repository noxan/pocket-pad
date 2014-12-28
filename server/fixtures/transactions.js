Meteor.startup = function() {
  if(Transaction.find({}).count() === 0 &&
     Category.find({}).count() > 0) {
    console.log('There are no transactions. Start to import dummy transactions for testing...');

    var categories = Category.find({}).fetch();
    for(var i=0; i<20; i++) {
      var amount = Math.random() * 5000 * (Math.random() > 0.5 ? 1 : -1);
      var categoryId = categories[Math.floor(Math.random() * categories.length)]._id;
      Transaction.insert({
        name: 'Transaction #'+i,
        category: categoryId,
        amount: amount
      });
    }

    console.log('Imported dummy transactions.');
  }
}
