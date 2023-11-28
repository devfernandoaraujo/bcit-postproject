// @ts-nocheck
import express from "express";
import * as database from "../controller/commentsController";  
const router = express.Router();
import { ensureAuthenticated } from "../middleware/checkAuth";

router.get("/show/:commentid", ensureAuthenticated, async (req, res) => {
  const user = await req.user;
  const commentId: number = await Number(req.params.commentid);
  const comment = await database.getComment(commentId );
  res.render("individualComment",{ comment, user });
});

router.get("/deleteconfirm/:commentid", ensureAuthenticated, async (req, res) => {
   try{
      const commentId = await Number(req.params.commentid);
      const user = await req.user;
      const comment = await database.getComment(commentId);

      //TODO: Check how to improve it
     if(user.id !== comment.creator.id){
        res.redirect(`/posts/show/${comment.post.id}`);
      }

      res.render("frmRemoveComment",{ comment, user });
    }
    catch(error){
       console.error(error);
      res.status(500).send("Internal Server Error loading comment confirmation of deletion.");
    }
});

router.post("/delete/:commentid", ensureAuthenticated, async (req, res) => {
     try{
      const commentId = await Number(req.params.commentid);
      const user = await req.user;
      const comment = await database.getComment(commentId);

      //TODO: Check how to improve it
      if(Number(user.id) !== comment.creator.id ){
        res.redirect('/posts');
      } 
      
      await database.deleteComment(commentId);

      res.redirect(`/posts/show/${comment.post_id}`);
    }
    catch(error){
       console.error(error);
      res.status(500).send("Internal Server Error while deleting comment");
    }
  
});

export default router;
