-- CreateTable
CREATE TABLE "Car" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "variant" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "isNew" BOOLEAN NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Iklan" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "discount" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "iklanId" TEXT NOT NULL,

    CONSTRAINT "Iklan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Blog" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlogCar" (
    "carId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "BlogCar_pkey" PRIMARY KEY ("carId","blogId")
);

-- AddForeignKey
ALTER TABLE "Iklan" ADD CONSTRAINT "Iklan_iklanId_fkey" FOREIGN KEY ("iklanId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCar" ADD CONSTRAINT "BlogCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlogCar" ADD CONSTRAINT "BlogCar_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
