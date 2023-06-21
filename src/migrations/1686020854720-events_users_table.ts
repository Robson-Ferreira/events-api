import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class EventsUsersTable1686020854720
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar(200)',
          },
          {
            name: 'username',
            type: 'varchar(200)',
            isUnique: true,
          },
          {
            name: 'email',
            type: 'varchar(200)',
          },
          {
            name: 'email_verified',
            type: 'boolean',
          },
          {
            name: 'picture',
            type: 'text',
          },
          {
            name: 'externalId',
            type: 'varchar(200)',
          },
          {
            name: 'userRoles',
            type: 'enum',
            enum: ['admin', 'organization_employer', 'organization_admin'],
          },
          {
            name: 'created_by',
            type: 'varchar(200)',
            isNullable: true,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
