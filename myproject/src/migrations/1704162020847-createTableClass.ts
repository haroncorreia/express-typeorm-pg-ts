import { MigrationInterface, QueryRunner, Table } from "typeorm"
import { UUID } from "typeorm/driver/mongodb/bson.typings"

export class CreateTableClass1704162020847 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
        await queryRunner.createTable(
            new Table(
                {
                    name: 'class',
                    columns: [
                        { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                        { name: 'name', type: 'varchar' },
                        { name: 'duration', type: 'integer' },
                        { name: 'created_at', type: 'timestamp', default: 'now()' },
                        { name: 'updated_at', type: 'timestamp', default: 'now()' },
                        { name: 'deleted_at', type: 'timestamp' }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('class');
    }

}
