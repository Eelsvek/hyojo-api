import {MigrationInterface, QueryRunner} from "typeorm";

export class userpw1614473406324 implements MigrationInterface {
    name = 'userpw1614473406324'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NULLABLE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
    }

}
