import { MigrationInterface, QueryRunner } from "typeorm";

export class AddContentToPostTable1696865573411 implements MigrationInterface {
    name = 'AddContentToPostTable1696865573411'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`post_content\` \`content\` longtext NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post\` CHANGE \`content\` \`post_content\` longtext NOT NULL`);
    }

}
