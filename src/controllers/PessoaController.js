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
    
    static async getPerson(req,res){
        try{
            const {id} = req.params;
            const Person = await database.Pessoas.findOne( {where: {id: Number(id)}});
            return res.status(200).json(Person); 
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;