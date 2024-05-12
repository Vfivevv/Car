import { AddonModel } from "./addon.model.js";
import { AddonRepository } from "./addon.repository.js";

const addonRepository = new AddonRepository(AddonModel);

export { addonRepository };
