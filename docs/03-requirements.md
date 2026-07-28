# 3. Requirements — 100 points

Suggested timing: S5 ≈ 25 min · S6 ≈ 40 min · S7 ≈ 40 min · buffer ≈ 15 min

---

## S5 — Set up the relational database (30 pts)

### S5.1 — Database & connection (10 pts)
Create an empty PostgreSQL database named `librarydb`, copy
`.env.example` to `.env`, and set your `DATABASE_URL`.

### S5.2 — Complete the schema (15 pts)
In `prisma/schema.prisma`, add the **`LoanStatus` enum** and the
**`Loan` model** exactly as described in
[02-erd-data-dictionary.md](02-erd-data-dictionary.md):
correct types, relations to `Member` and `Book`, defaults for
`status` and `borrowDate`, nullable `returnDate`.

### S5.3 — Migrate & seed (5 pts)
```bash
npm run migrate     # give the migration a name, e.g. "init"
npm run seed        # loads 4 members, 5 books, 5 loans
```
Both must finish without errors.

> Commit: `S5 database setup done`

---

## S6 — SQL data access components (35 pts)

Implement the `TODO` functions in `src/repositories/`.
The routes and controllers already call them — you only write the data
access code.

### S6.1 — List books (10 pts) — `book.repository.js`
`GET /api/books` returns all books; `GET /api/books?search=java`
filters by title, case-insensitive. Use Prisma Client.

### S6.2 — Member with loans (10 pts) — `member.repository.js`
`GET /api/members/1` returns the member **with their loans, and each
loan's book**. Unknown id → the controller answers 404 (already done)
— your function just returns `null`.

### S6.3 — Borrow report (15 pts) — `book.repository.js`
`GET /api/reports/borrowed-books` returns every book with
`timesBorrowed` (0 included), ordered most-borrowed first.
**Must use `prisma.$queryRaw`** with JOIN + GROUP BY + COUNT.
A Prisma-Client-only solution earns 0 for this task.

> Commit after each function: `S6.1 ...`, `S6.2 ...`, `S6.3 ...`

---

## S7 — Server-side business components (35 pts)

Implement the `TODO` functions in `src/services/loan.service.js`.
All business rules are written above each function.

### S7.1 — Borrow a book (25 pts)
`POST /api/loans` with `{ "memberId": 3, "bookId": 4 }`:
- 404 if member or book does not exist
- 409 if no copies available
- due date = today + 14 days
- creates the loan **and** decreases `copiesAvailable` in **one
  transaction** (`prisma.$transaction`)

### S7.2 — Return a loan (10 pts)
`PUT /api/loans/1/return`:
- 404 if the loan does not exist
- 409 if the loan is not `BORROWED`
- sets `status = RETURNED`, `returnDate = now`, and increases
  `copiesAvailable` by 1

> Commit: `S7.1 borrow book`, `S7.2 return loan` — then **push!**

---

## How to check yourself

Every task has ready-made requests in `requests.http` with the expected
result written above it. If all requests behave as described on freshly
seeded data (`npm run seed`), you are done.
