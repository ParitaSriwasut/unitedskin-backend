const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

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
      productName: "Herbal Beard Oil",
      shortDescription: "Natural beard oil with essential herbs.",
      guide:
        "Formulated with organic herbs, our Herbal Beard Oil nourishes facial hair, promotes growth, and soothes the skin beneath. Massage a few drops into your beard daily for best results.",
      productPrice: 25.09,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_15.14.25_-_Photo_of_a_sleek_bottle_labeled_Herbal_Beard_Oil_with_a_green_and_brown_design_standing_next_to_some_fresh_herbs_qbcyfv.png",
    },
    create: {
      categoryName: "MEN",
      productName: "Herbal Beard Oil",
      shortDescription: "Natural beard oil with essential herbs.",
      guide:
        "Formulated with organic herbs, our Herbal Beard Oil nourishes facial hair, promotes growth, and soothes the skin beneath. Massage a few drops into your beard daily for best results.",
      productPrice: 25.09,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_15.14.25_-_Photo_of_a_sleek_bottle_labeled_Herbal_Beard_Oil_with_a_green_and_brown_design_standing_next_to_some_fresh_herbs_qbcyfv.png",
    },
  });
  await prisma.product.upsert({
    where: { id: 2 },
    update: {
      categoryName: "WOMEN",
      productName: "Rose Petal Face Cream",
      shortDescription: "Moisturizing cream with rose extracts.",
      guide:
        "Our Rose Petal Face Cream is enriched with natural rose extracts, providing hydration and a radiant glow. Apply evenly on face and neck after cleansing.",
      productPrice: 29.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.21_-_Photo_of_a_luxurious_jar_labeled_Rose_Petal_Face_Cream_with_a_pink_and_white_design_surrounded_by_rose_petals_cjpgbq.png",
    },
    create: {
      categoryName: "WOMEN",
      productName: "Rose Petal Face Cream",
      shortDescription: "Moisturizing cream with rose extracts.",
      guide:
        "Our Rose Petal Face Cream is enriched with natural rose extracts, providing hydration and a radiant glow. Apply evenly on face and neck after cleansing.",
      productPrice: 29.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.21_-_Photo_of_a_luxurious_jar_labeled_Rose_Petal_Face_Cream_with_a_pink_and_white_design_surrounded_by_rose_petals_cjpgbq.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 3 },
    update: {
      categoryName: "KIDS",
      productName: "Lavender Baby Lotion",
      shortDescription: "Gentle lotion with calming lavender.",
      guide:
        "Crafted with love for delicate skin, our Lavender Baby Lotion soothes and moisturizes while providing a calming aroma. Apply generously after bath time.",
      productPrice: 19.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128200/samples/ecommerce/DALL_E_2023-10-24_15.14.28_-_Photo_of_a_gentle-looking_bottle_labeled_Lavender_Baby_Lotion_with_a_purple_and_blue_design_alongside_sprigs_of_lavender_ivxawe.png",
    },
    create: {
      categoryName: "KIDS",
      productName: "Lavender Baby Lotion",
      shortDescription: "Gentle lotion with calming lavender.",
      guide:
        "Crafted with love for delicate skin, our Lavender Baby Lotion soothes and moisturizes while providing a calming aroma. Apply generously after bath time.",
      productPrice: 19.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128200/samples/ecommerce/DALL_E_2023-10-24_15.14.28_-_Photo_of_a_gentle-looking_bottle_labeled_Lavender_Baby_Lotion_with_a_purple_and_blue_design_alongside_sprigs_of_lavender_ivxawe.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 4 },
    update: {
      categoryName: "UNISEX",
      productName: "Eucalyptus Shower Gel",
      shortDescription: "Refreshing shower gel with eucalyptus.",
      guide:
        "Experience the invigorating aroma of eucalyptus with our natural shower gel. Lather and rinse for a refreshing shower experience.",
      productPrice: 15.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.25_-_Photo_of_a_refreshing_bottle_labeled_Eucalyptus_Shower_Gel_with_a_green_and_blue_design_placed_next_to_eucalyptus_leaves_uatibg.png",
    },
    create: {
      categoryName: "UNISEX",
      productName: "Eucalyptus Shower Gel",
      shortDescription: "Refreshing shower gel with eucalyptus.",
      guide:
        "Experience the invigorating aroma of eucalyptus with our natural shower gel. Lather and rinse for a refreshing shower experience.",
      productPrice: 15.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.25_-_Photo_of_a_refreshing_bottle_labeled_Eucalyptus_Shower_Gel_with_a_green_and_blue_design_placed_next_to_eucalyptus_leaves_uatibg.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 5 },
    update: {
      categoryName: "MEN",
      productName: "Nature's Shaving Cream",
      shortDescription: "Smooth shaving cream with organic ingredients.",
      guide:
        "Our Nature's Shaving Cream offers a close shave while hydrating the skin. Apply a thin layer, shave, and rinse off for a smooth finish.",
      productPrice: 20.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "MEN",
      productName: "Nature's Shaving Cream",
      shortDescription: "Smooth shaving cream with organic ingredients.",
      guide:
        "Our Nature's Shaving Cream offers a close shave while hydrating the skin. Apply a thin layer, shave, and rinse off for a smooth finish.",
      productPrice: 20.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 6 },
    update: {
      categoryName: "WOMEN",
      productName: "Chamomile Night Serum",
      shortDescription: "Night serum with chamomile essence.",
      guide:
        "Rejuvenate your skin overnight with our Chamomile Night Serum. Apply a few drops before bedtime for refreshed and radiant skin in the morning.",
      productPrice: 34.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "WOMEN",
      productName: "Chamomile Night Serum",
      shortDescription: "Night serum with chamomile essence.",
      guide:
        "Rejuvenate your skin overnight with our Chamomile Night Serum. Apply a few drops before bedtime for refreshed and radiant skin in the morning.",
      productPrice: 34.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 7 },
    update: {
      categoryName: "KIDS",
      productName: "Berry Bubble Bath",
      shortDescription: "Fruity bubble bath for kids.",
      guide:
        "Turn bath time into fun time with our Berry Bubble Bath. Pour a generous amount under running water and let the bubbles form.",
      productPrice: 16.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "Berry Bubble Bath",
      shortDescription: "Fruity bubble bath for kids.",
      guide:
        "Turn bath time into fun time with our Berry Bubble Bath. Pour a generous amount under running water and let the bubbles form.",
      productPrice: 16.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
  });

  await prisma.product.upsert({
    where: { id: 8 },
    update: {
      categoryName: "KIDS",
      productName: "Lemon Grass Hand Cream",
      shortDescription: "Moisturizing hand cream with lemon grass scent.",
      guide:
        "Nourish your hands with our Lemon Grass Hand Cream. With its refreshing scent and natural ingredients, it leaves your hands soft and rejuvenated. Apply as needed throughout the day.",
      productPrice: 18.99,
      image: "https://i.ibb.co/0C4Lx0Q/1.jpg",
    },
    create: {
      categoryName: "KIDS",
      productName: "Lemon Grass Hand Cream",
      shortDescription: "Moisturizing hand cream with lemon grass scent.",
      guide:
        "Nourish your hands with our Lemon Grass Hand Cream. With its refreshing scent and natural ingredients, it leaves your hands soft and rejuvenated. Apply as needed throughout the day.",
      productPrice: 18.99,
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
