import * as db from "../fake-db";

// Make calls to your db from this file!
async function getComment(commentId: number) {
  return db.getComment(commentId);
}

async function deleteComment(commentId: number){
  return db.deleteComment(commentId);
}

export { 
  getComment, 
  deleteComment,
};