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
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.30_-_Photo_of_a_modern_tube_labeled_Nature_s_Shaving_Cream_with_a_blue_and_white_design_set_against_a_nature_backdrop_lnped8.png",
    },
    create: {
      categoryName: "MEN",
      productName: "Nature's Shaving Cream",
      shortDescription: "Smooth shaving cream with organic ingredients.",
      guide:
        "Our Nature's Shaving Cream offers a close shave while hydrating the skin. Apply a thin layer, shave, and rinse off for a smooth finish.",
      productPrice: 20.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698128198/samples/ecommerce/DALL_E_2023-10-24_14.59.30_-_Photo_of_a_modern_tube_labeled_Nature_s_Shaving_Cream_with_a_blue_and_white_design_set_against_a_nature_backdrop_lnped8.png",
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
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698129856/samples/ecommerce/DALL_E_2023-10-24_15.44.09_-_Photo_of_an_elegant_dropper_bottle_labeled_Chamomile_Night_Serum_with_a_yellow_and_gold_design_surrounded_by_chamomile_flowers_i5srnd.png",
    },
    create: {
      categoryName: "WOMEN",
      productName: "Chamomile Night Serum",
      shortDescription: "Night serum with chamomile essence.",
      guide:
        "Rejuvenate your skin overnight with our Chamomile Night Serum. Apply a few drops before bedtime for refreshed and radiant skin in the morning.",
      productPrice: 34.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698129856/samples/ecommerce/DALL_E_2023-10-24_15.44.09_-_Photo_of_an_elegant_dropper_bottle_labeled_Chamomile_Night_Serum_with_a_yellow_and_gold_design_surrounded_by_chamomile_flowers_i5srnd.png",
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
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131512/samples/ecommerce/DALL_E_2023-10-24_16.11.43_-_Photo_of_a_fun_bottle_labeled_Berry_Bubble_Bath_with_a_red_and_purple_design_placed_amidst_a_splash_of_bubbles_and_berries_ztpygk.png",
    },
    create: {
      categoryName: "KIDS",
      productName: "Berry Bubble Bath",
      shortDescription: "Fruity bubble bath for kids.",
      guide:
        "Turn bath time into fun time with our Berry Bubble Bath. Pour a generous amount under running water and let the bubbles form.",
      productPrice: 16.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131512/samples/ecommerce/DALL_E_2023-10-24_16.11.43_-_Photo_of_a_fun_bottle_labeled_Berry_Bubble_Bath_with_a_red_and_purple_design_placed_amidst_a_splash_of_bubbles_and_berries_ztpygk.png",
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
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131548/samples/ecommerce/DALL_E_2023-10-24_16.12.22_-_Photo_of_a_sleek_tube_labeled_Lemon_Grass_Hand_Cream_with_a_green_and_yellow_design_standing_next_to_lemon_grass_stems_yj2qqt.png",
    },
    create: {
      categoryName: "KIDS",
      productName: "Lemon Grass Hand Cream",
      shortDescription: "Moisturizing hand cream with lemon grass scent.",
      guide:
        "Nourish your hands with our Lemon Grass Hand Cream. With its refreshing scent and natural ingredients, it leaves your hands soft and rejuvenated. Apply as needed throughout the day.",
      productPrice: 18.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131548/samples/ecommerce/DALL_E_2023-10-24_16.12.22_-_Photo_of_a_sleek_tube_labeled_Lemon_Grass_Hand_Cream_with_a_green_and_yellow_design_standing_next_to_lemon_grass_stems_yj2qqt.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 9 },
    update: {
      categoryName: "MEN",
      productName: "EcoFresh Face Cream",
      shortDescription: "Organic face cream with herbal extracts.",
      guide:
        "EcoFresh Face Cream is specifically formulated for men with organic ingredients. It hydrates the skin and maintains its natural glow. Apply a small amount on a clean face every morning and evening. The cream is absorbed quickly, leaving no residue. Store in a cool, dry place. Suitable for all skin types. Discontinue use if irritation occurs.",
      productPrice: 29.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131650/samples/ecommerce/DALL_E_2023-10-24_16.13.57_-_Photo_of_a_natural_cosmetic_product_in_an_eco-friendly_container_with_a_leafy_background_designed_for_men_eoimlz.png",
    },
    create: {
      categoryName: "MEN",
      productName: "EcoFresh Face Cream",
      shortDescription: "Organic face cream with herbal extracts.",
      guide:
        "EcoFresh Face Cream is specifically formulated for men with organic ingredients. It hydrates the skin and maintains its natural glow. Apply a small amount on a clean face every morning and evening. The cream is absorbed quickly, leaving no residue. Store in a cool, dry place. Suitable for all skin types. Discontinue use if irritation occurs.",
      productPrice: 29.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131650/samples/ecommerce/DALL_E_2023-10-24_16.13.57_-_Photo_of_a_natural_cosmetic_product_in_an_eco-friendly_container_with_a_leafy_background_designed_for_men_eoimlz.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 10 },
    update: {
      categoryName: "WOMEN",
      productName: "HerbalGlow Serum",
      shortDescription: "Natural serum with fresh herb essence.",
      guide:
        "Unveil your skin's natural radiance with HerbalGlow Serum. Crafted for women, it contains the goodness of fresh herbs. Apply 2-3 drops to your face after cleansing. Gently massage until absorbed. Use twice daily for best results. Suitable for all skin types. Keep away from direct sunlight.",
      productPrice: 34.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131727/samples/ecommerce/DALL_E_2023-10-24_16.15.18_-_Photo_of_a_natural_cosmetic_product_in_a_rustic_glass_jar_surrounded_by_fresh_herbs_tailored_for_women_ctlgks.png",
    },
    create: {
      categoryName: "WOMEN",
      productName: "HerbalGlow Serum",
      shortDescription: "Natural serum with fresh herb essence.",
      guide:
        "Unveil your skin's natural radiance with HerbalGlow Serum. Crafted for women, it contains the goodness of fresh herbs. Apply 2-3 drops to your face after cleansing. Gently massage until absorbed. Use twice daily for best results. Suitable for all skin types. Keep away from direct sunlight.",
      productPrice: 34.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131727/samples/ecommerce/DALL_E_2023-10-24_16.15.18_-_Photo_of_a_natural_cosmetic_product_in_a_rustic_glass_jar_surrounded_by_fresh_herbs_tailored_for_women_ctlgks.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 11 },
    update: {
      categoryName: "KIDS",
      productName: "FunFruits Lotion",
      shortDescription: "Playful lotion with fruity vitamins.",
      guide:
        "FunFruits Lotion is designed for kids, ensuring skin hydration with a fun twist. Enriched with vitamins from fruits, it keeps the skin soft. Apply generously after bath. It's gentle for everyday use. Free from parabens and sulfates. For external use only. Store in a cool place.",
      productPrice: 19.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131820/samples/ecommerce/DALL_E_2023-10-24_16.16.52_-_Photo_of_a_kid-friendly_natural_cosmetic_item_with_playful_packaging_depicting_cartoon_animals_achx0z.png",
    },
    create: {
      categoryName: "KIDS",
      productName: "FunFruits Lotion",
      shortDescription: "Playful lotion with fruity vitamins.",
      guide:
        "FunFruits Lotion is designed for kids, ensuring skin hydration with a fun twist. Enriched with vitamins from fruits, it keeps the skin soft. Apply generously after bath. It's gentle for everyday use. Free from parabens and sulfates. For external use only. Store in a cool place.",
      productPrice: 19.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131820/samples/ecommerce/DALL_E_2023-10-24_16.16.52_-_Photo_of_a_kid-friendly_natural_cosmetic_item_with_playful_packaging_depicting_cartoon_animals_achx0z.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 12 },
    update: {
      categoryName: "UNISEX",
      productName: "EarthTone Hydrator",
      shortDescription: "Minimalist moisturizer for all skin types.",
      guide:
        "EarthTone Hydrator offers balanced care for everyone. Its subtle formula suits both men and women. Apply daily on clean skin. The non-greasy formula ensures deep hydration. It's suitable for daily use and all seasons. Avoid contact with eyes. Store away from heat.",
      productPrice: 24.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131901/samples/ecommerce/DALL_E_2023-10-24_16.18.11_-_Photo_of_a_unisex_natural_cosmetic_product_in_a_minimalist_design_with_subtle_earth_tones_lidtyd.png",
    },
    create: {
      categoryName: "UNISEX",
      productName: "EarthTone Hydrator",
      shortDescription: "Minimalist moisturizer for all skin types.",
      guide:
        "EarthTone Hydrator offers balanced care for everyone. Its subtle formula suits both men and women. Apply daily on clean skin. The non-greasy formula ensures deep hydration. It's suitable for daily use and all seasons. Avoid contact with eyes. Store away from heat.",
      productPrice: 24.99,
      image:
        "https://res.cloudinary.com/dzgc1fru9/image/upload/v1698131901/samples/ecommerce/DALL_E_2023-10-24_16.18.11_-_Photo_of_a_unisex_natural_cosmetic_product_in_a_minimalist_design_with_subtle_earth_tones_lidtyd.png",
    },
  });

  await prisma.product.upsert({
    where: { id: 13 },
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
    where: { id: 14 },
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
    where: { id: 15 },
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
    where: { id: 16 },
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
