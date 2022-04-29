'use strict';
require('dotenv').config();
const bcrypt = require('bcryptjs');
const { encrypt } = require('../src/utils/crypto');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const  settingsId = await queryInterface.rawSelect('settings', {where: {}, limit: 1 }, ['id']);
    if(!settingsId){
   return queryInterface.bulkInsert('settings', [{
     email:'maurorezende2012@gmail.com',
     password: bcrypt.hashSync('rakkell45*'),
     apiUrl:'https://testnet.binance.vision/api',
     acessKey:'FkQfT8JJ9lTBTGeJTwCIlznqsLiAn8ee1aJOujZxr0TRUryKdVj9cwAFk8lQyo54',
     secretKey: encrypt('83bfi5BH6EI1FTYJznNdUTEbUtttmZbaA5IRcBeqfqS5YewWA4TNFhmAaBGB3jTb') ,
     createdAt: new Date(),
     updatedAt: new Date()
   }]);
  }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Settings', null, {});
  }
};
