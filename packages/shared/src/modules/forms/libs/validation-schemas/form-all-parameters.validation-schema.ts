import { z } from "zod";

import { formCarParameters } from "./form-car-parameters.validation-schema.js";
import { formInformationParameters } from "./form-information-parameters.validation-schema.js";
import { formParameters } from "./form-parameters.validation-schema.js";

const formAllParameters = z.object({
	...formInformationParameters.shape,
	...formCarParameters.shape,
	...formParameters.shape,
});

export { formAllParameters };
