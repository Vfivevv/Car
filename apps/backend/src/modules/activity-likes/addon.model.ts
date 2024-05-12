import { Model, type RelationMappings } from "objection";

import {
	AbstractModel,
	DatabaseTableName,
} from "~/libs/modules/database/database.js";

class AddonModel extends AbstractModel {
	public name!: string;

	public price!: number;

	public static override get tableName(): string {
		return DatabaseTableName.SERVICES;
	}
}

export { AddonModel };
