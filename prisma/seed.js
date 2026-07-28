// Seed data — fixed values so grading results are always the same.
// Run with: npm run seed
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Clean tables (order matters because of foreign keys)
  await prisma.loan.deleteMany();
  await prisma.book.deleteMany();
  await prisma.member.deleteMany();

  const members = await prisma.member.createManyAndReturn({
    data: [
      { name: 'Sok Dara', email: 'dara@example.com', phone: '012345678' },
      { name: 'Chan Lina', email: 'lina@example.com', phone: '098765432' },
      { name: 'Kim Sophea', email: 'sophea@example.com', phone: null },
      { name: 'Meas Rithy', email: 'rithy@example.com', phone: '011223344' },
    ],
  });

  const books = await prisma.book.createManyAndReturn({
    data: [
      { title: 'Khmer Empire History', author: 'Vann Molyvann', copiesTotal: 3, copiesAvailable: 2 },
      { title: 'Learning JavaScript', author: 'Ethan Brown', copiesTotal: 2, copiesAvailable: 2 },
      { title: 'Database Design Basics', author: 'Adrienne Watt', copiesTotal: 4, copiesAvailable: 3 },
      { title: 'Web Development for Beginners', author: 'Jon Duckett', copiesTotal: 2, copiesAvailable: 2 },
      { title: 'Node.js in Action', author: 'Mike Cantelon', copiesTotal: 1, copiesAvailable: 0 },
    ],
  });

  const [dara, lina, sophea] = members;
  const [khmer, js, dbDesign, , nodeBook] = books;

  const day = 24 * 60 * 60 * 1000;
  const daysAgo = (n) => new Date(Date.now() - n * day);
  const daysFromNow = (n) => new Date(Date.now() + n * day);

  // Loans must match copiesAvailable above:
  // Khmer Empire History: 1 active loan (3 total -> 2 available)
  // Learning JavaScript: 2 returned loans (2 total -> 2 available)
  // Database Design Basics: 1 active loan (4 total -> 3 available)
  // Web Development for Beginners: never borrowed
  // Node.js in Action: 1 active loan (1 total -> 0 available)
  await prisma.loan.createMany({
    data: [
      { memberId: dara.id, bookId: khmer.id, status: 'BORROWED', borrowDate: daysAgo(3), dueDate: daysFromNow(11) },
      { memberId: lina.id, bookId: js.id, status: 'RETURNED', borrowDate: daysAgo(30), dueDate: daysAgo(16), returnDate: daysAgo(20) },
      { memberId: sophea.id, bookId: js.id, status: 'RETURNED', borrowDate: daysAgo(15), dueDate: daysAgo(1), returnDate: daysAgo(2) },
      { memberId: dara.id, bookId: dbDesign.id, status: 'BORROWED', borrowDate: daysAgo(5), dueDate: daysFromNow(9) },
      { memberId: lina.id, bookId: nodeBook.id, status: 'BORROWED', borrowDate: daysAgo(1), dueDate: daysFromNow(13) },
    ],
  });

  console.log('Seed done: 4 members, 5 books, 5 loans');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
