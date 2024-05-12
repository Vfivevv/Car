import { APIPath } from "~/libs/enums/enums.js";
import {
	type APIHandlerOptions,
	type APIHandlerResponse,
	BaseController,
} from "~/libs/modules/controller/controller.js";
import { HTTPCode } from "~/libs/modules/http/http.js";
import { type Logger } from "~/libs/modules/logger/logger.js";
import { type UserService } from "~/modules/users/user.service.js";
import { type UserProfileRequestDto } from "~/modules/users/users.js";

import { UsersApiPath } from "./libs/enums/enums.js";
import { type UserGetByIdRequestDto } from "./libs/types/types.js";
import { userIdParametersValidationSchema } from "./libs/validation-schemas/validation-schemas.js";

class UserController extends BaseController {
	private userService: UserService;

	public constructor(logger: Logger, userService: UserService) {
		super(logger, APIPath.USERS);

		this.userService = userService;

		this.addRoute({
			handler: (options) => {
				return this.delete(
					options as APIHandlerOptions<{
						params: { id: string };
					}>,
				);
			},
			method: "DELETE",
			path: UsersApiPath.$ID,
			validation: {
				params: userIdParametersValidationSchema,
			},
		});

		this.addRoute({
			handler: (options) =>
				this.updateUser(
					options as APIHandlerOptions<{
						body: UserProfileRequestDto;
						params: { id: string };
					}>,
				),
			method: "PATCH",
			path: UsersApiPath.$ID,
		});

		this.addRoute({
			handler: () => {
				return this.findAll();
			},
			method: "GET",
			path: UsersApiPath.ROOT,
		});

		this.addRoute({
			handler: (options) => {
				return this.findById(
					options as APIHandlerOptions<{
						params: UserGetByIdRequestDto;
					}>,
				);
			},
			method: "GET",
			path: UsersApiPath.$ID,
			validation: {
				params: userIdParametersValidationSchema,
			},
		});
	}

	private async delete({
		params: { id },
	}: APIHandlerOptions<{
		params: {
			id: string;
		};
	}>): Promise<APIHandlerResponse> {
		return {
			payload: await this.userService.delete(Number(id)),
			status: HTTPCode.OK,
		};
	}

	private async findAll(): Promise<APIHandlerResponse> {
		return {
			payload: await this.userService.findAll(),
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
			payload: await this.userService.findById(options.params.id),
			status: HTTPCode.OK,
		};
	}

	private async updateUser(
		options: APIHandlerOptions<{
			body: UserProfileRequestDto;
			params: {
				id: string;
			};
		}>,
	): Promise<APIHandlerResponse> {
		const userId = Number(options.params.id);

		return {
			payload: await this.userService.update(userId, options.body),
			status: HTTPCode.OK,
		};
	}
}

export { UserController };
