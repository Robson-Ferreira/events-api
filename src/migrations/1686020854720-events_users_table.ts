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
            name: 'password',
            type: 'varchar(200)',
          },
          {
            name: 'externalId',
            type: 'varchar(200)',
          },
          {
            name: 'role_id',
            type: 'varchar(200)',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
