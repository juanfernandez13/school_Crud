'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {});

  Pessoas.associeate = function(models) {
    Pessoas.hasMany(models.Turmas, {
      foreingKey: 'docente_id'
    })
    Pessoas.hasMany(models.Matriculas, {
      foreingKey: 'estudante_id'
    })
  }
  return Pessoas;
};