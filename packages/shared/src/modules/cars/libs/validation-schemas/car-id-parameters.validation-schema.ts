import { z } from "zod";

import { CarValidationMessage } from "../enums/enums.js";

type CarIdParametersValidationDto = {
	id: z.ZodString;
};

const carIdParameters = z
	.object<CarIdParametersValidationDto>({
		id: z.string().trim().regex(/^\d+$/, {
			message: CarValidationMessage.INVALID_ID,
		}),
	})
	.required();

export { carIdParameters };
