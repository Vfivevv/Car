import { type Knex } from "knex";

const TABLE_NAME = "car_details";

const ColumnName = {
	CAR_ID: "car_id",
	CD_PLAYER: "cd_player",
	CENTRAL_LOCKING: "central_locking",
	CLIMATE_CONTROL: "climate_control",
	CREATED_AT: "created_at",
	ID: "id",
	NAVIGATION_SYSTEM: "navigation_system",
	NUMBER_OF_DOORS: "number_of_doors",
	PANORAMIC_ROOF: "panoramic_roof",
	PARKING_SENSOR: "parking_sensors",
	TRUNK_VOLUME: "trunk_volume",
	UPDATED_AT: "updated_at",
} as const;

async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable(TABLE_NAME, (table) => {
		table.increments(ColumnName.ID).primary();
		table.integer(ColumnName.CAR_ID).references("id").inTable("cars");
		table.string(ColumnName.NUMBER_OF_DOORS);
		table.boolean(ColumnName.CLIMATE_CONTROL);
		table.boolean(ColumnName.CD_PLAYER);
		table.boolean(ColumnName.PARKING_SENSOR);
		table.boolean(ColumnName.CENTRAL_LOCKING);
		table.boolean(ColumnName.NAVIGATION_SYSTEM);
		table.boolean(ColumnName.PANORAMIC_ROOF);
		table.string(ColumnName.TRUNK_VOLUME);
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
