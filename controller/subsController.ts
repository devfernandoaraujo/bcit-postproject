import * as db from "../fake-db";

// Make calls to your db from this file!
async function getSubs(n = 5, sub = undefined) {
  return db.getSubs();
}

export { getSubs };