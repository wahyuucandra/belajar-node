/*
  Warnings:

  - You are about to drop the column `iklanId` on the `Iklan` table. All the data in the column will be lost.
  - Added the required column `carId` to the `Iklan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Iklan" DROP CONSTRAINT "Iklan_iklanId_fkey";

-- AlterTable
ALTER TABLE "Iklan" DROP COLUMN "iklanId",
ADD COLUMN     "carId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Iklan" ADD CONSTRAINT "Iklan_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
