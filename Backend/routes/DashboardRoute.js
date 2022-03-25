const router = require("express").Router();
const info = require("../controllers/Info")
router.post("/", info.Information);
router.get("/", info.ShowAllInformation);
router.get("/:id", info.ShowInformation);

module.exports = router;
