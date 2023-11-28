import { NextFunction, Request, Response } from "express";
import * as postController from "../controller/postController";

function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/auth/login");
}

function forwardAuthenticated(req: Request, res: Response, next: NextFunction) {
  if (!req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

/*async function ensurePostOwner(req: Request, res: Response, next: NextFunction) {
  try {
    const postId: number = Number(req.params.postid);
    const post = await postController.getPostById(postId);

    const user = await req.user;

    if (user?.id !== Number(post.creator.id)) {
      return res.redirect("/posts");
    }

    next();
  } catch (error) { 

    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}
*/
export { ensureAuthenticated, forwardAuthenticated };
