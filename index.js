// index ponto central de comunicação

/* Importando o módulo dotenv para carregar variáveis
   de ambiente de um arquivo .env*/ 
require('dotenv').config()

// Quanto é um modulo que foi instalado deixar em ('dotenv')
// Importando as funções do módulo de banco de dados (db.js)
const db = require('./db')

// Importando o módulo Express para lidar com rotas e middleware
const express = require('express')

// Inicializando a aplicação Express
const app = express()

// Adicionando middleware para analisar o corpo das requisições como JSON
app.use(express.json())

/* Somente rotas GET, consigo testar no navegador,
ir para o Postman localhost:3000/customers*/

// Rota para excluir um cliente com base no ID
app.delete('/customers/:id',async (request, response) =>{
    const id = parseInt(request.params.id)
// Chamando a função de exclusão do banco de dados
    await db.deleteCustomer(id)
    response.sendStatus(204) // Enviando status 204 (No Content) como resposta
})
// Rota para atualizar campos de um cliente pelo ID
/* Put atualiza a entidade ou insere, patch somente atualiza os campos */  
app.patch('/customers/:id', async (request, response) => {
    const id = parseInt(request.params.id)
    const customer = request.body
    await db.updateCustomer(id, customer)
    response.sendStatus(200)// Enviando status 200 (OK) como resposta
})
// Rota para adicionar um novo cliente
app.post('/customers', async (request, response) =>{
    const customer = request.body
// Chamando a função insert(inserir) do banco de dados
    await db.insertCustomer(customer)
    response.sendStatus(201) //Enviando status 201 (Created) como resposta
})
// Rota para buscar um cliente pelo ID
app.get('/customers/:id', async (request, response) => {
    const id = parseInt(request.params.id)
// Chamando a função de seleção de cliente(id) do banco de dados
    const results = await db.selectCustomer(id)
    response.json(results)
})

// Rota para buscar todos os clientes
app.get('/customers', async (request, response) => {
// Chamando a função de seleção de todos os clientes do banco de dados
    const results = await db.selectCustomers() 
// Enviando os resultados como JSON na resposta
    response.json(results)
})
// App.get para pesquisar, nao esta esperando recerber dados
// Rota raiz para verificar se a aplicação está online
app.get('/', (request, response, next) => {
    response.json ({
        message: ' its a live'

    })
})
// Iniciando o servidor na porta definida no arquivo .env
// Pode ser 3000 É uma boa pratica criar uma pasta env
app.listen(process.env.PORT, () => {
    console.log('app is running')
})

