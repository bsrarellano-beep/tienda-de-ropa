import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1783313405456 implements MigrationInterface {
    name = ' $npmConfigName1783313405456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pedido_productos" ("id" SERIAL NOT NULL, "cantidad" integer NOT NULL, "precio_unitario" numeric(10,2) NOT NULL, "subtotal" numeric(10,2) NOT NULL, "pedidoId" integer, "productoId" integer, CONSTRAINT "PK_7a85762ff09341b06a4456015c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_9a74da9451f7e82263421351df2" FOREIGN KEY ("productoId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_9a74da9451f7e82263421351df2"`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13"`);
        await queryRunner.query(`DROP TABLE "pedido_productos"`);
    }

}
