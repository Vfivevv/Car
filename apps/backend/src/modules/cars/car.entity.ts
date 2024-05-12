import { type Entity } from "~/libs/types/types.js";

class CarEntity implements Entity {
	private cdPlayer: boolean;

	private climateControl: boolean;

	private createdAt: string;

	private id: null | number;

	private image: string;

	private name: string;

	private navigationSystem: boolean;

	private numberOfDoors: string;

	private panoramicRoof: boolean;

	private parkingSensors: boolean;

	private rentPrice: string;

	private trunkVolume: string;

	public updatedAt: string;

	private constructor({
		cdPlayer,
		climateControl,
		createdAt,
		id,
		image,
		name,
		navigationSystem,
		numberOfDoors,
		panoramicRoof,
		parkingSensors,
		rentPrice,
		trunkVolume,
		updatedAt,
	}: {
		cdPlayer: boolean;
		climateControl: boolean;
		createdAt: string;
		id: null | number;
		image: string;
		name: string;
		navigationSystem: boolean;
		numberOfDoors: string;
		panoramicRoof: boolean;
		parkingSensors: boolean;
		rentPrice: string;
		trunkVolume: string;
		updatedAt: string;
	}) {
		this.cdPlayer = cdPlayer;
		this.createdAt = createdAt;
		this.id = id;
		this.climateControl = climateControl;
		this.name = name;
		this.navigationSystem = navigationSystem;
		this.numberOfDoors = numberOfDoors;
		this.panoramicRoof = panoramicRoof;
		this.parkingSensors = parkingSensors;
		this.rentPrice = rentPrice;
		this.trunkVolume = trunkVolume;
		this.updatedAt = updatedAt;
		this.image = image;
	}

	public static initialize({
		cdPlayer,
		climateControl,
		createdAt,
		id,
		image,
		name,
		navigationSystem,
		numberOfDoors,
		panoramicRoof,
		parkingSensors,
		rentPrice,
		trunkVolume,
		updatedAt,
	}: {
		cdPlayer: boolean;
		climateControl: boolean;
		createdAt: string;
		id: null | number;
		image: string;
		name: string;
		navigationSystem: boolean;
		numberOfDoors: string;
		panoramicRoof: boolean;
		parkingSensors: boolean;
		rentPrice: string;
		trunkVolume: string;
		updatedAt: string;
	}): CarEntity {
		return new CarEntity({
			cdPlayer,
			climateControl,
			createdAt,
			id,
			image,
			name,
			navigationSystem,
			numberOfDoors,
			panoramicRoof,
			parkingSensors,
			rentPrice,
			trunkVolume,
			updatedAt,
		});
	}

	public static initializeNew({
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
	}: {
		cdPlayer: boolean;
		climateControl: boolean;
		image: string;
		name: string;
		navigationSystem: boolean;
		numberOfDoors: string;
		panoramicRoof: boolean;
		parkingSensors: boolean;
		rentPrice: string;
		trunkVolume: string;
	}): CarEntity {
		return new CarEntity({
			cdPlayer,
			climateControl,
			createdAt: "",
			id: null,
			image,
			name,
			navigationSystem,
			numberOfDoors,
			panoramicRoof,
			parkingSensors,
			rentPrice,
			trunkVolume,
			updatedAt: "",
		});
	}

	public toNewObject(): {
		cdPlayer: boolean;
		climateControl: boolean;
		createdAt: string;
		image: string;
		name: string;
		navigationSystem: boolean;
		numberOfDoors: string;
		panoramicRoof: boolean;
		parkingSensors: boolean;
		rentPrice: string;
		trunkVolume: string;
		updatedAt: string;
	} {
		return {
			cdPlayer: this.cdPlayer,
			climateControl: this.climateControl,
			createdAt: this.createdAt,
			image: this.image,
			name: this.name,
			navigationSystem: this.navigationSystem,
			numberOfDoors: this.numberOfDoors,
			panoramicRoof: this.panoramicRoof,
			parkingSensors: this.parkingSensors,
			rentPrice: this.rentPrice,
			trunkVolume: this.trunkVolume,
			updatedAt: this.updatedAt,
		};
	}

	public toObject(): {
		cdPlayer: boolean;
		climateControl: boolean;
		createdAt: string;
		id: number;
		image: string;
		name: string;
		navigationSystem: boolean;
		numberOfDoors: string;
		panoramicRoof: boolean;
		parkingSensors: boolean;
		rentPrice: string;
		trunkVolume: string;
		updatedAt: string;
	} {
		return {
			cdPlayer: this.cdPlayer,
			climateControl: this.climateControl,
			createdAt: this.createdAt,
			id: this.id as number,
			image: this.image,
			name: this.name,
			navigationSystem: this.navigationSystem,
			numberOfDoors: this.numberOfDoors,
			panoramicRoof: this.panoramicRoof,
			parkingSensors: this.parkingSensors,
			rentPrice: this.rentPrice,
			trunkVolume: this.trunkVolume,
			updatedAt: this.updatedAt,
		};
	}
}

export { CarEntity };
