const prisma = require('../prisma');

// ==================================================================
// S6.2 (10 pts) — One member with their loans
//
// Return the member with this id, including their loans, and for
// each loan include the book.
//
// Return null if the member does not exist.
//
// Use Prisma Client with `include`.
//
// Test:
// GET /api/members/1
// GET /api/members/999
// ==================================================================

async function getMemberWithLoans(id) {
  return prisma.member.findUnique({
    where: {
      id: Number(id),
    },

    include: {
      loans: {
        include: {
          book: true,
        },
      },
    },
  });
}

module.exports = { getMemberWithLoans };