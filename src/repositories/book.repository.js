const prisma = require('../prisma');

// ==================================================================
// S6.1 (10 pts) — List books
//
// Return all books, ordered by id ascending.
// If `search` is given, return only books whose title contains it,
// case-insensitive.
// ==================================================================

async function listBooks(search) {
  return prisma.book.findMany({
    where: search
      ? {
          title: {
            contains: search,
            mode: "insensitive",
          },
        }
      : undefined,

    orderBy: {
      id: "asc",
    },
  });
}


// ==================================================================
// S6.3 (15 pts) — Borrow report (RAW SQL REQUIRED)
//
// Return one row per book with:
// id, title, timesBorrowed
//
// - timesBorrowed = how many loans the book has
// - Books with no loans must still appear
// - Order by timesBorrowed descending, then id ascending
//
// MUST use prisma.$queryRaw
// ==================================================================

async function getBorrowReport() {
  return prisma.$queryRaw`
    SELECT
      b."id",
      b."title",
      COUNT(l."id")::int AS "timesBorrowed"
    FROM "Book" b
    LEFT JOIN "Loan" l
      ON b."id" = l."bookId"
    GROUP BY b."id", b."title"
    ORDER BY "timesBorrowed" DESC, b."id" ASC;
  `;
}


module.exports = {
  listBooks,
  getBorrowReport,
};