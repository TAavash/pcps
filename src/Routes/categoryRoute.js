const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const {authorizeRole} = require("../middleware/authorizationMiddleware");
const {addCategory} = require("../controllers/categoryController");

/**
 * @description To get all categories
 * @api /api/category/create
 * @access Private
 * @type POST
 * @return response
 */

router.post("/create", auth,authorizeRole('admin'), addCategory);

module.exports = router;
