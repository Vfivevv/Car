import {
	FormErrorMessage,
	type FormPrice,
	type FormPriceRequestDto,
} from "@car/shared";

import { HTTPCode } from "~/libs/modules/http/http.js";

import { type AddonEntity } from "../activity-likes/addon.entity.js";
import { type AddonRepository } from "../activity-likes/addon.repository.js";
import { FormEntity } from "./form.entity.js";
import { type FormRepository } from "./forms.js";
import { FormError } from "./libs/exceptions/exceptions.js";
import {
	type FormRequestDto,
	type FormResponseDto,
} from "./libs/types/types.js";

class FormService {
	private addonRepository: AddonRepository;
	private formRepository: FormRepository;

	public constructor(
		formRepository: FormRepository,
		addonRepository: AddonRepository,
	) {
		this.formRepository = formRepository;
		this.addonRepository = addonRepository;
	}

	public async create(payload: FormRequestDto): Promise<FormResponseDto> {
		const form = await this.formRepository.create(
			FormEntity.initializeNew({
				additionalInsurance: payload.additionalInsurance,
				address: payload.address || "",
				carId: payload.carId as number,
				childSeat: payload.childSeat,
				city: payload.city || "",
				country: payload.country || "",
				driverLicense: payload.driverLicense || "",
				email: payload.email,
				firstName: payload.firstName,
				isRullesAccepted: payload.isRullesAccepted,
				lastName: payload.lastName,
				office: payload.office,
				ownDriver: payload.ownDriver,
				phone: payload.phone,
				price: payload.price,
				returnDate: payload.returnDate,
				startDate: payload.startDate,
			}),
		);

		return form.toObject();
	}

	public async getPrice(payload: FormPriceRequestDto): Promise<FormPrice> {
		const addons = await this.addonRepository.findAll();
		const { days } = payload;

		if (!addons) {
			throw new FormError({
				message: FormErrorMessage.ADDONS_PRICE_NOT_FOUND,
				status: HTTPCode.NOT_FOUND,
			});
		}

		const childSeatPrice =
			addons.find((item: AddonEntity) => item.name === "child_seat")?.price ??
			0;
		const ownDriverPrice =
			addons.find((item: AddonEntity) => item.name === "own_driver")?.price ??
			0;
		const additionalInsurancePrice =
			addons.find((item: AddonEntity) => item.name === "additional_insurance")
				?.price ?? 0;

		const childSeat = payload.childSeat * days * childSeatPrice;
		const ownDriver = payload.ownDriver ? ownDriverPrice * payload.days : 0;
		const additionalInsurance = payload.additionalInsurance
			? additionalInsurancePrice
			: 0;

		const carPrice = payload.price * days;

		const sum = childSeat + ownDriver + additionalInsurance + carPrice;

		return { price: sum };
	}
}

export { FormService };
