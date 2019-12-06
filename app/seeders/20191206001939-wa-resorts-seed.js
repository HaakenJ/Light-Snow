'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Locations', [{
        name: "crystal-mountain",
        latitude: 46.9361,
        longitude: -121.4753,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "mount-baker",
        latitude: 48.8573,
        longitude: -86.5122,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "stevens-pass",
        latitude: 47.7448,
        longitude: -121.0890,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Locations', {
      id: {[Sequelize.Op.in]: [1, 3]}
    })
  }
};