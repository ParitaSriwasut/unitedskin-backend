/*
  Warnings:

  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ShoppingCart` DROP FOREIGN KEY `ShoppingCart_productId_fkey`;

-- DropForeignKey
ALTER TABLE `ShoppingCart` DROP FOREIGN KEY `ShoppingCart_userId_fkey`;

-- DropTable
DROP TABLE `ShoppingCart`;

-- CreateTable
CREATE TABLE `Cart` (
    `userId` INTEGER NOT NULL,
    `productId` INTEGER NOT NULL,
    `quantity` INTEGER NOT NULL,

    UNIQUE INDEX `Cart_productId_userId_key`(`productId`, `userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Cart` ADD CONSTRAINT `Cart_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
