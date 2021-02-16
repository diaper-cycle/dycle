const app = require("../app");

const router = require("express").Router();

router.get('/testing', (req, res) => {
    let cities = ['Miami', 'Madrid', 'Barcelona'];
    res.render('testing', {cities: cities});
  });

module.exports = router;