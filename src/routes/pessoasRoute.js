const {Router} = require('express');
const PessoaController = require('../controllers/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.getAllPeople);
router.get('/pessoas/:id', PessoaController.getPerson);
router.post('/pessoas', PessoaController.createPerson);

module.exports = router;