const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const formRoutes = require('./routes/forms');

dotenv.config();

const app = express();


app.use(cors()); 
app.use(express.json()); 

// Routes
app.use('/api/forms', formRoutes); 

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
