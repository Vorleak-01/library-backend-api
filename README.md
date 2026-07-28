# Library Borrowing API — C3 Practice Test (2 hours)

A school library needs a backend API to manage books, members, and borrowing.
Your job is to finish this project. **Read the docs first:**

| Doc | What's inside |
|---|---|
| [docs/01-use-case-guideline.md](docs/01-use-case-guideline.md) | Scenario, setup steps, exam rules |
| [docs/02-erd-data-dictionary.md](docs/02-erd-data-dictionary.md) | ERD + every table and column |
| [docs/03-requirements.md](docs/03-requirements.md) | Your tasks, with points |
| [docs/04-rubric.md](docs/04-rubric.md) | Exactly how you will be graded |

## Quick start

```bash
npm install
cp .env.example .env     # then edit DATABASE_URL for your machine
```

Your tasks are marked with `TODO` in these files:

1. `prisma/schema.prisma` — S5
2. `src/repositories/*.js` — S6
3. `src/services/loan.service.js` — S7

Everything else (routes, controllers, error handling) already works —
you don't need to change it.

## Test your work

```bash
npm run dev        # start the server
npm run seed       # reset the test data anytime
```

Open `requests.http` (VS Code REST Client extension) — it has one request
per task with the expected result written above it.

## Submitting your evidence

1. Open [EVIDENCE.md](EVIDENCE.md) and follow the instructions at the top.
2. For each task, take one screenshot proving it works (e.g. the
   `requests.http` response), and save it into `evidence/` using the exact
   filename listed for that task — all lower case (`s5.1.png`, `s5.2.png`,
   ...).
3. You can commit each screenshot together with that task's code, or add
   all screenshots in a single commit at the end — either way, everything
   in `evidence/` must be committed and pushed before time is up.
4. See the exam rules in
   [docs/01-use-case-guideline.md](docs/01-use-case-guideline.md) for the
   push deadline and submission form.
