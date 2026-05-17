const router = require('express').Router();

router.post('/book', (req, res) => {
  res.json({
    message: 'Appointment booked successfully'
  });
});

module.exports = router;
