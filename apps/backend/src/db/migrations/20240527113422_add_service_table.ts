import { type Knex } from "knex";

const TABLE_NAME = "services";

const ColumnName = {
	CREATED_AT: "created_at",
	ID: "id",
	NAME: "name",
	PRICE: "price",
	UPDATED_AT: "updated_at",
} as const;

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable(TABLE_NAME, (table) => {
		table.increments(ColumnName.ID).primary();
		table.string(ColumnName.NAME);
		table.integer(ColumnName.PRICE);
		table
			.dateTime(ColumnName.CREATED_AT)
			.notNullable()
			.defaultTo(knex.fn.now());
		table
			.dateTime(ColumnName.UPDATED_AT)
			.notNullable()
			.defaultTo(knex.fn.now());
	});
}

async function down(knex: Knex): Promise<void> {
	await knex.schema.dropTableIfExists(TABLE_NAME);
}

export { down, up };
