import * as db from "../fake-db";

// Make calls to your db from this file!
async function getPosts(n = 5, sub: string | undefined = undefined) {
  return db.getPosts(n, sub);
}

async function getPostById(postId: number){
  return db.getPost(postId);
}

async function addComment(postId: number, description: string, creatorId: number){
  return db.addComment(postId,creatorId, description);
}

async function addPost(title: string, link: string, creator: number, description: string, subgroup: string){
  return db.addPost(title,link,creator,description,subgroup)
}

async function editPost(postId: number, title: string, link: string, description: string, subgroup: string ){
  return db.editPost(postId,{title,link,description, subgroup})
}

async function deletePost(postId: number){
  return db.deletePost(postId);
}

async function addVote(post_id: number, user_id: number, value: number){
 return await db.addVote(post_id,user_id,value); 
   
}

export { 
  getPosts,
  getPostById,
  addComment,
  addPost,
  editPost,
  deletePost,
  addVote
};
