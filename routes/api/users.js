const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

router.route("/:userId").get(restaurantsController.findByUserId);

module.exports = router;
