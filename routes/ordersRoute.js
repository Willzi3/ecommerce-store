const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

//get all products
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM orders", (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
//get by id
router.get("/:id", (req, res) => {
    try {
      con.query(
        `SELECT * FROM orders WHERE order_id='${req.params.id}'`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });
  //post 
router.post("/", (req, res) => {
    const {
    user_id,
     amount,
     shipping_address,
     order_email,
     order_date,
     order_status,
    } = req.body;
    try {
      con.query(
        `INSERT INTO orders(user_id,amount,shipping_address,order_email,order_date,order_status) VALUES ('${user_id}','${amount}','${shipping_address}','${order_email}','${order_date}','${order_status}')`,
        (err, result)  =>  {
        if (err) throw err;
        res.send(result);
      }
      );
    } catch (error) {
      console.log(error);
    }
  });
  //put 
  router.put("/:id", (req, res) => {
    const {
        name,
        description,
        thumbnail,
    } =  req.body
     try {
       con.query(
         `UPDATE categories
          SET name = "${name}", description = "${description}", thumbnail = "${thumbnail}"
          WHERE category_id=${req.params.id}`,
         (err, result) => {
           if (err) throw err;
           res.send(result);
         }
       );
     } catch (error) {
       console.log(error);
       res.status(400).send(error);
     }
   });
   router.delete("/:id", (req, res) => {
    try {
      con.query(
        `DELETE  FROM categories WHERE category_id='${req.params.id}'`,
        (err, result) => {
          if (err) throw err;
          res.send(result);
        }
      );
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  });

module.exports = router;