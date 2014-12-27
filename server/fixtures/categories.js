Meteor.startup = function() {
  if(Category.find({}).count() === 0) {
    console.log('There is no category. Start to import default categories...');

    Category.insert({'name': 'Travel', 'icon': 'maps-flight'});
    Category.insert({'name': 'Shopping', 'icon': 'action-shopping-cart'});
    Category.insert({'name': 'Food', 'icon': 'maps-restaurant-menu'});
    Category.insert({'name': 'Entertainment', 'icon': 'action-theaters'});
    Category.insert({'name': 'Gifts', 'icon': 'action-wallet-giftcard'});
    Category.insert({'name': 'Accomodations', 'icon': 'maps-hotel'});
    Category.insert({'name': 'Education', 'icon': 'social-school'});

    console.log('Imported default categories.');
  }
}
