import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Service } from "~/libs/types/types.js";
import {
	CarEntity,
	CarErrorMessage,
	type CarRepository,
} from "~/modules/cars/cars.js";

import { CarError } from "./libs/exceptions/exceptions.js";
import { type CarRequestDto, type CarResponseDto } from "./libs/types/types.js";

class CarService implements Service {
	private carRepository: CarRepository;

	public constructor(carRepository: CarRepository) {
		this.carRepository = carRepository;
	}

	public async create(payload: CarRequestDto): Promise<CarResponseDto> {
		const car = await this.carRepository.create(
			CarEntity.initializeNew({
				cdPlayer: payload.cdPlayer,
				climateControl: payload.climateControl,
				image: payload.image,
				name: payload.name,
				navigationSystem: payload.navigationSystem,
				numberOfDoors: payload.numberOfDoors,
				panoramicRoof: payload.panoramicRoof,
				parkingSensors: payload.parkingSensors,
				rentPrice: payload.rentPrice,
				trunkVolume: payload.trunkVolume,
			}),
		);

		return car.toObject();
	}

	public async delete(carId: number): Promise<boolean> {
		const car = await this.carRepository.find(carId);

		if (!car) {
			throw new CarError({
				message: CarErrorMessage.CAR_NOT_FOUND,
				status: HTTPCode.NOT_FOUND,
			});
		}

		return await this.carRepository.delete(carId);
	}

	public async find(carId: number): Promise<CarResponseDto | null> {
		const car = await this.carRepository.find(carId);

		return car?.toObject() ?? null;
	}

	public async findAll(): Promise<CarResponseDto[]> {
		const cars = await this.carRepository.findAll();

		return cars.map((car) => car.toObject());
	}

	public async findById(carId: number): Promise<CarResponseDto | null> {
		const car = await this.carRepository.findById(carId);

		if (!car) {
			throw new CarError({
				message: CarErrorMessage.CAR_NOT_FOUND,
				status: HTTPCode.NOT_FOUND,
			});
		}

		return car.toObject();
	}

	public async update(
		carId: number,
		data: CarRequestDto,
	): Promise<CarResponseDto | null> {
		const {
			cdPlayer,
			climateControl,
			image,
			name,
			navigationSystem,
			numberOfDoors,
			panoramicRoof,
			parkingSensors,
			rentPrice,
			trunkVolume,
		} = data;

		const updatedCar = await this.carRepository.update(carId, {
			cdPlayer,
			climateControl,
			image,
			name,
			navigationSystem,
			numberOfDoors,
			panoramicRoof,
			parkingSensors,
			rentPrice,
			trunkVolume,
		});

		return updatedCar?.toObject() ?? null;
	}
}

export { CarService };
