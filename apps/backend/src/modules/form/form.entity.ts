import { type Entity } from "~/libs/types/types.js";

class FormEntity implements Entity {
	private carId: number;

	private createdAt: string;

	private id: null | number;

	public additionalInsurance!: boolean;

	public address!: string;

	public childSeat!: number;

	public city!: string;

	public country!: string;

	public driverLicense!: string;

	public email!: string;

	public firstName!: string;

	public isRullesAccepted: boolean;

	public lastName!: string;

	public office!: string;

	public ownDriver!: boolean;

	public phone!: string;

	public price!: number;

	public returnDate!: string;

	public startDate!: string;

	public updatedAt: string;
	private constructor({
		additionalInsurance,
		address,
		carId,
		childSeat,
		city,
		country,
		createdAt,
		driverLicense,
		email,
		firstName,
		id,
		isRullesAccepted,
		lastName,
		office,
		ownDriver,
		phone,
		price,
		returnDate,
		startDate,
		updatedAt,
	}: {
		additionalInsurance: boolean;
		address: string;
		carId: number;
		childSeat: number;
		city: string;
		country: string;
		createdAt: string;
		driverLicense: string;
		email: string;
		firstName: string;
		id: null | number;
		isRullesAccepted: boolean;
		lastName: string;
		office: string;
		ownDriver: boolean;
		phone: string;
		price: number;
		returnDate: string;
		startDate: string;
		updatedAt: string;
	}) {
		this.createdAt = createdAt;
		this.id = id;
		this.updatedAt = updatedAt;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.city = city;
		this.country = country;
		this.address = address;
		this.driverLicense = driverLicense;
		this.isRullesAccepted = isRullesAccepted;
		this.carId = carId;
		this.childSeat = childSeat;
		this.ownDriver = ownDriver;
		this.additionalInsurance = additionalInsurance;
		this.office = office;
		this.startDate = startDate;
		this.returnDate = returnDate;
		this.price = price;
	}

	public static initialize({
		additionalInsurance,
		address,
		carId,
		childSeat,
		city,
		country,
		createdAt,
		driverLicense,
		email,
		firstName,
		id,
		isRullesAccepted,
		lastName,
		office,
		ownDriver,
		phone,
		price,
		returnDate,
		startDate,
		updatedAt,
	}: {
		additionalInsurance: boolean;
		address: string;
		carId: number;
		childSeat: number;
		city: string;
		country: string;
		createdAt: string;
		driverLicense: string;
		email: string;
		firstName: string;
		id: null | number;
		isRullesAccepted: boolean;
		lastName: string;
		office: string;
		ownDriver: boolean;
		phone: string;
		price: number;
		returnDate: string;
		startDate: string;
		updatedAt: string;
	}): FormEntity {
		return new FormEntity({
			additionalInsurance,
			address,
			carId,
			childSeat,
			city,
			country,
			createdAt,
			driverLicense,
			email,
			firstName,
			id,
			isRullesAccepted,
			lastName,
			office,
			ownDriver,
			phone,
			price,
			returnDate,
			startDate,
			updatedAt,
		});
	}

	public static initializeNew({
		additionalInsurance,
		address,
		carId,
		childSeat,
		city,
		country,
		driverLicense,
		email,
		firstName,
		isRullesAccepted,
		lastName,
		office,
		ownDriver,
		phone,
		price,
		returnDate,
		startDate,
	}: {
		additionalInsurance: boolean;
		address: string;
		carId: number;
		childSeat: number;
		city: string;
		country: string;
		driverLicense: string;
		email: string;
		firstName: string;
		isRullesAccepted: boolean;
		lastName: string;
		office: string;
		ownDriver: boolean;
		phone: string;
		price: number;
		returnDate: string;
		startDate: string;
	}): FormEntity {
		return new FormEntity({
			additionalInsurance,
			address,
			carId,
			childSeat,
			city,
			country,
			createdAt: "",
			driverLicense,
			email,
			firstName,
			id: null,
			isRullesAccepted,
			lastName,
			office,
			ownDriver,
			phone,
			price,
			returnDate,
			startDate,
			updatedAt: "",
		});
	}

	public toNewObject(): {
		additionalInsurance: boolean;
		address: string;
		carId: number;
		childSeat: number;
		city: string;
		country: string;
		driverLicense: string;
		email: string;
		firstName: string;
		isRullesAccepted: boolean;
		lastName: string;
		office: string;
		ownDriver: boolean;
		phone: string;
		price: number;
		returnDate: string;
		startDate: string;
	} {
		return {
			additionalInsurance: this.additionalInsurance,
			address: this.address,
			carId: this.carId,
			childSeat: this.childSeat,
			city: this.city,
			country: this.country,
			driverLicense: this.driverLicense,
			email: this.email,
			firstName: this.firstName,
			isRullesAccepted: this.isRullesAccepted,
			lastName: this.lastName,
			office: this.office,
			ownDriver: this.ownDriver,
			phone: this.phone,
			price: this.price,
			returnDate: this.returnDate,
			startDate: this.startDate,
		};
	}

	public toObject(): {
		additionalInsurance: boolean;
		address: string;
		carId: number;
		childSeat: number;
		city: string;
		country: string;
		createdAt: string;
		driverLicense: string;
		email: string;
		firstName: string;
		id: number;
		isRullesAccepted: boolean;
		lastName: string;
		office: string;
		ownDriver: boolean;
		phone: string;
		price: number;
		returnDate: string;
		startDate: string;
		updatedAt: string;
	} {
		return {
			additionalInsurance: this.additionalInsurance,
			address: this.address,
			carId: this.carId,
			childSeat: this.childSeat,
			city: this.city,
			country: this.country,
			createdAt: this.createdAt,
			driverLicense: this.driverLicense,
			email: this.email,
			firstName: this.firstName,
			id: this.id as number,
			isRullesAccepted: this.isRullesAccepted,
			lastName: this.lastName,
			office: this.office,
			ownDriver: this.ownDriver,
			phone: this.phone,
			price: this.price,
			returnDate: this.returnDate,
			startDate: this.startDate,
			updatedAt: this.updatedAt,
		};
	}
}

export { FormEntity };
