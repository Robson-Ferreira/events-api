import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class EventsOrganizationTable1686019113039
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'organizations',
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
            name: 'organization_type',
            type: 'enum',
            enum: ['PF', 'PJ'],
          },
          {
            name: 'responsible_name',
            type: 'varchar(200)',
          },
          {
            name: 'logo',
            type: 'text',
          },
          {
            name: 'created_by',
            type: 'varchar(200)',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('organizations');
  }
}
