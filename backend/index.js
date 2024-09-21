const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gold_shop_management',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


db.connect((error) => {
    if (error) throw error;
    console.log('Connected to MySQL Database');
});


app.use((req, res, next) => {
    req.db = db; 
    next();
});

// Get data from table

// Table pengguna
app.get('/pengguna', (req, res) => {
    db.query('SELECT * FROM pengguna', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Table stok_emas
app.get('/stok_emas', (req, res) => {
    db.query('SELECT * FROM stok_emas', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Table transaksi_penjualan
app.get('/transaksi_penjualan', (req, res) => {
    db.query('SELECT * FROM transaksi_penjualan', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Table transaksi_pembelian
app.get('/transaksi_pembelian', (req, res) => {
    db.query('SELECT * FROM transaksi_pembelian', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Table laporan_keuangan
app.get('/laporan_keuangan', (req, res) => {
    db.query('SELECT * FROM laporan_keuangan', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

// Login route
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    
    db.query(
        'SELECT * FROM pengguna WHERE username = ? AND password = ?',
        [username, password],
        (error, results) => {
            if (error) {
                return res.status(500).send('Error on the server.');
            }

            if (results.length > 0) {
                // Successful login
                res.json({role: results[0].role});
            } else {
                // Failed login
                res.status(401).send('Invalid username or password.');
            }
        }
    );
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
