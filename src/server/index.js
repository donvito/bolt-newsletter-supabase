import express from 'express';
import { db } from './db/index.js';
import { participants } from './db/schema.js';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/participants', async (req, res) => {
  try {
    const allParticipants = await db.select().from(participants);
    res.json(allParticipants);
  } catch (error) {
    console.error('Error fetching participants:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});