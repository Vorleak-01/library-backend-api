const router = require('express').Router();
const bookController = require('../controllers/book.controller');
const memberController = require('../controllers/member.controller');
const loanController = require('../controllers/loan.controller');

// S6.1 — list books (optional ?search=)
router.get('/books', bookController.listBooks);

// S6.2 — one member with their loans
router.get('/members/:id', memberController.getMember);

// S6.3 — report: times each book was borrowed
router.get('/reports/borrowed-books', bookController.getBorrowReport);

// S7.1 — borrow a book
router.post('/loans', loanController.borrowBook);

// S7.2 — return a loan
router.put('/loans/:id/return', loanController.returnLoan);

module.exports = router;
