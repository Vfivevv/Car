import { type Knex } from "knex";

const TABLE_NAME_CARS = "cars";
const TABLE_NAME_CAR_DETAILS = "car_details";

const CarColumns = {
	ID: "id",
	IMAGE: "image",
	NAME: "name",
	RENT_PRICE: "rent_price",
} as const;

const CarDetailsColumns = {
	CAR_ID: "car_id",
	CD_PLAYER: "cd_player",
	CENTRAL_LOCKING: "central_locking",
	CLIMATE_CONTROL: "climate_control",
	NAVIGATION_SYSTEM: "navigation_system",
	NUMBER_OF_DOORS: "number_of_doors",
	PANORAMIC_ROOF: "panoramic_roof",
	PARKING_SENSORS: "parking_sensors",
	TRUNK_VOLUME: "trunk_volume",
} as const;

const carSeedData = [
	{
		[CarColumns.IMAGE]:
			"https://i.ibb.co/4SkRMV2/audi-s3.jpg",
		[CarColumns.NAME]: "Audi S3 Limousine",
		[CarColumns.RENT_PRICE]: 800,
	},
	{
		[CarColumns.IMAGE]: "https://i.ibb.co/1nn3nH3/toyota.jpg",
		[CarColumns.NAME]: "Toyota RAV 4",
		[CarColumns.RENT_PRICE]: 1200,
	},
	{
		[CarColumns.IMAGE]: "https://i.ibb.co/rH46RrJ/Kia-Niro-EV.jpg",
		[CarColumns.NAME]: "Kia Niro EV",
		[CarColumns.RENT_PRICE]: 1050,
	},
	{
		[CarColumns.IMAGE]: "https://i.ibb.co/fXVRyhr/Porsche-Cayenne-S.jpg",
		[CarColumns.NAME]: "Audi S3 Limousine",
		[CarColumns.RENT_PRICE]: 1100,
	},
	{
		[CarColumns.IMAGE]: "https://i.ibb.co/sqv4jFk/Tesla-Model-3-Sedan.jpg",
		[CarColumns.NAME]: "Tesla 3 Sedan",
		[CarColumns.RENT_PRICE]: 1400,
	},
	{
		[CarColumns.IMAGE]: "https://i.ibb.co/gTbwNyN/Tesla-3.jpg",
		[CarColumns.NAME]: "Tesla 3",
		[CarColumns.RENT_PRICE]: 1100,
	},
];

const carDetailsSeedData = [
	{
		[CarDetailsColumns.CAR_ID]: 1,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 4,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 500,
	},
	{
		[CarDetailsColumns.CAR_ID]: 2,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 4,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 620,
	},
	{
		[CarDetailsColumns.CAR_ID]: 3,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 4,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 600,
	},
	{
		[CarDetailsColumns.CAR_ID]: 4,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 4,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 590,
	},
	{
		[CarDetailsColumns.CAR_ID]: 5,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 2,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 410,
	},
	{
		[CarDetailsColumns.CAR_ID]: 6,
		[CarDetailsColumns.CD_PLAYER]: true,
		[CarDetailsColumns.CENTRAL_LOCKING]: true,
		[CarDetailsColumns.CLIMATE_CONTROL]: true,
		[CarDetailsColumns.NAVIGATION_SYSTEM]: true,
		[CarDetailsColumns.NUMBER_OF_DOORS]: 4,
		[CarDetailsColumns.PANORAMIC_ROOF]: true,
		[CarDetailsColumns.PARKING_SENSORS]: true,
		[CarDetailsColumns.TRUNK_VOLUME]: 710,
	},
];

async function seed(knex: Knex): Promise<void> {
	await knex(TABLE_NAME_CARS).insert(carSeedData);
	await knex(TABLE_NAME_CAR_DETAILS).insert(carDetailsSeedData);
}

export { seed };
