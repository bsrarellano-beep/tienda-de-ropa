import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1783383881825 implements MigrationInterface {
    name = ' $npmConfigName1783383881825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nombre_completo" character varying(150) NOT NULL, "dni" character varying(20) NOT NULL, "telefono" character varying(20), CONSTRAINT "UQ_7738d56540b66e2c1a89cbde563" UNIQUE ("dni"), CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "fecha" TIMESTAMP NOT NULL DEFAULT now(), "estado" character varying(50) NOT NULL DEFAULT 'PENDIENTE', "observaciones" text, "clienteId" integer, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedido_productos" ("id" SERIAL NOT NULL, "cantidad" integer NOT NULL, "precio_unitario" numeric(10,2) NOT NULL, "subtotal" numeric(10,2) NOT NULL, "pedidoId" integer, "productoId" integer, CONSTRAINT "PK_7a85762ff09341b06a4456015c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "tallas" ("id" SERIAL NOT NULL, "nombre" character varying(10) NOT NULL, CONSTRAINT "UQ_3f92996884b8f377408beef8d1e" UNIQUE ("nombre"), CONSTRAINT "PK_61ec00bad8f7793c79b42a97b09" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "colores" ("id" SERIAL NOT NULL, "nombre" character varying(50) NOT NULL, "codigo_hex" character varying(7), CONSTRAINT "UQ_49c48fdf7aa0a4e458519c58a2b" UNIQUE ("nombre"), CONSTRAINT "PK_4acbb85e7ff1560363ceb13ac3d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "producto_variaciones" ("id" SERIAL NOT NULL, "stock" integer NOT NULL DEFAULT '0', "productoId" integer, "tallaId" integer, "colorId" integer, CONSTRAINT "PK_cee63288b66425f561060acaebc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "nombre" character varying(150) NOT NULL, "descripcion" text, "precio" numeric(10,2) NOT NULL DEFAULT '0', "stock" integer NOT NULL DEFAULT '0', "codigoBarras" character varying(50), "categoriaId" integer, CONSTRAINT "UQ_715353cd7bfac3fe2d5e488e73f" UNIQUE ("codigoBarras"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "descripcion" character varying(255), CONSTRAINT "UQ_ccdf6cd1a34ea90a7233325063d" UNIQUE ("nombre"), CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "roles" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "description" character varying(255), CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE ("name"), CONSTRAINT "PK_c1433d71a4838793a49dcad46ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "nombre" character varying(100) NOT NULL, "email" character varying(150) NOT NULL, "password" character varying NOT NULL, "rol" character varying NOT NULL DEFAULT 'empleado', "isActive" boolean NOT NULL DEFAULT true, "telefono" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "personas" ("id" SERIAL NOT NULL, "nombres" character varying(100) NOT NULL, "apellidos" character varying(100) NOT NULL, "identificacion" character varying(15), "telefono" character varying(20), "user_id" integer, CONSTRAINT "UQ_8e46d893cdb0d3ca0435ae165fb" UNIQUE ("identificacion"), CONSTRAINT "REL_a5eea6c1723ca1e765836fb97b" UNIQUE ("user_id"), CONSTRAINT "PK_714aa5d028f8f3e6645e971cecd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_roles" ("usersId" integer NOT NULL, "rolesId" integer NOT NULL, CONSTRAINT "PK_38ffcfb865fc628fa337d9a0d4f" PRIMARY KEY ("usersId", "rolesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_99b019339f52c63ae615358738" ON "user_roles"  ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_13380e7efec83468d73fc37938" ON "user_roles"  ("rolesId") `);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c" FOREIGN KEY ("clienteId") REFERENCES "clientes"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13" FOREIGN KEY ("pedidoId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" ADD CONSTRAINT "FK_9a74da9451f7e82263421351df2" FOREIGN KEY ("productoId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" ADD CONSTRAINT "FK_18ba6a7cab73bb37a12c1dc0d69" FOREIGN KEY ("productoId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" ADD CONSTRAINT "FK_5571af86dc1a1177b2c471c4aec" FOREIGN KEY ("tallaId") REFERENCES "tallas"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" ADD CONSTRAINT "FK_d51d6fbb8eca88f38dc1616e477" FOREIGN KEY ("colorId") REFERENCES "colores"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_f452d5e2b2e3282a2ae4c1e36e0" FOREIGN KEY ("categoriaId") REFERENCES "categorias"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "personas" ADD CONSTRAINT "FK_a5eea6c1723ca1e765836fb97b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_99b019339f52c63ae6153587380" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles" ADD CONSTRAINT "FK_13380e7efec83468d73fc37938e" FOREIGN KEY ("rolesId") REFERENCES "roles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_13380e7efec83468d73fc37938e"`);
        await queryRunner.query(`ALTER TABLE "user_roles" DROP CONSTRAINT "FK_99b019339f52c63ae6153587380"`);
        await queryRunner.query(`ALTER TABLE "personas" DROP CONSTRAINT "FK_a5eea6c1723ca1e765836fb97b7"`);
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_f452d5e2b2e3282a2ae4c1e36e0"`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" DROP CONSTRAINT "FK_d51d6fbb8eca88f38dc1616e477"`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" DROP CONSTRAINT "FK_5571af86dc1a1177b2c471c4aec"`);
        await queryRunner.query(`ALTER TABLE "producto_variaciones" DROP CONSTRAINT "FK_18ba6a7cab73bb37a12c1dc0d69"`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_9a74da9451f7e82263421351df2"`);
        await queryRunner.query(`ALTER TABLE "pedido_productos" DROP CONSTRAINT "FK_bc3c920a34df83c6809f6c1df13"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_485346a40b61bb8ae3a98f5400c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_13380e7efec83468d73fc37938"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_99b019339f52c63ae615358738"`);
        await queryRunner.query(`DROP TABLE "user_roles"`);
        await queryRunner.query(`DROP TABLE "personas"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "roles"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
        await queryRunner.query(`DROP TABLE "products"`);
        await queryRunner.query(`DROP TABLE "producto_variaciones"`);
        await queryRunner.query(`DROP TABLE "colores"`);
        await queryRunner.query(`DROP TABLE "tallas"`);
        await queryRunner.query(`DROP TABLE "pedido_productos"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
