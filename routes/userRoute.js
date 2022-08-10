const express = require("express");
const router = express.Router();
const con = require("../lib/db_connection");

//get all users
router.get("/", (req, res) => {
    try {
        con.query("SELECT * FROM users", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
//get single user by id
router.get("/:id", (req, res) => {
    try {
        con.query("SELECT * FROM users", (err, result) => {
            if (err) throw err;
            res.send(result);
        });
    } catch (error) {
        console.log(error);
        res.status(400).send(error)
    }
});
//post user by its id
router.post("/", (req, res) => {
    const {
    email,
    password,
    full_name,
    phone,
    join_date,
    cart
    } = req.body;
    try {
      con.query(
        `INSERT INTO users(email,password,full_name,phone,join_date,cart) VALUES ('${email}','${password}','${full_name}','${phone}','${join_date}','${cart}')`,
        (err, result)  =>  {
        if (err) throw err;
        res.send(result);
      }
      );
    } catch (error) {
      console.log(error);
    }
  });
  //update users by its id
  router.put("/:id", (req, res) => {
    const {
        email,
        password,
        full_name,
        phone,
        join_date,
        cart
    } =  req.body
     try {
       con.query(
         `UPDATE users
          SET email = "${email}", password = "${password}", full_name = "${full_name}", phone = "${phone}", join_date = "${join_date}" , cart = "${cart}" 
          WHERE user_id=${req.params.id}`,
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

   //delete user by its id 
   router.delete("/:id", (req, res) => {
    try {
      con.query(
        `DELETE  FROM users WHERE user_id='${req.params.id}'`,
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

  const bcrypt = require('bcryptjs');

// Register Route
// The Route where Encryption starts
router.post("/register", (req, result) => {
  try {
    let sql = "INSERT INTO users SET ?";
    const {
      full_name,
      email,
      password,
      phone,
      join_date,
      cart
    } = req.body;
    res.send(result);

    // The start of hashing / encryption
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    

    //database terms
    let user = {
      full_name,
      email,
      // We sending the hash value to be stored witin the table
      password: hash,
      phone,
     join_date,
     cart
    };

    //sql query
    con.query(sql, user, (err, res) => {
      if (err) throw err;
      res.send(`User ${(user.full_name, user.email)} created successfully`);
    });
  } catch (error) {
    console.log(error);
  }
});


// Login
// The Route where Decryption happens
const jwt = require('jsonwebtoken');

router.post("/login", (req, res) => {
  try {
    let sql = "SELECT * FROM users WHERE ?";
    let user = {
      email: req.body.email,
    };


    con.query(sql, user, async (err, output) => {
      if (err) throw err;
      if (output.length === 0) {
        res.send("Email not found please register");
      } else {
        // Decryption
        // Accepts the password stored in database and the password given by user (req.body)
        const isMatch = await bcrypt.compare(
          req.body.password,
          output[0].password
        );
        // If password does not match
        if (!isMatch) {
          res.send("Password incorrect");
        }
        else {
          // res.send(result)
          const payload = {
            user: {
              user_id: output[0].user_id //add other info
              
            }
          }
          jwt.sign( payload ,
            process.env.jwtSecret,
            {
              expiresIn: "365d",
            },
            (err, token) => { 
              if (err) throw err;
              res.json({token});
            }
            );
        };
        
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// Verify
router.get("/users/verify", (req, res) => {
  const token = req.header("x-auth-token");
  jwt.verify(token, process.env.jwtSecret, (error, decodedToken) => {
    console.log(decodedToken)
    if (error) {
      res.status(401).json({
        msg: "Unauthorized Access!",
      });
    } else {
      res.status(200);
      res.send(decodedToken);
    }
  });
});
const middleware = require("../middleware/auth");

  router.get("/", middleware, (req, res) => {
    try {
      let sql = "SELECT * FROM users";
      con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } catch (error) {
      console.log(error);
    }
  });
module.exports = router;