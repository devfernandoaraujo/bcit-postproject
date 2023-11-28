// @ts-nocheck
import express from "express";
import * as database from "../controller/postController";
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";
import { config } from "process";

  
router.get("/", async (req, res) => {
  const posts = await database.getPosts(20);
  const user = await req.user;
  res.render("posts", { posts, user });
});

router.get("/create", ensureAuthenticated, (req, res) => {
  const user = req.user;
  res.render("createPosts", { user });
});

router.post("/create", ensureAuthenticated, async (req, res) => {
    const user = await req.user;
    const title: string = await req.body.title;
    const subgroup: string = await req.body.subgroup;
    const link: string = await req.body.link;
    const description: string = await req.body.description;

    const post = await database.addPost(title,link,user.id,description,subgroup);
    
    res.redirect(`/posts/show/${post.id}`);

  // ⭐ TODO
});

router.get("/show/:postid", async (req, res) => {
  // ⭐ TODO
  const postId = await req.params.postid;
  const user = await req.user;
  const post = await database.getPostById(postId);
 
  res.render("individualPost",{ post, user });
});

router.get("/edit/:postid", ensureAuthenticated, async (req, res) => {
  // ⭐ TODO 
   try {
    const postId = await req.params.postid;
    const user = await req.user;
    const post = await database.getPostById(postId);
      //TODO: Check how to improve it
     if(Number(user.id) !== post.creator.id ){
        res.redirect('/posts');
      }

    res.render("editPost", { post, user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error while loading post edition");
  }
});

router.post("/edit/:postid", ensureAuthenticated, async (req, res) => {
    try{
      const title: string = await req.body.title;
      const link: string = await req.body.link;
      const description: string = await req.body.description;
      const subgroup: string = await req.body.subgroup;
      const postId: number = await req.params.postid;

      await database.editPost(postId,title,link,description,subgroup);

      res.redirect(`/posts/show/${postId}`);
    }
    catch(error){
       console.error(error);
      res.status(500).send("Internal Server Error while updating post");
    }

});

router.get("/deleteconfirm/:postid", ensureAuthenticated, async (req, res) => { 
    try{
      const postId = await req.params.postid;
      const user = await req.user;
      const post = await database.getPostById(postId);

      //TODO: Check how to improve it
     if(Number(user.id) !== post.creator.id ){
        res.redirect('/posts');
      }

      res.render("frmRemovePost",{ post, user });
    }
    catch(error){
       console.error(error);
      res.status(500).send("Internal Server Error loading post confirmation of deletion.");
    }
   
});

router.post("/delete/:postid", ensureAuthenticated, async (req, res) => {
  try{
      const postId = await req.params.postid;
      const user = await req.user;
      const post = await database.getPostById(postId);

      //TODO: Check how to improve it
      if(Number(user.id) !== post.creator.id ){
        res.redirect('/posts');
      }
 
      const sub = post.subgroup; 
      await database.deletePost(post.id);

      res.redirect(`/subs/show/${sub}`);
    }
    catch(error){
       console.error(error);
      res.status(500).send("Internal Server Error while deleting post");
    }
});


router.post( "/comment-create/:postid", ensureAuthenticated, async (req, res) => {
    // ⭐ TODO
    
    const postId = await req.params.postid;
    const commentText = await req.body.comment;
    const user = await req.user;
    const commentId = await database.addComment(postId,commentText, user.id);
     
    const post = await database.getPostById(postId);
    
    res.render("individualPost",{ post, user, commentId });
 
  }
);

router.post("/vote/:postid",ensureAuthenticated, async(req,res)=>{
  const postId= await Number(req.params.postid)           ;
  const vote = await req.body.vote; 
  const user = await req.user;
  const userId = Number(user.id);
  const netVote = await database.addVote(postId,userId,vote); 
  res.json({ votes: netVote });
});

export default router;
