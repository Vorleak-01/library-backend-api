# Evidence

Instructions:

- Most tasks need **two** pictures in `evidence/`: a `-result` picture
  (proof it works — terminal output, Prisma Studio, or the response from
  `requests.http`/Postman) and a `-code` picture (the relevant code, a
  clean editor screenshot of just that function/block). Use the exact
  file names given under each task, all lower case (png or jpg both fine,
  just match the name used in this file).
- Some tasks (S7.1, S7.2) ask for two result states (e.g. success and
  error) — put both in one picture, or add a second file like
  `s7.1-result-b.png` and it will still be checked.
- You can commit each task's pictures together with its code
  (e.g. `git add evidence/s6.1-result.png evidence/s6.1-code.png src/repositories/book.repository.js && git commit -m "S6.1 list books"`),
  or add all pictures in a single commit at the end — either way,
  everything in `evidence/` must be committed and pushed before time is up.
- Do not rename or move the `evidence/` folder or `EVIDENCE.md`.

## S5.1 — DB & connection (10 pts)

**Result:** save as `evidence/s5.1-result.png` — terminal/psql showing
the `librarydb` database exists and the app connects without error

![S5.1 result](evidence/s5.1-result.png)

**Code** (`.env` — you can hide the password): save as `evidence/s5.1-code.png`

![S5.1 code](evidence/s5.1-code.png)

## S5.2 — Schema (enum + Loan model) (15 pts)

**Result:** save as `evidence/s5.2-result.png` — `npx prisma validate`
(or `format`) passing, or Prisma Studio showing the `Loan` table

![S5.2 result](evidence/s5.2-result.png)

**Code** (`prisma/schema.prisma` — the `LoanStatus` enum + `Loan` model): save as `evidence/s5.2-code.png`

![S5.2 code](evidence/s5.2-code.png)

## S5.3 — Migrate & seed (5 pts)

*No code to write for this task — one picture is enough.*

**Result:** save as `evidence/s5.3.png` — terminal showing `npm run
migrate` and `npm run seed` both finishing without errors

![S5.3 evidence](evidence/s5.3.png)

## S6.1 — List books (10 pts)

**Result:** save as `evidence/s6.1-result.png` — the responses for
`GET /api/books` and `GET /api/books?search=...` from `requests.http`/Postman

![S6.1 result](evidence/s6.1-result.png)

**Code** (`src/repositories/book.repository.js`): save as `evidence/s6.1-code.png`

![S6.1 code](evidence/s6.1-code.png)

## S6.2 — Member with loans (10 pts)

**Result:** save as `evidence/s6.2-result.png` — the response for
`GET /api/members/1` showing loans and each loan's book

![S6.2 result](evidence/s6.2-result.png)

**Code** (`src/repositories/member.repository.js`): save as `evidence/s6.2-code.png`

![S6.2 code](evidence/s6.2-code.png)

## S6.3 — Borrow report (15 pts)

**Result:** save as `evidence/s6.3-result.png` — the response for
`GET /api/reports/borrowed-books`

![S6.3 result](evidence/s6.3-result.png)

**Code** (`src/repositories/book.repository.js` — must use
`prisma.$queryRaw`): save as `evidence/s6.3-code.png`

![S6.3 code](evidence/s6.3-code.png)

## S7.1 — Borrow a book (25 pts)

*Take two result pictures: one successful borrow (201 + due date), and
one error case (404 or 409). Put both in one picture, or add a second
file `s7.1-result-b.png`.*

**Result:** save as `evidence/s7.1-result.png` (add `evidence/s7.1-result-b.png` if using a second picture)

![S7.1 result](evidence/s7.1-result.png)

**Code** (`src/services/loan.service.js` — must use
`prisma.$transaction`): save as `evidence/s7.1-code.png`

![S7.1 code](evidence/s7.1-code.png)

## S7.2 — Return a loan (10 pts)

*Take two result pictures: one successful return (200), and one error
case (404 or 409). Put both in one picture, or add a second file
`s7.2-result-b.png`.*

**Result:** save as `evidence/s7.2-result.png` (add `evidence/s7.2-result-b.png` if using a second picture)

![S7.2 result](evidence/s7.2-result.png)

**Code** (`src/services/loan.service.js`): save as `evidence/s7.2-code.png`

![S7.2 code](evidence/s7.2-code.png)
