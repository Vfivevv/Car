import { APIPath } from "~/libs/enums/enums.js";
import {
	type APIHandlerOptions,
	type APIHandlerResponse,
	BaseController,
} from "~/libs/modules/controller/controller.js";
import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Logger } from "~/libs/modules/logger/logger.js";

import {
	type FormPriceRequestDto,
	type FormRequestDto,
	type FormService,
	FormsApiPath,
} from "./forms.js";
import { formAllParametersValidationSchema } from "./libs/validation-schemas/validation-schemas.js";

class FormController extends BaseController {
	private formService: FormService;

	public constructor(logger: Logger, formService: FormService) {
		super(logger, APIPath.FORMS);

		this.formService = formService;

		this.addRoute({
			handler: (options) => {
				return this.create(
					options as APIHandlerOptions<{
						body: FormRequestDto;
					}>,
				);
			},
			method: "POST",
			path: FormsApiPath.ROOT,
			validation: {
				body: formAllParametersValidationSchema,
			},
		});

		this.addRoute({
			handler: (options) => {
				return this.getPrice(
					options as APIHandlerOptions<{
						body: FormPriceRequestDto;
					}>,
				);
			},
			method: "POST",
			path: FormsApiPath.PRICE,
			// validation: {
			// 	body: userSignUpValidationSchema,
			// },
		});
	}

	private async create(
		options: APIHandlerOptions<{
			body: FormRequestDto;
		}>,
	): Promise<APIHandlerResponse> {
		const payload = options.body;

		return {
			payload: await this.formService.create(payload),
			status: HTTPCode.OK,
		};
	}

	private async getPrice(
		options: APIHandlerOptions<{
			body: FormPriceRequestDto;
		}>,
	): Promise<APIHandlerResponse> {
		const payload = options.body;

		return {
			payload: await this.formService.getPrice(payload),
			status: HTTPCode.OK,
		};
	}
}

export { FormController };
