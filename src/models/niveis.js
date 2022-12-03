'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
   const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING,
  }, {});

  Niveis.associeate = function(models) {
    Niveis.hasMany(models.Turmas, {
      foreingKey: 'nivel_id'
    })
  }
  return Niveis;
};
