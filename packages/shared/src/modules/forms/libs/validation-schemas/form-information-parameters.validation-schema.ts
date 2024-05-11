import { z } from "zod";

import { FormValidationMessage, FormValidationRule } from "../enums/enums.js";

type FormInformationValidationDto = {
	address?: z.ZodString;
	city?: z.ZodString;
	country?: z.ZodString;
	driverLicense?: z.ZodString;
	email: z.ZodString;
	firstName: z.ZodString;
	isRullesAccepted?: z.ZodLiteral<true>;
	lastName: z.ZodString;
	phone: z.ZodString;
};

const formInformationParameters = z
	.object<FormInformationValidationDto>({
		address: z
			.string()
			.trim()
			.regex(/^[\s\w'-]*$/, {
				message: FormValidationMessage.INVALID_CHARACTERS,
			})
			.max(FormValidationRule.COMMON_MAXIMUM_LENGTH, {
				message: FormValidationMessage.COMMON_MAXIMUM_LENGTH,
			}),
		city: z
			.string()
			.trim()
			.regex(/^['A-Za-z-]*$/, {
				message: FormValidationMessage.INVALID_CHARACTERS,
			})
			.regex(/^(?!.*['-]{2})['A-Za-z-]*$/, {
				message: FormValidationMessage.ADJACENT_HYPHEN_APOSTROPHE,
			})
			.max(FormValidationRule.COMMON_MAXIMUM_LENGTH, {
				message: FormValidationMessage.COMMON_MAXIMUM_LENGTH,
			}),
		country: z
			.string()
			.trim()
			.regex(/^['A-Za-z-]*$/, {
				message: FormValidationMessage.INVALID_CHARACTERS,
			})
			.regex(/^(?!.*['-]{2})['A-Za-z-]*$/, {
				message: FormValidationMessage.ADJACENT_HYPHEN_APOSTROPHE,
			})
			.max(FormValidationRule.COMMON_MAXIMUM_LENGTH, {
				message: FormValidationMessage.COMMON_MAXIMUM_LENGTH,
			}),
		driverLicense: z
			.string()
			.trim()
			.regex(/^(?!['-])(?!.*['-]$)[\w-]*$/, {
				message: FormValidationMessage.INVALID_CHARACTERS,
			})
			.regex(/^(?!.*['-]{2})[\w-]*$/, {
				message: FormValidationMessage.ADJACENT_HYPHEN_APOSTROPHE,
			})
			.max(FormValidationRule.COMMON_MAXIMUM_LENGTH, {
				message: FormValidationMessage.COMMON_MAXIMUM_LENGTH,
			}),
		email: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.FIELD_REQUIRE,
			})
			.email({
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(/^[\w.]+(?:[._][\dA-Za-z]+)*(?=@)/, {
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(/^(?!.*[._]{2})[\w.]*(?=@)/, {
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(/(?<=@)(?!.*[.-]{2})[\d.A-Za-z-]*/, {
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(/^[^_][\w.]*(?=@)/, {
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(/^(?!.*_(?=@)).*(?=@)/, {
				message: FormValidationMessage.EMAIL_INVALID_FORMAT,
			})
			.regex(
				new RegExp(
					`^[a-zA-Z0-9._%+-]{1,${FormValidationRule.EMAIL_LOCAL_PART_MAXIMUM_LENGTH}}(?=@)`,
				),
				{
					message: FormValidationMessage.EMAIL_LOCAL_PART_MAXIMUM_LENGTH,
				},
			)
			.regex(
				new RegExp(
					`(?<=@)[a-zA-Z0-9.-]{1,${FormValidationRule.EMAIL_DOMAIN_PART_MAXIMUM_LENGTH}}$`,
				),
				{
					message: FormValidationMessage.EMAIL_DOMAIN_PART_MAXIMUM_LENGTH,
				},
			),
		firstName: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.FIELD_REQUIRE,
			})
			.regex(/^['A-Za-z-]*$/, {
				message: FormValidationMessage.FIRST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^[^-]*-?[^-]*$/, {
				message: FormValidationMessage.FIRST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^[^']*'?[^']*$/, {
				message: FormValidationMessage.FIRST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^(?!['-])(?!.*['-]$)['A-Za-z-]*$/, {
				message: FormValidationMessage.FIRST_LAST_CHARACTERS_ONLY_LETTERS,
			})
			.regex(/^(?!.*['-]{2})['A-Za-z-]*$/, {
				message: FormValidationMessage.ADJACENT_HYPHEN_APOSTROPHE,
			})
			.min(FormValidationRule.FIRST_NAME_MINIMUM_LENGTH, {
				message: FormValidationMessage.FIRST_NAME_MINIMUM_LENGTH,
			})
			.max(FormValidationRule.FIRST_NAME_MAXIMUM_LENGTH, {
				message: FormValidationMessage.FIRST_NAME_MAXIMUM_LENGTH,
			}),
		isRullesAccepted: z.literal(true, {
			errorMap: () => ({ message: "Remember must be ticked" }),
		}),
		lastName: z
			.string()
			.trim()
			.min(FormValidationRule.FIELD_MINIMUM_LENGTH, {
				message: FormValidationMessage.FIELD_REQUIRE,
			})
			.regex(/^['A-Za-z-]*$/, {
				message: FormValidationMessage.LAST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^[^-]*-?[^-]*$/, {
				message: FormValidationMessage.LAST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^[^']*'?[^']*$/, {
				message: FormValidationMessage.LAST_NAME_INVALID_CHARACTERS,
			})
			.regex(/^(?!['-])(?!.*['-]$)['A-Za-z-]*$/, {
				message: FormValidationMessage.FIRST_LAST_CHARACTERS_ONLY_LETTERS,
			})
			.regex(/^(?!.*['-]{2})['A-Za-z-]*$/, {
				message: FormValidationMessage.ADJACENT_HYPHEN_APOSTROPHE,
			})
			.min(FormValidationRule.LAST_NAME_MINIMUM_LENGTH, {
				message: FormValidationMessage.LAST_NAME_MINIMUM_LENGTH,
			})
			.max(FormValidationRule.LAST_NAME_MAXIMUM_LENGTH, {
				message: FormValidationMessage.LAST_NAME_MAXIMUM_LENGTH,
			}),
		phone: z
			.string()
			.trim()
			.regex(/^\+\d{12}$/, {
				message: FormValidationMessage.INVALID_PHONE_NUMBER,
			}),
	})
	.required();

export { formInformationParameters };
