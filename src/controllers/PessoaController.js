const database = require('../models');

class PessoaController {
    static async getAllPeople(req,res){
        try{
            const allPeople = await database.Pessoas.findAll();
            return res.status(200).json(allPeople); 
        } catch (error) {
            res.status(500).json(error.message);
        }

    }
}

module.exports = PessoaController;