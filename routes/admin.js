const router = require("express").Router();

const adminController = require("../controllers/adminController");

router.get("/dashboard", adminController.viewDashboard);
router.get("/category", adminController.viewCategory);

module.exports = router;
