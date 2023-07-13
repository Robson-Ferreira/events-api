import { MigrationInterface, QueryRunner } from 'typeorm';

export class OrganizationAddColumnStatus1689281802163
  implements MigrationInterface
{
  name = 'OrganizationAddColumnStatus1689281802163';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."organizations_status_enum" AS ENUM('ACTIVE', 'INACTIVE')`,
    );
    await queryRunner.query(
      `ALTER TABLE "organizations" ADD "status" "public"."organizations_status_enum" NOT NULL DEFAULT 'ACTIVE'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "organizations" DROP COLUMN "status"`);
    await queryRunner.query(`DROP TYPE "public"."organizations_status_enum"`);
  }
}
