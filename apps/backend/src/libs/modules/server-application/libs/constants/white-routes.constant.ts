import { FormsApiPath } from "@car/shared";

import { APIPath } from "~/libs/enums/enums.js";
import { AuthApiPath } from "~/modules/auth/auth.js";
import { CarsApiPath } from "~/modules/cars/cars.js";

const WHITE_ROUTES = [
	`${APIPath.AUTH}${AuthApiPath.SIGN_UP}`,
	`${APIPath.AUTH}${AuthApiPath.SIGN_IN}`,
	`${APIPath.AUTH}${AuthApiPath.FORGOT_PASSWORD}`,
	`${APIPath.AUTH}${AuthApiPath.UPDATE_PASSWORD}`,
	`${APIPath.CARS}${CarsApiPath.ROOT}`,
	`${APIPath.CARS}${CarsApiPath.$ID}`,
	`${APIPath.FORMS}${FormsApiPath.ROOT}`,
	`${APIPath.FORMS}${FormsApiPath.PRICE}`,
];

export { WHITE_ROUTES };
