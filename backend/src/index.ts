import express from 'express';
import cors from 'cors';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/db-test', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.send(result.rows);
  } catch (err) {
    console.error('Error connecting to the database:', err);
    res.status(500).send('Error connecting to the database');
  }
});

// Endpoint to create a new consultation booking
app.post('/consultations', async (req, res) => {
  const { name, email, date, time, notes } = req.body;
  try {
    const client = await pool.connect();
    const result = await client.query(
      'INSERT INTO consultations (name, email, date, time, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, date, time, notes]
    );
    client.release();
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error creating consultation booking:', err.message, err.stack);
    } else {
      console.error('Error creating consultation booking:', err);
    }
    res.status(500).send('Error creating consultation booking');
  }
});

// Endpoint to retrieve all consultation bookings
app.get('/consultations', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM consultations');
    client.release();
    res.json(result.rows);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error retrieving consultation bookings:', err.message, err.stack);
    } else {
      console.error('Error retrieving consultation bookings:', err);
    }
    res.status(500).send('Error retrieving consultation bookings');
  }
});

// Endpoint to retrieve dashboard data
app.get('/dashboard-data', async (req, res) => {
  try {
    const client = await pool.connect();
    const totalBookingsResult = await client.query('SELECT COUNT(*) FROM consultations');
    const upcomingEventsResult = await client.query('SELECT * FROM consultations WHERE date >= CURRENT_DATE ORDER BY date ASC LIMIT 5');
    client.release();

    const dashboardData = {
      totalBookings: totalBookingsResult.rows[0].count,
      upcomingEvents: upcomingEventsResult.rows,
    };

    res.json(dashboardData);
  } catch (err) {
    if (err instanceof Error) {
      console.error('Error retrieving dashboard data:', err.message, err.stack);
    } else {
      console.error('Error retrieving dashboard data:', err);
    }
    res.status(500).send('Error retrieving dashboard data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});