import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1629424647590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "text",
          },
          {
            name: "email",
            type: "text",
            isUnique: true,
            isNullable: false,
          },
          {
            name: "givenName",
            type: "text",
            isNullable: false,
          },
          {
            name: "familyName",
            type: "text",
            isNullable: false,
          },
          {
            name: "created",
            type: "text",
            default: "datetime('now')",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
  }
}
