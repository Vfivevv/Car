import { config } from "~/libs/modules/config/config.js";
import { database } from "~/libs/modules/database/database.js";
import { logger } from "~/libs/modules/logger/logger.js";
import { token } from "~/libs/modules/token/token.js";
import { authController } from "~/modules/auth/auth.js";
import { carController } from "~/modules/cars/cars.js";
import { formController } from "~/modules/form/forms.js";
import { userController, userService } from "~/modules/users/users.js";

import { BaseServerApplication } from "./base-server-application.js";
import { BaseServerApplicationApi } from "./base-server-application-api.js";

const apiV1 = new BaseServerApplicationApi(
	"v1",
	config,
	...authController.routes,
	...userController.routes,
	...carController.routes,
	...formController.routes,
);
const serverApplication = new BaseServerApplication({
	apis: [apiV1],
	config,
	database,
	logger,
	services: { userService },
	title: "Car",
	token,
});

export { type ServerApplicationRouteParameters } from "./libs/types/types.js";
export { serverApplication };
