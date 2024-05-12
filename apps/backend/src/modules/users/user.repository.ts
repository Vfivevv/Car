import { RelationName } from "~/libs/enums/enums.js";
import { type Repository } from "~/libs/types/types.js";
import { UserEntity } from "~/modules/users/user.entity.js";
import { type UserModel } from "~/modules/users/user.model.js";

import { type UserProfileRequestDto } from "./libs/types/types.js";
import { type UserDetailsModel } from "./user-details.model.js";

class UserRepository implements Repository<UserEntity> {
	private userDetailsModel: typeof UserDetailsModel;
	private userModel: typeof UserModel;
	public constructor(
		userModel: typeof UserModel,
		userDetailsModel: typeof UserDetailsModel,
	) {
		this.userModel = userModel;
		this.userDetailsModel = userDetailsModel;
	}

	public async create(entity: UserEntity): Promise<UserEntity> {
		const { email, firstName, lastName, passwordHash, passwordSalt } =
			entity.toNewObject();

		const user = await this.userModel
			.query()
			.insert({
				email,
				passwordHash,
				passwordSalt,
			})
			.returning("*")
			.execute();
		const userDetails = await this.userDetailsModel
			.query()
			.insert({ firstName, lastName, userId: user.id })
			.returning("*")
			.execute();

		return UserEntity.initialize({
			createdAt: user.createdAt,
			email: user.email,
			firstName: userDetails.firstName,
			id: user.id,
			lastName: userDetails.lastName,
			passwordHash: user.passwordHash,
			passwordSalt: user.passwordSalt,
			phoneNumber: null,
			sex: userDetails.sex,
			updatedAt: user.updatedAt,
		});
	}

	public async delete(userId: number): Promise<boolean> {
		return Boolean(await this.userModel.query().deleteById(userId).execute());
	}

	public async find(userId: number): Promise<UserEntity | null> {
		const user = await this.userModel
			.query()
			.findById(userId)
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return user
			? UserEntity.initialize({
					createdAt: user.createdAt,
					email: user.email,
					firstName: user.userDetails.firstName,
					id: user.id,
					lastName: user.userDetails.lastName,
					passwordHash: user.passwordHash,
					passwordSalt: user.passwordSalt,
					phoneNumber: user.userDetails.phoneNumber,
					sex: user.userDetails.sex,
					updatedAt: user.updatedAt,
				})
			: null;
	}

	public async findAll(): Promise<UserEntity[]> {
		const users = await this.userModel
			.query()
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return users.map((user) => {
			return UserEntity.initialize({
				createdAt: user.createdAt,
				email: user.email,
				firstName: user.userDetails.firstName,
				id: user.id,
				lastName: user.userDetails.lastName,
				passwordHash: user.passwordHash,
				passwordSalt: user.passwordSalt,
				phoneNumber: user.userDetails.phoneNumber,
				sex: user.userDetails.sex,
				updatedAt: user.updatedAt,
			});
		});
	}

	public async findById(id: number): Promise<UserEntity | null> {
		const user = await this.userModel
			.query()
			.findById(id)
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return user
			? UserEntity.initialize({
					createdAt: user.createdAt,
					email: user.email,
					firstName: user.userDetails.firstName,
					id: user.id,
					lastName: user.userDetails.lastName,
					passwordHash: user.passwordHash,
					passwordSalt: user.passwordSalt,
					phoneNumber: user.userDetails.phoneNumber,
					sex: user.userDetails.sex,
					updatedAt: user.updatedAt,
				})
			: null;
	}

	public async getByEmail(email: string): Promise<UserEntity | null> {
		const user = await this.userModel
			.query()
			.findOne({ email })
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return user
			? UserEntity.initialize({
					createdAt: user.createdAt,
					email: user.email,
					firstName: user.userDetails.firstName,
					id: user.id,
					lastName: user.userDetails.lastName,
					passwordHash: user.passwordHash,
					passwordSalt: user.passwordSalt,
					phoneNumber: user.userDetails.phoneNumber,
					sex: user.userDetails.sex,
					updatedAt: user.updatedAt,
				})
			: null;
	}

	public async getByPhoneNumber(
		phoneNumber: null | string,
	): Promise<UserEntity | null> {
		const hasNickname = Boolean(phoneNumber);

		if (!hasNickname) {
			return null;
		}

		const user = await this.userModel
			.query()
			.findOne({ phoneNumber })
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return user
			? UserEntity.initialize({
					createdAt: user.createdAt,
					email: user.email,
					firstName: user.userDetails.firstName,
					id: user.id,
					lastName: user.userDetails.lastName,
					passwordHash: user.passwordHash,
					passwordSalt: user.passwordSalt,
					phoneNumber: user.userDetails.phoneNumber,
					sex: user.userDetails.sex,
					updatedAt: user.updatedAt,
				})
			: null;
	}
	public async update(
		userId: number,
		data: UserProfileRequestDto,
	): Promise<UserEntity | null> {
		const userDetails = await this.userDetailsModel
			.query()
			.findOne({ userId })
			.castTo<UserDetailsModel>();

		await this.userDetailsModel.query().patchAndFetchById(userDetails.id, {
			firstName: data.firstName,
			lastName: data.lastName,
			sex: data.sex,
		});

		const user = await this.userModel
			.query()
			.findById(userId)
			.withGraphJoined(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return user
			? UserEntity.initialize({
					createdAt: user.createdAt,
					email: user.email,
					firstName: user.userDetails.firstName,
					id: user.id,
					lastName: user.userDetails.lastName,
					passwordHash: user.passwordHash,
					passwordSalt: user.passwordSalt,
					phoneNumber: user.userDetails.phoneNumber,
					sex: user.userDetails.sex,
					updatedAt: user.updatedAt,
				})
			: null;
	}

	public async updatePassword(
		id: number,
		password: {
			hash: string;
			salt: string;
		},
	): Promise<UserEntity> {
		const { hash: passwordHash, salt: passwordSalt } = password;

		const user = await this.userModel
			.query()
			.patchAndFetchById(id, { passwordHash, passwordSalt })
			.withGraphFetched(`[${RelationName.USER_DETAILS},]`)
			.execute();

		return UserEntity.initialize({
			createdAt: user.createdAt,
			email: user.email,
			firstName: user.userDetails.firstName,
			id: user.id,
			lastName: user.userDetails.lastName,
			passwordHash: user.passwordHash,
			passwordSalt: user.passwordSalt,
			phoneNumber: user.userDetails.phoneNumber,
			sex: user.userDetails.sex,
			updatedAt: user.updatedAt,
		});
	}
}

export { UserRepository };
