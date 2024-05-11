import { z } from "zod";

import { FormValidationMessage, FormValidationRule } from "../enums/enums.js";

type FormParametersParametersValidationDto = {
	office: z.ZodString;
	returnDate: z.ZodString;
	startDate: z.ZodString;
};

const formParameters = z
	.object<FormParametersParametersValidationDto>({
		office: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.INVALID_DATE,
			})
			.trim(),
		returnDate: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.INVALID_OFFICE,
			})
			.trim(),
		startDate: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.INVALID_DATE,
			})
			.trim(),
	})
	.required();

export { formParameters };
