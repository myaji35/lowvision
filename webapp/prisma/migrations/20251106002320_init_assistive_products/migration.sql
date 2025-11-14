-- CreateTable
CREATE TABLE "assistive_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "price" INTEGER,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "imageUrl" TEXT,
    "purchaseUrl" TEXT,
    "publishedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
