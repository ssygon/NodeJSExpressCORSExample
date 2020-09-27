const express = require("express");
const router = express.Router();

const endPointName = "orders";

router.get("/", (req, res, next) => {
  const data = {
    message: `Handling GET requests to /${endPointName}`,
  };
  res.status(200).json(data);
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === "123") {
    const data = {
      message: `Handling GET requests to /${endPointName}/{id} - YOU DISCOVERED A SPECIAL ID=123`,
      id: id,
    };
    res.status(200).json(data);
  } else {
    const data = {
      message: `Handling GET requests to /${endPointName}/{id}`,
      id: id,
    };
    res.status(200).json(data);
  }
});

router.post("/", (req, res, next) => {
  const data = {
    message: `Handling POST requests to /${endPointName}`,
  };
  res.status(200).json(data);
});

module.exports = router;
