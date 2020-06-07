/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    titulo: { type: 'string' },
    clasificacion: { type: 'string' },
    consola: { type: 'string' },
    fabricante: { type: 'string' },
    version: { type: 'string' },
    imagen: { type: 'string' }
  },

};

