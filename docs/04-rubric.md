# 4. Rubric — how you will be graded

The grader clones your repo, runs `npm install`, `npm run migrate`,
`npm run seed`, starts the server, and clicks through `requests.http`
on **freshly seeded data**. Each row below is checked.

## S5 — Database (30 pts)

| # | Check | Pts |
|---|---|---|
| S5.1 | `.env.example` correct; project connects to `librarydb` | 10 |
| S5.2 | `Loan` model + `LoanStatus` enum match the data dictionary (types 5, relations 5, defaults + nullable `returnDate` 5) | 15 |
| S5.3 | `npm run migrate` and `npm run seed` run without errors | 5 |

## S6 — SQL data access (35 pts)

| # | Check | Expected on fresh seed | Pts |
|---|---|---|---|
| S6.1 | `GET /api/books` | 5 books | 5 |
| S6.1 | `GET /api/books?search=java` | 1 book: *Learning JavaScript* | 5 |
| S6.2 | `GET /api/members/1` | Sok Dara with 2 loans, each with its book | 8 |
| S6.2 | `GET /api/members/999` | 404 | 2 |
| S6.3 | `GET /api/reports/borrowed-books` | JavaScript = 2, Khmer History = 1, Database Design = 1, Node.js = 1, Web Dev = **0**, ordered desc | 10 |
| S6.3 | Code uses `prisma.$queryRaw` (grader reads the file) | — | 5 |

## S7 — Business logic (35 pts)

| # | Check | Expected | Pts |
|---|---|---|---|
| S7.1 | `POST /api/loans` `{memberId:3, bookId:4}` | 201, status BORROWED, dueDate = +14 days | 8 |
| S7.1 | Book 4 `copiesAvailable` after borrow | 2 → 1 | 5 |
| S7.1 | Borrow book 5 (0 copies) | 409 | 4 |
| S7.1 | Unknown member / unknown book | 404 / 404 | 3 |
| S7.1 | Code uses `prisma.$transaction` (grader reads the file) | — | 5 |
| S7.2 | `PUT /api/loans/1/return` | 200, RETURNED, returnDate set, book 1 copies 2 → 3 | 6 |
| S7.2 | Return the same loan again | 409 | 2 |
| S7.2 | Unknown loan | 404 | 2 |

## Also checked

- Commit history shows work step by step (at least one commit per task)
- Last push is before the deadline

**Total: 100 pts**
