import { logger } from "~/libs/modules/logger/logger.js";

import { addonRepository } from "../activity-likes/addons.js";
import { CarModel } from "../cars/cars.js";
import { FormController } from "./form.controller.js";
import { FormModel } from "./form.model.js";
import { FormRepository } from "./form.repository.js";
import { FormService } from "./form.service.js";

const formRepository = new FormRepository(CarModel, FormModel);
const formService = new FormService(formRepository, addonRepository);
const formController = new FormController(logger, formService);

export { formController };
export { type FormRepository } from "./form.repository.js";
export { type FormService } from "./form.service.js";
export { FormsApiPath } from "./libs/enums/enums.js";
export {
	type FormPriceRequestDto,
	type FormRequestDto,
} from "./libs/types/types.js";
