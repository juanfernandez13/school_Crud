'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    data_inicio: DataTypes.DATEONLY,
  }, {});

  Matriculas.associeate = function(models) {
    Matriculas.belongsTo(models.Pessoas, {
      foreingKey: 'docente_id'
    });
    Matriculas.belongsTo(models.Turmas, {
      foreingKey: 'turma_id'
    });
  }
  return Matriculas;
};