const express = require("express");
const router = express.Router();
const { postCreate, authorCreate, authorGet } = require("./author.controller");

// router.param("authorId", async (req, res, next, authorId) => {
//   const author = await fetchAuthor(authorId, next);
//   if (author) {
//     req.author = author;
//     next();
//   } else {
//     const err = new Error("Author Not Found");
//     err.status = 404;
//     next(err);
//   }
// });

// router.get("/");
router.post("/:authorId", postCreate);
router.post("/", authorCreate);
router.get("/", authorGet);
// router.delete("/:authorId");

// router.put("/:authorId");

module.exports = router;
