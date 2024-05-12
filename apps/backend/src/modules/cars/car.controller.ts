import { CarsApiPath } from "@car/shared";

import { APIPath } from "~/libs/enums/enums.js";
import {
	type APIHandlerOptions,
	type APIHandlerResponse,
	BaseController,
} from "~/libs/modules/controller/controller.js";
import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Logger } from "~/libs/modules/logger/logger.js";

import { type CarGetByIdRequestDto, type CarService } from "./cars.js";
import { carIdParametersValidationSchema } from "./libs/validation-schemas/validation-schemas.js";

class CarController extends BaseController {
	private carService: CarService;

	public constructor(logger: Logger, carService: CarService) {
		super(logger, APIPath.CARS);

		this.carService = carService;

		this.addRoute({
			handler: () => {
				return this.findAll();
			},
			method: "GET",
			path: CarsApiPath.ROOT,
		});

		this.addRoute({
			handler: (options) => {
				return this.findById(
					options as APIHandlerOptions<{
						params: CarGetByIdRequestDto;
					}>,
				);
			},
			method: "GET",
			path: CarsApiPath.$ID,
			validation: {
				params: carIdParametersValidationSchema,
			},
		});
	}

	private async findAll(): Promise<APIHandlerResponse> {
		return {
			payload: await this.carService.findAll(),
			status: HTTPCode.OK,
		};
	}

	private async findById(
		options: APIHandlerOptions<{
			params: {
				id: number;
			};
		}>,
	): Promise<APIHandlerResponse> {
		return {
			payload: await this.carService.findById(options.params.id),
			status: HTTPCode.OK,
		};
	}
}

export { CarController };
