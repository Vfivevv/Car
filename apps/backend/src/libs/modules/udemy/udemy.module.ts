import { ContentType, type HTTP, HTTPHeader } from "../http/http.js";
import {
	CourseDetailsField,
	CourseField,
	UdemyDefaultSearchParameter,
} from "./libs/enums/enums.js";

type SearchParameters = {
	page?: number;
	pageSize?: number;
	search?: string;
};

type Constructor = {
	baseUrl: string;
	clientId: string;
	clientSecret: string;
	http: HTTP;
};

class Udemy {
	private baseUrl: string;
	private clientId: string;
	private clientSecret: string;
	private http: HTTP;

	public constructor({ baseUrl, clientId, clientSecret, http }: Constructor) {
		this.baseUrl = baseUrl;
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.http = http;
	}

	private gethHeaders(): Headers {
		const headers = new Headers();
		const token = btoa(`${this.clientId}:${this.clientSecret}`);

		headers.append(HTTPHeader.AUTHORIZATION, `Basic ${token}`);
		headers.append(HTTPHeader.CONTENT_TYPE, ContentType.JSON);

		return headers;
	}

	private load(url: string, query: Record<string, unknown>): Promise<Response> {
		return this.http.load(url, {
			headers: this.gethHeaders(),
			method: "GET",
			payload: null,
			query,
		});
	}

	public async getCourseDetails(id: number): Promise<Response> {
		const query = {
			"fields[course]": Object.values(CourseDetailsField).join(","),
		};

		return await this.load(`${this.baseUrl}${id}`, query);
	}

	public async getCourses({
		page = UdemyDefaultSearchParameter.PAGE,
		pageSize = UdemyDefaultSearchParameter.PAGE_SIZE,
		search,
	}: SearchParameters = {}): Promise<Response> {
		const query: Record<string, unknown> = {
			"fields[course]": Object.values(CourseField).join(","),
			page,
			page_size: pageSize,
		};

		if (search) {
			query["search"] = search;
		}

		return await this.load(this.baseUrl, query);
	}
}

export { Udemy };