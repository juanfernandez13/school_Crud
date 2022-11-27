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
    
    static async createPerson(req,res){
        const newPerson = req.body;
        try{
            const newPersonCreate = await database.Pessoas.create(newPerson);
            return res.status(200).json(newPersonCreate); 
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    static async updatePerson(req,res){
        const {id} = req.params;
        const newPerson = req.body;
        try{
            await database.Pessoas.update( newPerson, {where: {id: Number(id)}} );
            const newPersonUpdate = await database.Pessoas.findOne( {where: {id: Number(id)}});
            return res.status(200).json(newPersonUpdate); 
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    
    static async deletePerson(req,res){
        const {id} = req.params;
        try{
            await database.Pessoas.destroy({where: {id: Number(id)}} );
            
            return res.status(200).send({message:"Pessoa excluida com sucesso"}); 
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;