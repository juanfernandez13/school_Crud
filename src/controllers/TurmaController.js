const database = require("../models");

class TurmaController {
   static async pegaTodasAsTurmas(req, res) {
      try {
        const todasAsTurmas = await database.Turmas.findAll();
        return res.status(200).json(todasAsTurmas)
      } catch (error) {
        return res.status(500).json(error.message);
      }
   }

   static async pegaUmaTurma(req, res) {
      const { id } = req.params;
      try {
         const turma = database.Turmas.findOne({where: {id: id}});
         return res.status(200).json(turma);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaTurma(req, res) {
      const novaTuma = req.body;
      try {
         const turmaNova = await database.Turmas.create(novaTuma);
         return res.status(201).json(turmaNova);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async atualizaTurma(req, res) {
      const { id } = req.params;
      const novaTurma = req.body;
      try {
         const turmaAtualizada = await database.Turmas.update(novaTurma, {where: {id: id}});
         return res.status(200).json(turmaAtualizada);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async apagaTurma(req, res) {
      const { id } = req.params;
      try {
         await database.Turmas.destroy({where: {id: id}});
         return res.status(200).json({message: "item deletado com sucesso."});
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }
}

module.exports = TurmaController;