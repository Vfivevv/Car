import { FormValidationRule } from "./form-validation-rule.enum.js";

const FormValidationMessage = {
	ADJACENT_HYPHEN_APOSTROPHE: "Avoid hyphen-apostrophe combination",
	COMMON_MAXIMUM_LENGTH: `Maximum length – ${FormValidationRule.COMMON_MAXIMUM_LENGTH} characters`,
	EMAIL_DOMAIN_PART_MAXIMUM_LENGTH: `Max. domain part length – ${FormValidationRule.EMAIL_DOMAIN_PART_MAXIMUM_LENGTH} characters`,
	EMAIL_INVALID_FORMAT: "Email is invalid",
	EMAIL_LOCAL_PART_MAXIMUM_LENGTH: `Max. local part length – ${FormValidationRule.EMAIL_LOCAL_PART_MAXIMUM_LENGTH} characters`,
	FIELD_REQUIRE: "This field is required",
	FIRST_LAST_CHARACTERS_ONLY_LETTERS:
		"First and last characters must be letters",
	FIRST_NAME_INVALID_CHARACTERS: "Use only A-Z, a-z, 1 hyphen & 1 apostrophe",
	FIRST_NAME_MAXIMUM_LENGTH: `Maximum length – ${FormValidationRule.FIRST_NAME_MAXIMUM_LENGTH} characters`,
	FIRST_NAME_MINIMUM_LENGTH: `Minimum length – ${FormValidationRule.FIRST_NAME_MINIMUM_LENGTH} characters`,
	INVALID_CHARACTERS: "Use only A-Z, a-z, 1 hyphen & 1 apostrophe",
	INVALID_DATE: "Invalid date",
	INVALID_ID: "Id should be greater than or equal to 1",
	INVALID_NUMBER: "You can take only 3 seat",
	INVALID_OFFICE: "Invalid office",
	INVALID_PHONE_NUMBER: "Phone number have to start +380 and max length 13",
	LAST_NAME_INVALID_CHARACTERS: "Use only A-Z, a-z, 1 hyphen & 1 apostrophe",
	LAST_NAME_MAXIMUM_LENGTH: `Maximum length – ${FormValidationRule.LAST_NAME_MAXIMUM_LENGTH} characters`,
	LAST_NAME_MINIMUM_LENGTH: `Minimum length – ${FormValidationRule.LAST_NAME_MINIMUM_LENGTH} characters`,
	YOU_MUST_ACCEPT_RULES: "You must accept the rules",
} as const;

export { FormValidationMessage };
