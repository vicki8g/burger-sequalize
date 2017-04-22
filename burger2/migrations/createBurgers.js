'use strict';
module.exports = {
  up: function (queryInterface, Sequelize) {
    return models.Burgers.bulkCreate([
      { burger_name: "Sour Dough Jack", devoured: false},
      { burger_name: "Hopdoddy Leftovers", devoured: false},
      { burger_name: "Big Mac", devoured: true},
      { burger_name: "Royal with Cheese", devoured: false},
      { burger_name: "Veggie Pattie Burger", devoured: false}
      ])
  },
  down: function (queryInterface, Sequelize) {
    return models.Burgers.destroy({
      where: {burger_name: [
        "Sour Dough Jack", 
        "Hopdoddy Leftovers", 
        "Big Mac", "Royal with Cheese", 
        "Veggie Pattie Burger"
        ]}
  })
}
};