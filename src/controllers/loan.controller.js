const loanService = require('../services/loan.service');

async function borrowBook(req, res, next) {
  try {
    const { memberId, bookId } = req.body;
    const loan = await loanService.borrowBook(Number(memberId), Number(bookId));
    res.status(201).json(loan);
  } catch (err) {
    next(err);
  }
}

async function returnLoan(req, res, next) {
  try {
    const loan = await loanService.returnLoan(Number(req.params.id));
    res.json(loan);
  } catch (err) {
    next(err);
  }
}

module.exports = { borrowBook, returnLoan };
