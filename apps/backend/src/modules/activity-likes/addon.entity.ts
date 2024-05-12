import { type Entity } from "~/libs/types/types.js";

class AddonEntity implements Entity {
	private createdAt: string;

	private id: null | number;

	private updatedAt: string;

	public name: string;

	public price: number;

	private constructor({
		createdAt,
		id,
		name,
		price,
		updatedAt,
	}: {
		createdAt: string;
		id: null | number;
		name: string;
		price: number;
		updatedAt: string;
	}) {
		this.createdAt = createdAt;
		this.name = name;
		this.id = id;
		this.updatedAt = updatedAt;
		this.price = price;
	}

	public static initialize({
		createdAt,
		id,
		name,
		price,
		updatedAt,
	}: {
		createdAt: string;
		id: null | number;
		name: string;
		price: number;
		updatedAt: string;
	}): AddonEntity {
		return new AddonEntity({
			createdAt,
			id,
			name,
			price,
			updatedAt,
		});
	}

	public static initializeNew({
		name,
		price,
	}: {
		name: string;
		price: number;
	}): AddonEntity {
		return new AddonEntity({
			createdAt: "",
			id: null,
			name,
			price,
			updatedAt: "",
		});
	}

	public toNewObject(): {
		name: string;
		price: number;
	} {
		return {
			name: this.name,
			price: this.price,
		};
	}

	public toObject(): {
		id: number;
		name: string;
		price: number;
	} {
		return {
			id: this.id as number,
			name: this.name,
			price: this.price,
		};
	}

	public toPrice(): {
		price: number;
	} {
		return {
			price: this.price,
		};
	}
}

export { AddonEntity };
