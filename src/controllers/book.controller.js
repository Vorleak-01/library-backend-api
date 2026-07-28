const bookRepository = require('../repositories/book.repository');

async function listBooks(req, res, next) {
  try {
    const books = await bookRepository.listBooks(req.query.search);
    res.json(books);
  } catch (err) {
    next(err);
  }
}

async function getBorrowReport(req, res, next) {
  try {
    const report = await bookRepository.getBorrowReport();
    res.json(report);
  } catch (err) {
    next(err);
  }
}

module.exports = { listBooks, getBorrowReport };
