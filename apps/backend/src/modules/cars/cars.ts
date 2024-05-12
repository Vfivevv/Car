import { logger } from "~/libs/modules/logger/logger.js";

import { CarController } from "./car.controller.js";
import { CarModel } from "./car.model.js";
import { CarRepository } from "./car.repository.js";
import { CarService } from "./car.service.js";
import { CarDetailsModel } from "./car-details.model.js";

const carRepository = new CarRepository(CarModel, CarDetailsModel);
const carService = new CarService(carRepository);
const carController = new CarController(logger, carService);

export { carController };
export { CarEntity } from "./car.entity.js";
export { CarModel } from "./car.model.js";
export { type CarRepository } from "./car.repository.js";
export { type CarService } from "./car.service.js";
export { CarErrorMessage } from "./libs/enums/enums.js";
export { CarsApiPath } from "./libs/enums/enums.js";
export { type CarGetByIdRequestDto } from "./libs/types/types.js";
