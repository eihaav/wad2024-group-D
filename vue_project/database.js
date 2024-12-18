const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "typg", //add your password
    database: "testWad",
    host: "localhost",
    port: "5432"
});

const execute = async(query1, query2) => {
    try {
        await pool.connect(); // create a connection
        await pool.query(query1); // executes a query
        await pool.query(query2);

        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

/* 
gen_random_uuid() A system function to generate a random Universally Unique IDentifier (UUID)
An example of generated uuid:  32165102-4866-4d2d-b90c-7a2fddbb6bc8
*/

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );`;
const createPostTblQuery = `
    CREATE TABLE IF NOT EXISTS "posts" (
        "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(200) NOT NULL,
        "date" TIMESTAMP NOT NULL  

    );`;

execute(createTblQuery, createPostTblQuery).then(result => {
    if (result) {

        console.log('Table "users" and "posts" were created');
    }
});

module.exports = pool;