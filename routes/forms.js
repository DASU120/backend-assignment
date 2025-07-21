const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/forms/bogie-checksheet
http://localhost:3000/api/forms/bogie-checksheet
router.post('/bogie-checksheet', async (req, res) => {
  try {
      const {
        date,
        coach_type,
        coach_number,
        remarks,
        bogie_number,
        shift             
      } = req.body;

const result = await pool.query(
  `INSERT INTO bogie_checksheet
  (date, coach_type, coach_number, bogie_number, shift, remarks)
  VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *`,
  [date, coach_type, coach_number, bogie_number, shift, remarks]
);


    res.status(201).json({
      success: true,
      message: 'Bogie Checksheet submitted successfully',
      data: result.rows[0],
    });
  } catch (error) {
    console.error('Error submitting bogie checksheet:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// GET /api/forms/wheel-specifications
http://localhost:3000/api/forms/wheel-specifications
router.get('/wheel-specifications', async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM wheel_specifications`);

    res.status(200).json({
      success: true,
      count: result.rowCount,
      data: result.rows,
    });
  } catch (error) {
    console.error('Error fetching wheel specifications:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
