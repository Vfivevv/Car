import { type Knex } from "knex";

const TABLE_NAME = "forms";

const ColumnName = {
	ADDITIONAL_INSURANCE: "additional_insurance",
	ADDRESS: "address",
	CAR_ID: "car_id",
	CHILD_SEAT: "child_seat",
	CITY: "city",
	COUNTRY: "country",
	CREATED_AT: "created_at",
	DRIVER_LICENSE: "driver_license",
	EMAIL: "email",
	FIRST_NAME: "first_name",
	ID: "id",
	IS_RULLES_ACCEPTED: "is_rulles_accepted",
	LAST_NAME: "last_name",
	OFFICE: "office",
	OWN_DRIVER: "own_driver",
	PHONE: "phone",
	PRICE: "price",
	RETURN_DATE: "return_date",
	START_DATE: "start_date",
	UPDATED_AT: "updated_at",
} as const;

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable(TABLE_NAME, (table) => {
		table.increments(ColumnName.ID).primary();
		table.string(ColumnName.FIRST_NAME);
		table.integer(ColumnName.CAR_ID).references("id").inTable("cars");
		table.string(ColumnName.LAST_NAME);
		table.string(ColumnName.PHONE);
		table.string(ColumnName.EMAIL);
		table.string(ColumnName.COUNTRY).nullable();
		table.string(ColumnName.CITY).nullable();
		table.string(ColumnName.ADDRESS).nullable();
		table.string(ColumnName.DRIVER_LICENSE).nullable();
		table.integer(ColumnName.CHILD_SEAT);
		table.boolean(ColumnName.OWN_DRIVER);
		table.boolean(ColumnName.ADDITIONAL_INSURANCE);
		table.string(ColumnName.OFFICE);
		table.string(ColumnName.START_DATE);
		table.string(ColumnName.RETURN_DATE);
		table.integer(ColumnName.PRICE);
		table.boolean(ColumnName.IS_RULLES_ACCEPTED);
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
