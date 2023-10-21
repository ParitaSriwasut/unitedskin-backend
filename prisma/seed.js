const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: "alice@prisma.io" },
    update: {
      name: "Alice",
      username: "alice",
      password: await bcrypt.hash("alice", 12),
      mobile: "1234567890",
      isAdmin: false,
    },
    create: {
      email: "alice@prisma.io",
      name: "Alice",
      username: "alice",
      password: await bcrypt.hash("alice", 12),
      mobile: "1234567890",
      isAdmin: false,
    },
  });
  const bob = await prisma.user.upsert({
    where: { email: "bob@prisma.io" },
    update: {
      email: "bob@prisma.io",
      name: "Bob",
      username: "bob",
      password: await bcrypt.hash("bob", 12),
      mobile: "1234567891",
      isAdmin: true,
    },
    create: {
      email: "bob@prisma.io",
      name: "Bob",
      username: "bob",
      password: await bcrypt.hash("bob", 12),
      mobile: "1234567891",
      isAdmin: true,
    },
  });
  console.log({ alice, bob });

  await prisma.product.upsert({
    where: { id: 1 },
    update: {
      categoryName: "MEN",
      productName: "The Ordinary Glycolic Acid 7% Toning Solution",
      shortDescription: "Face-Cream",
      guide: "",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });
  await prisma.product.upsert({
    where: { id: 2 },
    update: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 3 },
    update: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 4 },
    update: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 5 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 6 },
    update: {
      categoryName: "UNISEX",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "UNISEX",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 7 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 8 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 9 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 100,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 10 },
    update: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 11 },
    update: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 12 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 13 },
    update: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "WOMEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 14 },
    update: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 15 },
    update: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "T-Shirt",
      shortDescription: "T-Shirt",
      guide: "T-Shirt",
      productPrice: 150,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
