import express from "express";

const router = express.Router();

router.get((req, res, next) => {
  console.log(req.body);

  res.json({
    status: "success",
    message: "success",
  });
});

export default router;
