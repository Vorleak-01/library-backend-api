# Evidence

Instructions:

- Save one screenshot per task into `evidence/`, named exactly `s5.1.png`,
  `s5.2.png`, etc. — all lower case (png or jpg both fine, just match the
  filename used in this file).
- You can commit each screenshot together with that task's code
  (e.g. `git add evidence/s6.1.png src/repositories/book.repository.js && git commit -m "S6.1 list books"`),
  or add all screenshots in a single commit at the end — either way,
  everything in `evidence/` must be committed and pushed before time is up.
- Do not rename or move the `evidence/` folder or `EVIDENCE.md`.

## S5.1 — DB & connection (10 pts)

![S5.1 evidence](evidence/s5.1.png)

## S5.2 — Schema (enum + Loan model) (15 pts)

![S5.2 evidence](evidence/s5.2.png)

## S5.3 — Migrate & seed (5 pts)

![S5.3 evidence](evidence/s5.3.png)

## S6.1 — List books (10 pts)

![S6.1 evidence](evidence/s6.1.png)

## S6.2 — Member with loans (10 pts)

![S6.2 evidence](evidence/s6.2.png)

## S6.3 — Borrow report (15 pts)

**Code reference:** see `src/repositories/book.repository.js`,
(must use `prisma.$queryRaw`)
![S6.3 evidence](evidence/s6.3.png)

## S7.1 — Borrow a book (25 pts)

**Code reference:** see `src/services/loan.service.js`,
(must use `prisma.$transaction`)
![S7.1 evidence](evidence/s7.1.png)

## S7.2 — Return a loan (10 pts)

![S7.2 evidence](evidence/s7.2.png)
