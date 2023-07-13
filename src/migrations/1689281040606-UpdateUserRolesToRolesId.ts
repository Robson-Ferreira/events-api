import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUserRolesToRolesId1689281040606
  implements MigrationInterface
{
  name = 'UpdateUserRolesToRolesId1689281040606';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "userRoles" TO "roles_id"`,
    );
    await queryRunner.query(
      `ALTER TYPE "public"."users_userroles_enum" RENAME TO "users_roles_id_enum"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TYPE "public"."users_roles_id_enum" RENAME TO "users_userroles_enum"`,
    );
    await queryRunner.query(
      `ALTER TABLE "users" RENAME COLUMN "roles_id" TO "userRoles"`,
    );
  }
}
