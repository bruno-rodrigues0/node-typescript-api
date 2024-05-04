import * as mysql from 'mysql2';

export const  pool = mysql.createPool({
    host: "localhost",
    user:  "root",
    database: "rest",
    port: 3306,
    password: "Brunn0@12"
});