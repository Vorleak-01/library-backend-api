const prisma = require('../prisma');

// ==================================================================
// TODO — S6.1 (10 pts) — List books
//
// Return all books, ordered by id ascending.
// If `search` is given, return only books whose title contains it,
// case-insensitive. If `search` is empty, return all books.
//
// Use Prisma Client (prisma.book...).
// Test with: GET /api/books  and  GET /api/books?search=java
// ==================================================================
async function listBooks(search) {
  throw new Error('Not implemented: listBooks');
}

// ==================================================================
// TODO — S6.3 (15 pts) — Borrow report (RAW SQL REQUIRED)
//
// Return one row per book with: id, title, timesBorrowed
// - timesBorrowed = how many loans the book has (0 if never borrowed
//   — books with no loans must still appear!)
// - Order by timesBorrowed descending, then id ascending.
//
// You MUST use prisma.$queryRaw with SQL (JOIN + GROUP BY + COUNT).
// Using only Prisma Client methods here gives 0 points.
//
// Tip: table/column names are case-sensitive in PostgreSQL,
// write them in double quotes: "Book", "Loan", "bookId"
// Tip: COUNT() returns BIGINT — cast it: COUNT(l."id")::int
//
// Test with: GET /api/reports/borrowed-books
// ==================================================================
async function getBorrowReport() {
  throw new Error('Not implemented: getBorrowReport');
}

module.exports = { listBooks, getBorrowReport };
