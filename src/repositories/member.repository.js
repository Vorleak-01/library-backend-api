const prisma = require('../prisma');

// ==================================================================
// TODO — S6.2 (10 pts) — One member with their loans
//
// Return the member with this id, including their loans, and for
// each loan include the book.
// Return null if the member does not exist (the controller then
// answers 404 — that part is already done for you).
//
// Use Prisma Client with `include`.
// Test with: GET /api/members/1  and  GET /api/members/999
// ==================================================================
async function getMemberWithLoans(id) {
  throw new Error('Not implemented: getMemberWithLoans');
}

module.exports = { getMemberWithLoans };
