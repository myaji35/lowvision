-- CreateTable
CREATE TABLE "contact_info" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT DEFAULT 1,
    "organizationKo" TEXT NOT NULL,
    "organizationEn" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "fax" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL
);
