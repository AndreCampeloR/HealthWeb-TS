-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Operadora" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "empresaId" INTEGER NOT NULL,

    CONSTRAINT "Operadora_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Associacao_Medico_Operadora" (
    "id" SERIAL NOT NULL,
    "medicoId" INTEGER NOT NULL,
    "operadoraId" INTEGER NOT NULL,

    CONSTRAINT "Associacao_Medico_Operadora_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Empresa_cnpj_key" ON "Empresa"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Medico_cpf_key" ON "Medico"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Associacao_Medico_Operadora_medicoId_operadoraId_key" ON "Associacao_Medico_Operadora"("medicoId", "operadoraId");

-- AddForeignKey
ALTER TABLE "Operadora" ADD CONSTRAINT "Operadora_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Associacao_Medico_Operadora" ADD CONSTRAINT "Associacao_Medico_Operadora_medicoId_fkey" FOREIGN KEY ("medicoId") REFERENCES "Medico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Associacao_Medico_Operadora" ADD CONSTRAINT "Associacao_Medico_Operadora_operadoraId_fkey" FOREIGN KEY ("operadoraId") REFERENCES "Operadora"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
