import { type ValueOf } from "../../../../libs/types/types.js";
import { type UserSex } from "../enums/enums.js";

type UserAuthResponseDto = {
	createdAt: string;
	email: string;
	firstName: string;
	id: number;
	lastName: string;
	phoneNumber: null | string;
	sex: ValueOf<typeof UserSex> | null;
	updatedAt: string;
};

export { type UserAuthResponseDto };
