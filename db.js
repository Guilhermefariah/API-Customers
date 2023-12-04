// Database arquivo de banco de dados 

// Importando o módulo mysql2
/* /Promise biblioteca do mysql que trabalha somente com callbacks
e uma forma de deixar profissional usando o promise */
const mysql = require('mysql2/promise')

//Criando um pool de conexão com o banco de dados
const client = mysql.createPool(process.env.CONNECTION_STRING)

// Função assíncrona para selecionar todos os clientes na tabela 'customers'
async function selectCustomers(){
// Executando a query SQL e aguardando os resultados
    const results = await client.query('SELECT * FROM customers;')
 /* Retornando apenas os resultados da primeira posição,
    pois o resultado está aninhado em um array */
    return results[0];
  
}
// Função assíncrona para selecionar um cliente com base no ID fornecido
async function selectCustomer(id){
//  Executando a query SQL com um parâmetro usando um array de valores
    const results = await client.query('SELECT * FROM customers WHERE id=?', [id])
//  Retornando os resultados da primeira posição do array de resultados
    return results[0]
}
// Função assíncrona para INSERT um novo cliente na tabela 'customers'
async function insertCustomer(customer) {
// Criando um array de values para serem INSERT no banco de dados
    const values = [customer.name, customer.age, customer.uf]
// Executando o INSERT no banco de dados usando um prepared statement   
    await client.query('INSERT INTO customers(name,age,uf) VALUES (?,?,?)', values)
}
// Função assíncrona para atualizar as informações de um cliente com base no ID
async function updateCustomer(id, customer){
// Criando um array de values para UPDATE usando um prepared statement
    const values = [customer.name, customer.age, customer.uf, id]
// Executando um UPDATE no banco de dados usando um prepared statement
    await client.query('UPDATE customers SET name=?,age=?,uf=? WHERE id=? ', values)   
}
// Função assíncrona para excluir um cliente com base no ID
async function deleteCustomer(id){
// Criando um array de values para o DELETE por ID usando um prepared statement    
    const values = [id]
// Executando DELETE no banco de dados usando um prepared statement
    await client.query('DELETE FROM customers WHERE id=?', values)
}

// Exportando as funções para uso em outros módulos (index.js, por exemplo) 
module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}