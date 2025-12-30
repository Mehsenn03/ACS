import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

import createAuthRouter from './auth.js';
import createProductsRouter from './products.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY; 

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("FATAL ERROR: Supabase URL or Service Key is missing. Please check your .env file or Render environment variables.");
  process.exit(1); 
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const app = express();
const PORT = process.env.PORT || 10000;

const allowedOrigins = [
  'http://localhost:3000', 
  'https://mehsenn03.github.io/ACS',
  'https://acs-frontend-ghnl.onrender.com'
];

app.use(cors({
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true 
}));

app.use(express.json());

app.get('/', (req, res) => {
  res.send('ACS Backend is running!');
});

app.use('/api/auth', createAuthRouter(supabase));
app.use('/api/products', createProductsRouter(supabase));

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Allowed CORS origins: ${allowedOrigins.join(', ')}`);

});

