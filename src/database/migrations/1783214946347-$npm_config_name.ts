import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1783214946347 implements MigrationInterface {
    name = ' $npmConfigName1783214946347'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "personas" ("id" SERIAL NOT NULL, "nombres" character varying(100) NOT NULL, "apellidos" character varying(100) NOT NULL, "identificacion" character varying(15), "telefono" character varying(20), "user_id" integer, CONSTRAINT "UQ_8e46d893cdb0d3ca0435ae165fb" UNIQUE ("identificacion"), CONSTRAINT "REL_a5eea6c1723ca1e765836fb97b" UNIQUE ("user_id"), CONSTRAINT "PK_714aa5d028f8f3e6645e971cecd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "personas" ADD CONSTRAINT "FK_a5eea6c1723ca1e765836fb97b7" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "personas" DROP CONSTRAINT "FK_a5eea6c1723ca1e765836fb97b7"`);
        await queryRunner.query(`DROP TABLE "personas"`);
    }

}
