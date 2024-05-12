import { type Entity, type ValueOf } from "~/libs/types/types.js";

import { type UserSex } from "./libs/enums/enums.js";

class UserEntity implements Entity {
	private createdAt: string;

	private email: string;

	private firstName: string;

	private id: null | number;

	private lastName: string;

	private passwordHash: string;

	private passwordSalt: string;

	private phoneNumber: null | string;

	private sex: ValueOf<typeof UserSex> | null;

	public updatedAt: string;

	private constructor({
		createdAt,
		email,
		firstName,
		id,
		lastName,
		passwordHash,
		passwordSalt,
		phoneNumber,
		sex,
		updatedAt,
	}: {
		createdAt: string;
		email: string;
		firstName: string;
		id: null | number;
		lastName: string;
		passwordHash: string;
		passwordSalt: string;
		phoneNumber: null | string;
		sex: ValueOf<typeof UserSex> | null;
		updatedAt: string;
	}) {
		this.firstName = firstName;
		this.createdAt = createdAt;
		this.id = id;
		this.lastName = lastName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.passwordHash = passwordHash;
		this.passwordSalt = passwordSalt;
		this.sex = sex;
		this.updatedAt = updatedAt;
	}

	public static initialize({
		createdAt,
		email,
		firstName,
		id,
		lastName,
		passwordHash,
		passwordSalt,
		phoneNumber,
		sex,
		updatedAt,
	}: {
		createdAt: string;
		email: string;
		firstName: string;
		id: number;
		lastName: string;
		passwordHash: string;
		passwordSalt: string;
		phoneNumber: null | string;
		sex: ValueOf<typeof UserSex> | null;
		updatedAt: string;
	}): UserEntity {
		return new UserEntity({
			createdAt,
			email,
			firstName,
			id,
			lastName,
			passwordHash,
			passwordSalt,
			phoneNumber,
			sex,
			updatedAt,
		});
	}

	public static initializeNew({
		email,
		firstName,
		lastName,
		passwordHash,
		passwordSalt,
	}: {
		email: string;
		firstName: string;
		lastName: string;
		passwordHash: string;
		passwordSalt: string;
	}): UserEntity {
		return new UserEntity({
			createdAt: "",
			email,
			firstName,
			id: null,
			lastName,
			passwordHash,
			passwordSalt,
			phoneNumber: null,
			sex: null,
			updatedAt: "",
		});
	}

	public toNewObject(): {
		createdAt: string;
		email: string;
		firstName: string;
		lastName: string;
		passwordHash: string;
		passwordSalt: string;
		phoneNumber: null | string;
		sex: ValueOf<typeof UserSex> | null;
		updatedAt: string;
	} {
		return {
			createdAt: this.createdAt,
			email: this.email,
			firstName: this.firstName,
			lastName: this.lastName,
			passwordHash: this.passwordHash,
			passwordSalt: this.passwordSalt,
			phoneNumber: this.phoneNumber,
			sex: this.sex,
			updatedAt: this.updatedAt,
		};
	}

	public toObject(): {
		createdAt: string;
		email: string;
		firstName: string;
		id: number;
		lastName: string;
		phoneNumber: null | string;
		sex: ValueOf<typeof UserSex> | null;
		updatedAt: string;
	} {
		return {
			createdAt: this.createdAt,
			email: this.email,
			firstName: this.firstName,
			id: this.id as number,
			lastName: this.lastName,
			phoneNumber: this.phoneNumber,
			sex: this.sex,
			updatedAt: this.updatedAt,
		};
	}
}

export { UserEntity };
