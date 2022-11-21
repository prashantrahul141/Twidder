/*
  Warnings:

  - You are about to drop the column `likedById` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likedById_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "likedById",
ADD COLUMN     "favouritedById" TEXT;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_favouritedById_fkey" FOREIGN KEY ("favouritedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
