import { Model, type RelationMappings } from "objection";

import {
	AbstractModel,
	DatabaseTableName,
} from "~/libs/modules/database/database.js";

import { CarDetailsModel } from "./car-details.model.js";

class CarModel extends AbstractModel {
	public static relationMappings = (): RelationMappings => {
		return {
			carDetails: {
				join: {
					from: `${DatabaseTableName.CARS}.id`,
					to: `${DatabaseTableName.CAR_DETAILS}.carId`,
				},
				modelClass: CarDetailsModel,
				relation: Model.HasOneRelation,
			},
		};
	};

	public carDetails!: CarDetailsModel;

	public image!: string;

	public name!: string;

	public rentPrice!: string;

	public static override get tableName(): string {
		return DatabaseTableName.CARS;
	}
}

export { CarModel };
