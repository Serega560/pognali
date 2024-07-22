-- CreateTable
CREATE TABLE "Request" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "text" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "image" TEXT,
    "transport_choice" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hashtags" TEXT,
    "level" INTEGER NOT NULL,
    "is_form_generated" BOOLEAN NOT NULL,

    CONSTRAINT "Request_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Request_token_key" ON "Request"("token");
