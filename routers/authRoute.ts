import express, { Request, Response } from "express";
import passport from "../middleware/passport";
import {  registerUser } from "../controller/userController";  
const router = express.Router();

router.get("/login", async (req, res) => {
  res.render("login");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/posts",
    failureRedirect: "/auth/login",
  })
);

router.get("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/");
});

router.get("/register", async(req: Request, res: Response)=>{
  res.render("register")
});

router.post("/register", async(req: Request, res: Response)=>{
  try{
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;
    const uname = await req.body.uname;
    const password = await req.body.password; 

    await registerUser(firstName,lastName,uname,password);

     res.redirect("/");

  }
  catch(error){
    console.log(error);
  }
});

export default router;
