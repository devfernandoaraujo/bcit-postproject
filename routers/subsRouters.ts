
import express from "express";
import * as database from "../controller/subsController";
import * as postsDatabase from "../controller/postController";
const router = express.Router();

router.get("/list", async (req, res) => {
 const subs = await database.getSubs();
 const user = await req.user;
  res.render("subs",{ subs, user });
});

router.get("/show/:subname", async (req, res) => {
   const subname = req.params.subname;
   const user = await req.user;
   const posts = await postsDatabase.getPosts(20, subname);
  res.render("sub", { posts, subname , user });
});

export default router;
