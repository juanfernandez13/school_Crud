const database = require("../models");

class NivelController {
   static async pegaTodosOsNiveis(req, res) {
      try {
         const todosOsNiveis = await database.Niveis.findAll()
         return res.status(200).json(todosOsNiveis)
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async pegaUmNivel(req, res) {
      const { id } = req.params;
      try {
         const nivel = await database.Niveis.findOne({where: {id: id}});
         return res.status(200).json(nivel);
      } catch (error) {
         return res.status(500).json(error.message);
      }
   }

   static async criaNivel(req, res) {
      const novoNivel = req.body;
      try {
         const nivelCriado = await database.Niveis.create(novoNivel);
         return res.status(201).json(nivelCriado);
      } catch (error) {
         return res.status(500).json(error.message);         
      }
   }

   static async atualizaNivel(req, res) {
      const { id } = req.params;
      const novoNivel = req.body;
      try {
         const nivelAtualizado = await database.Niveis.update(novoNivel, {where: {id: id}});
         return res.status(200).json(nivelAtualizado);
      } catch (error) {
         return res.status(500).json(error.message);         
      }
   }

   static async apagaNivel(req, res) {
      const { id } = req.params;
      try {
         await database.Niveis.destroy({where: {id: id}});
         return res.status(200).json({message: "item deletado com sucesso"});
      } catch (error) {
         return res.status(500).json(error.message);         
      }
   }
}

module.exports = NivelController;