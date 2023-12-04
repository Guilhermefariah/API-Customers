 
 API-de-Cadastro
 Node.js/MySQL
 
 db.js e index.js:

 Uso

# Instalando as dependências
npm install

# Iniciando o servidor
npm start

db.js

Database - Arquivo de Banco de Dados
Este arquivo contém as funções responsáveis por interagir com o banco de dados MySQL.

Funções Exportadas
selectCustomers()
Descrição: Retorna todos os clientes da tabela 'customers'.
Uso: await db.selectCustomers()
selectCustomer(id)

Descrição: Retorna um cliente específico com base no ID fornecido.
Parâmetros:
id: ID do cliente.
Uso: await db.selectCustomer(id)

insertCustomer(customer)
Descrição: Insere um novo cliente na tabela 'customers'.
Parâmetros:
customer: Objeto contendo informações do cliente (name, age, uf).
Uso: await db.insertCustomer(customer)

updateCustomer(id, customer)
Descrição: Atualiza as informações de um cliente com base no ID.
Parâmetros:
id: ID do cliente a ser atualizado.
customer: Objeto contendo as novas informações do cliente.
Uso: await db.updateCustomer(id, customer)

deleteCustomer(id)
Descrição: Exclui um cliente com base no ID.
Parâmetros:
id: ID do cliente a ser excluído.
Uso: await db.deleteCustomer(id)

Uso

const db = require('./db');
const allCustomers = await db.selectCustomers();
console.log(allCustomers);


index.js

Ponto Central de Comunicação

Este arquivo serve como o ponto central de comunicação para a sua aplicação, 
lidando com rotas e inicializando o servidor Express.
Configuração do Banco de Dados
Certifique-se de configurar as variáveis de ambiente no arquivo .env:


CONNECTION_STRING= exemplo mysql://root:guidev123@localhost:3306/crud
PORT=3000

Rotas do Protocolo HTTP

DELETE /customers/:id
Descrição: Exclui um cliente com base no ID.
Uso: DELETE localhost:3000/customers/1

PATCH /customers/:id
Descrição: Atualiza campos de um cliente pelo ID.
Uso: PATCH localhost:3000/customers/1

POST /customers
Descrição: Adiciona um novo cliente.
Uso: POST localhost:3000/customers

GET /customers/:id
Descrição: Retorna um cliente pelo ID.
Uso: GET localhost:3000/customers/1

GET /customers
Descrição: Retorna todos os clientes.
Uso: GET localhost:3000/customers

GET '/'
Descrição: Verifica se a aplicação está online.
Uso: GET localhost:3000/


Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas e enviar solicitações pull.

Licença
Este projeto é licenciado sob a Minha Licença GuilhermeFariah. 

