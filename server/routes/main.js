const express=require("express")

const router = express.Router();






// Routes
router.get("", (req, res) => {
  res.send(
    `<h1 style="color:red;margin-top:18rem;text-align:center;font-size:55px;">Hello World</h1>`
  );
});



module.exports = router;