const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

const { loginRequired } = require('./src/middlewares/middleware')

// Rotas da home
route.get('/', homeController.index);

// rotas de logins
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

// rotas de contato 

route.get('/contato/index', loginRequired ,contatoController.index)
route.post('/contato/register', loginRequired ,contatoController.register)
route.get('/contato/index/:id', loginRequired ,contatoController.editIndex)
route.post('/contato/edit/:id', loginRequired ,contatoController.editContact)
route.get('/contato/delete/:id', loginRequired ,contatoController.delete)


// Rota para redenrizar 404 para caminhos que nao existe.
route.get('*', (req,res) => {
    res.render('404')
})

module.exports = route;