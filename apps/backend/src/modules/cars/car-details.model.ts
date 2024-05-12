import { Model, type RelationMappings } from "objection";

import {
	AbstractModel,
	DatabaseTableName,
} from "~/libs/modules/database/database.js";

import { CarModel } from "./car.model.js";

class CarDetailsModel extends AbstractModel {
	public static relationMappings = (): RelationMappings => {
		return {
			user: {
				join: {
					from: `${DatabaseTableName.CAR_DETAILS}.carId`,
					to: `${DatabaseTableName.CARS}.id`,
				},
				modelClass: CarModel,
				relation: Model.BelongsToOneRelation,
			},
		};
	};

	public carId!: number;

	public cdPlayer!: boolean;

	public climateControl!: boolean;

	public navigationSystem!: boolean;

	public numberOfDoors!: string;

	public panoramicRoof!: boolean;

	public parkingSensors!: boolean;

	public trunkVolume!: string;

	public static override get tableName(): string {
		return DatabaseTableName.CAR_DETAILS;
	}
}

export { CarDetailsModel };
