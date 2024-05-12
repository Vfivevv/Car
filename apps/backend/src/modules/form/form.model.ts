import { Model, type RelationMappings } from "objection";

import {
	AbstractModel,
	DatabaseTableName,
} from "~/libs/modules/database/database.js";

import { CarModel } from "../cars/car.model.js";

class FormModel extends AbstractModel {
	public static relationMappings = (): RelationMappings => {
		return {
			car: {
				join: {
					from: `${DatabaseTableName.FORMS}.carId`,
					to: `${DatabaseTableName.CARS}.id`,
				},
				modelClass: CarModel,
				relation: Model.HasOneRelation,
			},
		};
	};

	public additionalInsurance!: boolean;

	public address!: string;

	public car!: CarModel;

	public carId!: number;

	public childSeat!: number;

	public city!: string;

	public country!: string;

	public driverLicense!: string;

	public email!: string;

	public firstName!: string;

	public isRullesAccepted!: boolean;

	public lastName!: string;

	public office!: string;

	public ownDriver!: boolean;

	public phone!: string;

	public price!: number;

	public returnDate!: string;

	public startDate!: string;

	public static override get tableName(): string {
		return DatabaseTableName.FORMS;
	}
}

export { FormModel };
