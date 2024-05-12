import { type CarRequestDto } from "@car/shared";

import { RelationName } from "~/libs/enums/enums.js";
import { type Repository } from "~/libs/types/types.js";

import { CarEntity } from "./car.entity.js";
import { type CarModel } from "./car.model.js";
import { type CarDetailsModel } from "./car-details.model.js";

class CarRepository implements Repository<CarEntity> {
	private carDetailsModel: typeof CarDetailsModel;
	private carModel: typeof CarModel;
	public constructor(
		carModel: typeof CarModel,
		carDetailsModel: typeof CarDetailsModel,
	) {
		this.carModel = carModel;
		this.carDetailsModel = carDetailsModel;
	}

	public async create(entity: CarEntity): Promise<CarEntity> {
		const {
			cdPlayer,
			climateControl,
			name,
			navigationSystem,
			numberOfDoors,
			panoramicRoof,
			parkingSensors,
			rentPrice,
			trunkVolume,
		} = entity.toNewObject();

		const car = await this.carModel
			.query()
			.insert({
				name,
				rentPrice,
			})
			.returning("*")
			.execute();

		const carDetails = await this.carDetailsModel
			.query()
			.insert({
				cdPlayer,
				climateControl,
				navigationSystem,
				numberOfDoors,
				panoramicRoof,
				parkingSensors,
				trunkVolume,
			})
			.returning("*")
			.execute();

		return CarEntity.initialize({
			cdPlayer: carDetails.cdPlayer,
			climateControl: carDetails.climateControl,
			createdAt: car.createdAt,
			id: car.id,
			image: car.image,
			name: car.name,
			navigationSystem: carDetails.navigationSystem,
			numberOfDoors: carDetails.numberOfDoors,
			panoramicRoof: carDetails.panoramicRoof,
			parkingSensors: carDetails.parkingSensors,
			rentPrice: car.rentPrice,
			trunkVolume: carDetails.trunkVolume,
			updatedAt: car.updatedAt,
		});
	}

	public async delete(carId: number): Promise<boolean> {
		return Boolean(await this.carModel.query().deleteById(carId).execute());
	}

	public async find(userId: number): Promise<CarEntity | null> {
		const car = await this.carModel
			.query()
			.findById(userId)
			.withGraphJoined(`[${RelationName.CAR_DETAILS}]`)
			.execute();

		return car
			? CarEntity.initialize({
					cdPlayer: car.carDetails.cdPlayer,
					climateControl: car.carDetails.climateControl,
					createdAt: car.createdAt,
					id: car.id,
					image: car.image,
					name: car.name,
					navigationSystem: car.carDetails.navigationSystem,
					numberOfDoors: car.carDetails.numberOfDoors,
					panoramicRoof: car.carDetails.panoramicRoof,
					parkingSensors: car.carDetails.parkingSensors,
					rentPrice: car.rentPrice,
					trunkVolume: car.carDetails.trunkVolume,
					updatedAt: car.updatedAt,
				})
			: null;
	}

	public async findAll(): Promise<CarEntity[]> {
		const cars = await this.carModel
			.query()
			.withGraphJoined(`[${RelationName.CAR_DETAILS}]`)
			.execute();

		return cars.map((car) => {
			return CarEntity.initialize({
				cdPlayer: car.carDetails.cdPlayer,
				climateControl: car.carDetails.climateControl,
				createdAt: car.createdAt,
				id: car.id,
				image: car.image,
				name: car.name,
				navigationSystem: car.carDetails.navigationSystem,
				numberOfDoors: car.carDetails.numberOfDoors,
				panoramicRoof: car.carDetails.panoramicRoof,
				parkingSensors: car.carDetails.parkingSensors,
				rentPrice: car.rentPrice,
				trunkVolume: car.carDetails.trunkVolume,
				updatedAt: car.updatedAt,
			});
		});
	}
	public async findById(id: number): Promise<CarEntity | null> {
		const car = await this.carModel
			.query()
			.findById(id)
			.withGraphJoined(`[${RelationName.CAR_DETAILS}]`)
			.execute();

		return car
			? CarEntity.initialize({
					cdPlayer: car.carDetails.cdPlayer,
					climateControl: car.carDetails.climateControl,
					createdAt: car.createdAt,
					id: car.id,
					image: car.image,
					name: car.name,
					navigationSystem: car.carDetails.navigationSystem,
					numberOfDoors: car.carDetails.numberOfDoors,
					panoramicRoof: car.carDetails.panoramicRoof,
					parkingSensors: car.carDetails.parkingSensors,
					rentPrice: car.rentPrice,
					trunkVolume: car.carDetails.trunkVolume,
					updatedAt: car.updatedAt,
				})
			: null;
	}

	public async update(
		carId: number,
		data: CarRequestDto,
	): Promise<CarEntity | null> {
		const carDetails = await this.carDetailsModel
			.query()
			.findOne({ carId })
			.castTo<CarDetailsModel>();

		await this.carDetailsModel.query().patchAndFetchById(carDetails.id, {
			cdPlayer: data.cdPlayer,
			climateControl: data.climateControl,
			navigationSystem: data.navigationSystem,
			numberOfDoors: data.numberOfDoors,
			panoramicRoof: data.panoramicRoof,
			parkingSensors: data.parkingSensors,
			trunkVolume: data.trunkVolume,
		});

		const car = await this.carModel
			.query()
			.findById(carId)
			.withGraphJoined(`[${RelationName.CAR_DETAILS}]`)
			.execute();

		return car
			? CarEntity.initialize({
					cdPlayer: car.carDetails.cdPlayer,
					climateControl: car.carDetails.climateControl,
					createdAt: car.createdAt,
					id: car.id,
					image: car.image,
					name: car.name,
					navigationSystem: car.carDetails.navigationSystem,
					numberOfDoors: car.carDetails.numberOfDoors,
					panoramicRoof: car.carDetails.panoramicRoof,
					parkingSensors: car.carDetails.parkingSensors,
					rentPrice: car.rentPrice,
					trunkVolume: car.carDetails.trunkVolume,
					updatedAt: car.updatedAt,
				})
			: null;
	}
}

export { CarRepository };
