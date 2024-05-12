import { type CarModel } from "../cars/cars.js";
import { FormEntity } from "./form.entity.js";
import { type FormModel } from "./form.model.js";

class FormRepository {
	private carModel: typeof CarModel;
	private formModel: typeof FormModel;
	public constructor(carModel: typeof CarModel, formModel: typeof FormModel) {
		this.carModel = carModel;
		this.formModel = formModel;
	}

	public async create(entity: FormEntity): Promise<FormEntity> {
		const {
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
		} = entity.toNewObject();

		const form = await this.formModel
			.query()
			.insert({
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
			})
			.returning("*");

		return FormEntity.initialize({
			additionalInsurance: form.additionalInsurance,
			address: form.address,
			carId: form.carId,
			childSeat: form.childSeat,
			city: form.city,
			country: form.country,
			createdAt: form.createdAt,
			driverLicense: form.driverLicense,
			email: form.email,
			firstName: form.firstName,
			id: form.id,
			isRullesAccepted: form.isRullesAccepted,
			lastName: form.lastName,
			office: form.office,
			ownDriver: form.ownDriver,
			phone: form.phone,
			price: form.price,
			returnDate: form.returnDate,
			startDate: form.startDate,
			updatedAt: form.updatedAt,
		});
	}
}

export { FormRepository };
