// const fs = require("fs/promise");
// const createError = require("../utils/create-error");
// const { upload } = require("../utils/cloudinary-service");
// const prisma = require("../models/prisma");

// const productList = async (targetProductCategory) => {
//   const productCards = await prisma.product.findMany({
//     where: {
     
//     },
//   });

//   const friendIds = relationship.map((el) =>
//     el.requesterId === targetUserId ? el.receiverId : el.requesterId
//   );
//   return friendIds;
// };

// exports.createPost = async (req, res, next) => {
//   try {
//     const { message } = req.body;
//     if ((!message || !message.trim()) && !req.file) {
//       return next(createError("message or image is required", 400));
//     }

//     const data = { userId: req.user.id };
//     if (req.file) {
//       data.image = await upload(req.file.path);
//     }
//     if (message) {
//       data.message = message;
//     }

//     await prisma.post.create({
//       data: data,
//     });
//     res.status(201).json({ message: "post created" });
//   } catch (err) {
//     next(err);
//   } finally {
//     if (req.file) {
//       fs.unlink(req.file.path);
//     }
//   }
// };

// exports.getAllPostIncludeFriendPost = async (req, res, next) => {
//   try {
//     const friendIds = await getFriendIds(req.user.id); // [6, 12, 7]
//     // SELECT * FROM posts WHERE userId in (6, 12, 7)
//     const posts = await prisma.post.findMany({
//       where: {
//         userId: {
//           in: [...friendIds, req.user.id],
//         },
//       },
//       orderBy: {
//         createAt: "desc",
//       },
//       include: {
//         user: {
//           select: {
//             id: true,
//             firstName: true,
//             lastName: true,
//             profileImage: true,
//           },
//         },
//         likes: {
//           select: {
//             userId: true,
//           },
//         },
//       },
//     });
//     res.status(200).json({ posts });
//   } catch (err) {
//     next(err);
//   }
// };