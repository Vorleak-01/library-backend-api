const prisma = require('../prisma');
const httpError = require('../utils/httpError');

// ==================================================================
// TODO — S7.1 (25 pts) — Borrow a book
//
// Business rules:
// 1. The member must exist          -> throw httpError(404, '...')
// 2. The book must exist            -> throw httpError(404, '...')
// 3. book.copiesAvailable must be > 0
//                                   -> throw httpError(409, '...')
// 4. dueDate = today + 14 days
// 5. Create the loan AND decrease copiesAvailable by 1.
//    Both writes must happen in ONE prisma.$transaction — if one
//    fails, the other must not be saved.
// 6. Return the created loan.
//
// Test with: POST /api/loans  (see requests.http for all cases)
// ==================================================================
async function borrowBook(memberId, bookId) {
  throw new Error('Not implemented: borrowBook');
}

// ==================================================================
// TODO — S7.2 (10 pts) — Return a loan
//
// Business rules:
// 1. The loan must exist            -> throw httpError(404, '...')
// 2. loan.status must be BORROWED   -> throw httpError(409, '...')
// 3. Set status = RETURNED and returnDate = now.
// 4. Increase the book's copiesAvailable by 1.
// 5. Return the updated loan.
//
// Test with: PUT /api/loans/1/return
// ==================================================================
async function returnLoan(loanId) {
  throw new Error('Not implemented: returnLoan');
}

module.exports = { borrowBook, returnLoan };
