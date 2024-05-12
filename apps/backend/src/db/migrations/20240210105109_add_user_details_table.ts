import { type Knex } from "knex";

const TABLE_NAME = "user_details";

const ColumnName = {
	CREATED_AT: "created_at",
	FISRT_NAME: "first_name",
	ID: "id",
	LAST_NAME: "last_name",
	PHONE_NUMBER: "phone_number",
	SEX: "sex",
	UPDATED_AT: "updated_at",
	USER_ID: "user_id",
} as const;

const UserSex = {
	FEMALE: "female",
	MALE: "male",
	PREFER_NOT_TO_SAY: "prefer-not-to-say",
} as const;

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable(TABLE_NAME, (table) => {
		table.increments(ColumnName.ID).primary();
		table.integer(ColumnName.USER_ID).references("id").inTable("users");
		table.text(ColumnName.FISRT_NAME);
		table.text(ColumnName.LAST_NAME);
		table.string(ColumnName.PHONE_NUMBER).unique().defaultTo(null);
		table.enum(ColumnName.SEX, Object.values(UserSex)).defaultTo(null);
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
