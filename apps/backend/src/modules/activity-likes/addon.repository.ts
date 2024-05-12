import { AddonEntity } from "./addon.entity.js";
import { type AddonModel } from "./addon.model.js";

class AddonRepository {
	private addonModel: typeof AddonModel;

	public constructor(addonModel: typeof AddonModel) {
		this.addonModel = addonModel;
	}

	public async findAll(): Promise<AddonEntity[]> {
		const addons = await this.addonModel.query().execute();

		return addons.map((addon) => {
			return AddonEntity.initialize({
				createdAt: addon.createdAt,
				id: addon.id,
				name: addon.name,
				price: addon.price,
				updatedAt: addon.updatedAt,
			});
		});
	}
}

export { AddonRepository };
