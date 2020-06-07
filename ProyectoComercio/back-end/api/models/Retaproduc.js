/**
 * Retaproduc.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fechaRenta: {type: 'string'},
    retornoPro: {type: 'string'},
    credencial: {type: 'string'},
    catalogo: {type: 'string'},
  },

  credencial:{
    model: 'credencial'
    
  },

};

