const mysql = require('mysql2/promise')

const client = mysql.createPool(process.env.CONNECTION_STRING)

async function selectCustomers(){
    const results = await client.query('SELECT * FROM customers;')
    return results[0];
}

async function selectCustomer(id){
    const results = await client.query('SELECT * FROM customers WHERE id=?', [id])
    return results[0]
}

async function insertCustomer(customer) {
    const values = [customer.name, customer.age, customer.uf]
    await client.query('INSERT INTO customers(name,age,uf) VALUES (?,?,?)', values)
}

async function updateCustomer(id, customer){
    const values = [customer.name, customer.age, customer.uf, id]
    await client.query('UPDATE customers SET name=?,age=?,uf=? WHERE id=? ', values)   
}

async function deleteCustomer(id){t    
    const values = [id]
    await client.query('DELETE FROM customers WHERE id=?', values)
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}