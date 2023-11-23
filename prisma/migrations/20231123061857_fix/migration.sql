/*
  Warnings:

  - You are about to drop the column `paymentMethod` on the `Payment` table. All the data in the column will be lost.
  - Added the required column `paymentQRCode` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Payment` DROP COLUMN `paymentMethod`,
    ADD COLUMN `paymentQRCode` VARCHAR(191) NOT NULL;
