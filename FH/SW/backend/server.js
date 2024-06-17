const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost', // Cambia esto según tu configuración
  user: 'root', // Cambia esto según tu configuración
  password: '', // Cambia esto según tu configuración
  database: 'fullstock' // Cambia esto según tu configuración
});

// Verificar la conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL server.');
});

// Ejemplo de una ruta API que obtiene datos de la base de datos
app.get('getMenu', (req, res) => {
  db.query('SELECT * FROM menu', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send({ error: 'Error fetching data' });
      return;
    }
    res.send(results);
  });
});


app.get('/getMenu', (req, res) => {
    db.query('SELECT * FROM menu', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send({ error: 'Error fetching data' });
        return;
      }
      res.send(results);
    });
  });
  app.get('/getVentas', (req, res) => {
    db.query('SELECT * FROM pedido', (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send({ error: 'Error fetching data' });
        return;
      }
      res.send(results);
    });
  });

  app.post('/insertarPedido', (req, res) => {
    const { nombre, precio, tipo, stock, cantidad, total, numero_orden, codigo_barras } = req.body;

    const query = `INSERT INTO pedido (nombre, precio, tipo, stock, cantidad, total, numero_orden, codigo_barras)
                   VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query(query, [nombre, precio, tipo, stock, cantidad, total, numero_orden, codigo_barras], (err, results) => {
      if (err) {
        console.error('Error al insertar pedido:', err);
        res.status(500).json({ error: 'Error al insertar pedido' });
      } else {
        console.log('Pedido insertado correctamente');
        res.status(200).json({ message: 'Pedido insertado correctamente' });
      }
    });
  });



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
