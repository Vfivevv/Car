import { z } from "zod";

import { FormValidationMessage, FormValidationRule } from "../enums/enums.js";

type CarValidationDto = {
	additionalInsurance: z.ZodBoolean;
	childSeat: z.ZodNumber;
	ownDriver: z.ZodBoolean;
};

const formCarParameters = z
	.object<CarValidationDto>({
		additionalInsurance: z.boolean(),
		childSeat: z
			.number()
			.min(FormValidationRule.CHILD_SEAT_MINIMUM_LENGHT, {
				message: FormValidationMessage.INVALID_NUMBER,
			})
			.max(FormValidationRule.CHILD_SEAT_MAXIMUM_LENGHT, {
				message: FormValidationMessage.INVALID_NUMBER,
			}),
		ownDriver: z.boolean(),
	})
	.required();

export { formCarParameters };
