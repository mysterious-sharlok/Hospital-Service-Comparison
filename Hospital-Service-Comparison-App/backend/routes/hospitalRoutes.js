const router = require('express').Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'City Care Hospital',
      rating: 4.5,
      distance: '2 KM'
    }
  ]);
});

module.exports = router;
