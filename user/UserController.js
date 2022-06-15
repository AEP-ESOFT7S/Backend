var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var User = require('./User');

// CRIE UM NOVO USUÁRIO
router.post('/', function (req, res) {
    User.create({
            
            firstName:  req.body.firstName,
            lastName:  req.body.lastName,
            cpf:  req.body.cpf,
            phone:  req.body.phone,
            cep:  req.body.cep,
            city:  req.body.city,
            neighborhood:  req.body.neighborhood,
            address:  req.body.address,
            number:  req.body.number,
            complement:  req.body.complement,
            email:  req.body.email,
            password:  req.body.password,
            clientId:  req.body.clientId,
            clientSecret:  req.body.clientSecret,
            merchantId:  req.body.merchantId,
            type:  req.body.type 
        }, 
        function (err, user) {
            if (err) return res.status(500).send("Ocorreu um problema ao adicionar as informações ao banco de dados.");
            res.status(200).send(user);
        });
});

// RETORNA TODOS OS USUÁRIOS DO BANCO DE DADOS
router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("Ocorreu um problema para encontrar os usuários.");
        res.status(200).send(users);
    });
});

// OBTEM UM ÚNICO USUÁRIO DO BANCO DE DADOS
router.get('/:email', function (req, res) {
    User.findOne({ email: req.params.email}, function (err, user) {
        if (err) return res.status(500).send("Ocorreu um problema ao encontrar o usuário.");
        if (!user) return res.status(404).send("Nenhum usuário encontrado.");
        res.status(200).send(user);
    });
});

// APAGA UM USUÁRIO DO BANCO DE DADOS
router.delete('/:email', function (req, res) {
    User.findOneAndDelete({ email: req.params.email}, function (err, user) {
        if (err) return res.status(500).send("Ocorreu um problema ao excluir o usuário.");
        res.status(200).send("Usuario: "+ user.name +" Deletado.");
    });
});

// ATUALIZA UM ÚNICO USUÁRIO NO BANCO DE DADOS
router.put('/:email', function (req, res) {
    User.findOneAndUpdate({ email: req.params.email}, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("Ocorreu um problema ao atualizar o usuário.");
        res.status(200).send(user);
    });
});






module.exports = router;