const bodyParser = require("body-parser");


module.exports = app => {
    app.use(bodyParser.json());
    app.get('/', (req,res) => {
        return res.status(200).send({message:'Boas-vindas à API'})
    });
};