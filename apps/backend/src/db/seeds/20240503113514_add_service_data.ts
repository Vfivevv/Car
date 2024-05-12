import { type Knex } from "knex";

const TABLE_NAME = "services";

const ColumnName = {
	ADDITIONAL_INSURANCE: "additional_insurance",
	CHILD_SEAT: "child_seat",
	OWN_DRIVER: "own_driver",
} as const;

const SeedData = [
	{ name: ColumnName.OWN_DRIVER, price: "100" },
	{ name: ColumnName.CHILD_SEAT, price: "50" },
	{ name: ColumnName.ADDITIONAL_INSURANCE, price: "75" },
];

async function seed(knex: Knex): Promise<void> {
	await knex(TABLE_NAME).insert(SeedData);
}

export { seed };
